const spoken = new Set();
let speaking = false;
let watchId = null;

const MARKERS = (typeof STORIES !== "undefined" ? STORIES : []).map(s => ({
  name: s.name,
  lat: s.lat,
  lng: s.lng,
  radius: s.radius,
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

function speak(text) {
  if (speaking) return;
  speaking = true;

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
      const audio = new Audio(URL.createObjectURL(blob));
      audio.onended = () => { speaking = false; };
      audio.onerror = () => { speaking = false; };
      audio.play();
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

function checkLocation(pos) {
  const { latitude, longitude } = pos.coords;
  const hits = MARKERS
    .map(m => ({ m, d: distanceMeters(latitude, longitude, m.lat, m.lng) }))
    .filter(x => x.d <= x.m.radius && !spoken.has(x.m.name))
    .sort((a, b) => a.m.radius - b.m.radius || a.d - b.d);

  if (hits.length && !speaking) {
    spoken.add(hits[0].m.name);
    speak(hits[0].m.story);
  }
}

function bindWatch(gpsEl, highAccuracy) {
  return navigator.geolocation.watchPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      if (gpsEl) {
        gpsEl.textContent =
          "GPS: " + latitude.toFixed(5) + ", " + longitude.toFixed(5);
      }
      checkLocation(pos);
    },
    (err) => {
      if (gpsEl) gpsEl.textContent = "GPS: " + err.message;
      if (highAccuracy && watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
        watchId = bindWatch(gpsEl, false);
      }
    },
    {
      enableHighAccuracy: highAccuracy,
      maximumAge: 5000,
      timeout: 8000
    }
  );
}

window.startMarkerRadio = function (gpsEl) {
  if (watchId !== null) return;
  if (!("geolocation" in navigator)) {
    if (gpsEl) gpsEl.textContent = "GPS: not available";
    return;
  }
  if (gpsEl) gpsEl.textContent = "GPS: waiting for fix…";
  watchId = bindWatch(gpsEl, true);
};



