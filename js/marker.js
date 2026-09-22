const spoken = new Set();
let speaking = false;
let watchId = null;
let speakTimer = null;
let lastAudio = null;

const MARKERS = (typeof STORIES !== "undefined" ? STORIES : []).map(s => ({
  id: s.id,
  name: s.name,
  lat: s.lat,
  lng: s.lng,
  radius: s.radius,
  layer: s.layer || "place",
  story: s.short
}));

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

function mphFrom(pos) {
  const s = pos.coords.speed;
  if (s == null || s < 0) return 0;
  return s * 2.23694;
}

function effectiveRadius(marker, speedMph) {
  if (marker.layer === "approach") return marker.radius;
  if (speedMph >= 60) return 0;
  if (speedMph >= 35) return marker.radius * 3;
  return marker.radius;
}

function speak(text) {
  if (speaking) return;
  speaking = true;
  if (speakTimer) clearTimeout(speakTimer);
  speakTimer = setTimeout(() => { speaking = false; }, 45000);

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
      audio.onended = () => { speaking = false; };
      audio.onerror = () => { speaking = false; };
      audio.src = url;
      return audio.play();
    })
    .catch((err) => {
      console.log("TTS error, falling back", err);
      if ("speechSynthesis" in window) {
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.rate = 0.95;
        u.onend = () => { speaking = false; };
        u.onerror = () => { speaking = false; };
        speechSynthesis.speak(u);
      } else {
        speaking = false;
      }
    });
}

function checkLocation(pos, gpsEl) {
  const { latitude, longitude } = pos.coords;
  const speedMph = mphFrom(pos);

  let nearest = null;
  MARKERS.forEach((m) => {
    const d = distanceMeters(latitude, longitude, m.lat, m.lng);
    if (!nearest || d < nearest.d) nearest = { m, d };
  });

  if (gpsEl && nearest) {
    gpsEl.textContent =
      "GPS: " + latitude.toFixed(4) + ", " + longitude.toFixed(4) +
      " | " + Math.round(nearest.d) + "m to " + nearest.m.name +
      " | " + Math.round(speedMph) + " mph";
  }

  const hits = MARKERS
    .map((m) => {
      const d = distanceMeters(latitude, longitude, m.lat, m.lng);
      return { m, d, r: effectiveRadius(m, speedMph) };
    })
    .filter((x) => x.r > 0 && x.d <= x.r && !spoken.has(x.m.id || x.m.name))
    .sort((a, b) => a.d - b.d);

  if (hits.length && !speaking) {
    spoken.add(hits[0 0 0].m.story);
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
  watchId = bindWatch(gpsEl, true);
};






