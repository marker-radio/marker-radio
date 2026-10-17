const spoken = new Set();
let speaking = false;
let watchId = null;
let speakTimer = null;
let lastAudio = null;
let storiesReadyAt = 0;
let speakGen = 0;
let armQuiet = false;
let highwayQuietUntil = 0;
const highwayQueue = [];

const HIGHWAY_MPH = 60;
const HIGHWAY_EAR_M = 8 * 1609.344;
const HIGHWAY_QUIET_MS = 2 * 60 * 1000;

const MARKERS = (typeof STORIES !== "undefined" ? STORIES : []).map(s => ({
  id: s.id,
  name: s.name,
  lat: s.lat,
  lng: s.lng,
  radius: s.radius,
  layer: s.layer || "place",
  story: s.short
}));

const TOWN_SLUGS = MARKERS
  .filter(m => m.id && m.id.startsWith("approach-"))
  .map(m => m.id.slice("approach-".length))
  .sort((a, b) => b.length - a.length);

function distanceMeters(lat1, lng1, lat2, lng2) {
  const r = 6371000;
  const p1 = lat1 * Math.PI / 180;
  const p2 = lat2 * Math.PI / 180;
  const dp = (lat2 - lat1) * Math.PI / 180;
  const dl = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dp / 2) * Math.sin(dp / 2) +
    Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) * Math.sin(dl / 2);
  return 2 * r * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function bearingDeg(lat1, lng1, lat2, lng2) {
  const p1 = lat1 * Math.PI / 180;
  const p2 = lat2 * Math.PI / 180;
  const dl = (lng2 - lng1) * Math.PI / 180;
  const y = Math.sin(dl) * Math.cos(p2);
  const x = Math.cos(p1) * Math.sin(p2) - Math.sin(p1) * Math.cos(p2) * Math.cos(dl);
  return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}

function sideWords(heading, lat, lng, marker) {
  if (heading == null || heading < 0 || Number.isNaN(heading)) return "";
  const bearing = bearingDeg(lat, lng, marker.lat, marker.lng);
  let diff = bearing - heading;
  while (diff > 180) diff -= 360;
  while (diff < -180) diff += 360;
  if (Math.abs(diff) < 30) return "Ahead. ";
  if (diff > 0) return "On your right. ";
  return "On your left. ";
}

function townKey(marker) {
  const id = marker.id || "";
  if (id.startsWith("approach-")) return id.slice("approach-".length);
  for (const slug of TOWN_SLUGS) {
    if (id === slug || id.startsWith(slug + "-")) return slug;
  }
  const cut = id.indexOf("-");
  return cut > 0 ? id.slice(0, cut) : (marker.name || id);
}

function mphFrom(pos) {
  const s = pos.coords.speed;
  if (s == null || s < 0) return 0;
  return s * 2.23694;
}

function effectiveRadius(marker, speedMph) {
  if (marker.layer === "approach") return marker.radius;
  if (speedMph >= HIGHWAY_MPH) return 0;
  if (speedMph >= 35) return marker.radius * 3;
  return marker.radius;
}

function finishSpeaking(gen) {
  if (gen !== speakGen || !speaking) return;
  speaking = false;
  if (speakTimer) {
    clearTimeout(speakTimer);
    speakTimer = null;
  }
  if (highwayQueue.length) {
    const job = highwayQueue.shift();
    playHighwayStory(job.marker, job.lat, job.lng, job.heading, highwayQueue.length > 0);
    return;
  }
  if (armQuiet) {
    armQuiet = false;
    highwayQuietUntil = Date.now() + HIGHWAY_QUIET_MS;
  }
}

function speak(text) {
  if (speaking) return;
  speaking = true;
  const gen = ++speakGen;
  if (speakTimer) clearTimeout(speakTimer);
  speakTimer = setTimeout(() => finishSpeaking(gen), 90000);

  fetch("/.netlify/functions/speak", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  })
    .then((res) => {
      if (!res.ok) throw new Error("TTS failed");
      return res.blob();
    })
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const audio = lastAudio || new Audio();
      lastAudio = audio;
      audio.onended = () => finishSpeaking(gen);
      audio.onerror = () => finishSpeaking(gen);
      audio.src = url;
      return audio.play();
    })
    .catch((err) => {
      console.log("TTS error, falling back", err);
      if ("speechSynthesis" in window) {
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.rate = 0.95;
        u.onend = () => finishSpeaking(gen);
        u.onerror = () => finishSpeaking(gen);
        speechSynthesis.speak(u);
      } else {
        finishSpeaking(gen);
      }
    });
}

