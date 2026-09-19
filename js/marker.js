const MARKERS = [
  {
    name: "Columbus",
    lat: 39.9612,
    lng: -82.9988,
    radius: 1500,
    story: "Ohio Statehouse — Greek Revival capitol completed in 1861 after 22 years of construction. The cornerstone was laid July 4, 1839, and much of the stonework was done by convict labor from the Ohio Penitentiary. It's a National Historic Landmark."
  },
  {
    name: "Camp Chase",
    lat: 39.9438,
    lng: -83.0760,
    radius: 400,
    story: "Camp Chase Confederate Cemetery — 2900 Sullivant Avenue. A Union training camp that became a prison for Confederate soldiers; more than 2,200 are buried here. The cemetery is all that remains of the camp."
  },
  {
    name: "Ohio Penitentiary",
    lat: 39.9694,
    lng: -83.0067,
    radius: 400,
    story: "Ohio Penitentiary — stood on Spring Street from 1834 to 1984, now the Arena District. Held over 5,000 inmates at its peak, including Sam Sheppard and O. Henry. The 1930 fire killed 322 prisoners — the deadliest prison fire in U.S. history. Demolished in 1998."
  },
  {
    name: "Fort Wayne",
    lat: 41.0793,
    lng: -85.1394,
    radius: 2000,
    story: "Wabash and Erie Canal — the longest canal ever built in North America, 468 miles. Construction began here in 1832 because Fort Wayne sits at the highest point on the route, earning the nickname Summit City. The canal made the town a boomtown before railroads killed it."
  },
  {
    name: "Johnny Appleseed Grave",
    lat: 41.11197,
    lng: -85.12288,
    radius: 250,
    story: "Johnny Appleseed — John Chapman, 1774 to 1845. He spent his last years planting orchards around Fort Wayne and is buried in Johnny Appleseed Park on Parnell Avenue. The stone reads: He lived for others."
  },
  {
    name: "Philo Farnsworth House",
    lat: 41.0936,
    lng: -85.1286,
    radius: 250,
    story: "Philo T. Farnsworth — inventor of electronic television. From 1939 he ran the Farnsworth Television and Radio Corporation in the old Capehart factory here, mass-producing the first televisions. He lived at 734 East State Boulevard; an Indiana state marker marks the house."
  },
  {
    name: "Auburn",
    lat: 41.3667,
    lng: -85.0589,
    radius: 1500,
    story: "Auburn Automobile Company — founded 1900, built luxury cars until 1937. The factory is now the Auburn Cord Duesenberg Automobile Museum, a National Historic Landmark and the only museum in the world dedicated to one marque."
  },
  {
    name: "Hicksville",
    lat: 41.2958,
    lng: -84.7592,
    radius: 1200,
    story: "Hicksville — platted in 1835 by the Hicks Land Company of New York, led by Henry W. Hicks, who named the town after himself. A post office has run here since 1838, and the village was incorporated in 1871."
  },
  {
    name: "St. Paul's Church",
    lat: 41.2923,
    lng: -84.7636,
    radius: 180,
    story: "St. Paul's Episcopal Church — built in 1875 on West High Street and donated by A.P. Edgerton. A historical marker stands beside it. The Hicksville Historical Society rescued the church from demolition in the 1970s. It is on the National Register of Historic Places."
  }
];

const spoken = new Set();
let speaking = false;

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
  if (!("speechSynthesis" in window) || speaking) return;
  speaking = true;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.95;
  u.onend = () => { speaking = false; };
  u.onerror = () => { speaking = false; };
  speechSynthesis.speak(u);
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


