const MARKERS = [
  {
    name: "Ohio Statehouse",
    lat: 39.9612,
    lng: -82.9988,
    radius: 150,
    story: "Greek Revival capitol completed in 1861, built largely by convict labor from the Ohio Penitentiary. The cornerstone was laid in 1839 by Governor Vance."
  },
  {
    name: "Camp Chase",
    lat: 39.9450,
    lng: -83.0450,
    radius: 150,
    story: "Union training and prison camp established 1861 on the west side. Held up to 9,000 Confederate prisoners; the cemetery still stands at 2900 Sullivant Avenue."
  },
  {
    name: "Ohio Penitentiary",
    lat: 39.9650,
    lng: -83.0050,
    radius: 150,
    story: "Opened 1834 on Spring Street, housed over 150,000 inmates including the Sultana disaster survivors and Dr. Sam Sheppard. Demolished 1998; the site is now a parking garage."
  }
];

let lastSpoken = null;

function distanceMeters(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function speak(text) {
  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95;
    speechSynthesis.speak(u);
  }
}

function checkLocation(pos) {
  const { latitude, longitude } = pos.coords;
  for (const m of MARKERS) {
    if (distanceMeters(latitude, longitude, m.lat, m.lng) <= m.radius) {
      if (lastSpoken !== m.name) {
        lastSpoken = m.name;
        speak(m.story);
      }
      return;
    }
  }
  lastSpoken = null;
}

if ("geolocation" in navigator) {
  navigator.geolocation.watchPosition(checkLocation, null, {
    enableHighAccuracy: true,
    maximumAge: 5000
  });
}
  {
    name: "Fort Wayne",
    lat: 41.0793,
    lng: -85.1394,
    radius: 150,
    story: "Built 1794 by General Anthony Wayne on the site of a Miami village called Kekionga. Three rivers meet here — the St. Marys, the St. Joseph, and the Maumee — which is why Wayne chose it."
  },
  {
    name: "Auburn",
    lat: 41.3667,
    lng: -85.0589,
    radius: 150,
    story: "Home of the Auburn Automobile Company, which built luxury cars from 1900 to 1937. The factory is now the Auburn Cord Duesenberg Automobile Museum — the only museum in the world dedicated to one marque."
  },
  {
    name: "Hicksville",
    lat: 41.2931,
    lng: -84.7630,
    radius: 1200,
    story: "Founded 1835 by Henry W. Hicks, a land speculator from New York who bought the land cheap, platted the town, and named it after himself. The village incorporated in 1851."
  },