function playHighwayStory(marker, lat, lng, heading, moreAfter) {
  spoken.add(marker.id || marker.name);
  armQuiet = !moreAfter;
  speak(sideWords(heading, lat, lng, marker) + marker.story);
}

function checkHighway(lat, lng, heading) {
  if (speaking) return;
  if (Date.now() < highwayQuietUntil) return;

  const groups = new Map();
  for (const m of MARKERS) {
    if (m.layer === "approach" || !m.story) continue;
    const key = m.id || m.name;
    if (spoken.has(key)) continue;
    const d = distanceMeters(lat, lng, m.lat, m.lng);
    if (d > HIGHWAY_EAR_M) continue;
    const town = townKey(m);
    let g = groups.get(town);
    if (!g) {
      g = { d, pins: [] };
      groups.set(town, g);
    }
    g.pins.push(m);
    if (d < g.d) g.d = d;
  }
  if (!groups.size) return;

  let best = null;
  for (const g of groups.values()) {
    if (!best || g.d < best.d) best = g;
  }
  best.pins.sort((a, b) =>
    distanceMeters(lat, lng, a.lat, a.lng) - distanceMeters(lat, lng, b.lat, b.lng)
  );
  const second = best.pins[1] || null;
  if (second) highwayQueue.push({ marker: second, lat, lng, heading });
  playHighwayStory(best.pins[0], lat, lng, heading, !!second);
}

function checkLocation(pos, gpsEl) {
  const { latitude, longitude } = pos.coords;
  const speedMph = mphFrom(pos);
  const heading = pos.coords.heading;

  let nearest = null;
  MARKERS.forEach((m) => {
    const d = distanceMeters(latitude, longitude, m.lat, m.lng);
    if (!nearest || d < nearest.d) nearest = { m, d };
  });

  if (gpsEl && nearest) {
    let mode = "";
    if (speedMph >= HIGHWAY_MPH) {
      const left = Math.max(0, highwayQuietUntil - Date.now());
      mode = left > 0
        ? " | highway quiet " + Math.ceil(left / 1000) + "s"
        : " | highway";
    }
    gpsEl.textContent =
      "GPS: " + latitude.toFixed(4) + ", " + longitude.toFixed(4) +
      " | " + Math.round(nearest.d) + "m to " + nearest.m.name +
      " | " + Math.round(speedMph) + " mph" + mode;
  }

  if (Date.now() < storiesReadyAt) return;

  if (speedMph >= HIGHWAY_MPH) {
    checkHighway(latitude, longitude, heading);
    return;
  }

  const hits = MARKERS
    .map((m) => {
      const d = distanceMeters(latitude, longitude, m.lat, m.lng);
      return { m, d, r: effectiveRadius(m, speedMph) };
    })
    .filter((x) => x.r > 0 && x.d <= x.r && !spoken.has(x.m.id || x.m.name))
    .sort((a, b) => a.d - b.d);

  if (hits.length && !speaking) {
    spoken.add(hits[0].m.id || hits[0].m.name);
    speak(hits[0].m.story);
  }
}

function bindWatch(gpsEl, highAccuracy) {
  return navigator.geolocation.watchPosition(
    (pos) => checkLocation(pos, gpsEl),
    (err) => {
      if (gpsEl) gpsEl.textContent = "GPS: " + err.message;
      if (highAccuracy && watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
        watchId = bindWatch(gpsEl, false);
      }
    },
    { enableHighAccuracy: highAccuracy, maximumAge: 3000, timeout: 8000 }
  );
}

window.startMarkerRadio = function (gpsEl) {
  if (!lastAudio) {
    lastAudio = new Audio();
    lastAudio.play().catch(() => {});
  }
  if (watchId !== null) return;
  if (!("geolocation" in navigator)) {
    if (gpsEl) gpsEl.textContent = "GPS: not available";
    return;
  }
  if (gpsEl) {
    gpsEl.textContent = "GPS: waiting | " + MARKERS.length + " stories loaded";
  }
  storiesReadyAt = Date.now() + 30000;
  watchId = bindWatch(gpsEl, true);
};
