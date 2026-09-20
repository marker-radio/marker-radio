const MARKERS = STORIES.map(s => ({
  name: s.name,
  lat: s.lat,
  lng: s.lng,
  radius: s.radius,
  story: s.short
}));

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

window.startMarkerRadio = function (gpsEl) {
  if (!("geolocation" in navigator)) {
    if (gpsEl) gpsEl.textContent = "GPS: not available";
    return;
  }
  navigator.geolocation.watchPosition(
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
    },
    { enableHighAccuracy: true, maximumAge: 2000, timeout: 10000 }
  );
};


