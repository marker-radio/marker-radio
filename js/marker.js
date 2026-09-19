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
    lat: 39.9450,
    lng: -83.0450,
    radius: 800,
    story: "Camp Chase Confederate Cemetery — 2900 Sullivant Avenue. A Union training camp that became a prison for Confederate soldiers; more than 2,200 are buried here. The cemetery is all that remains of the camp."
  },
  {
    name: "Ohio Penitentiary",
    lat: 39.9650,
    lng: -83.0050,
    radius: 600,
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
    radius: 300,
    story: "Johnny Appleseed — John Chapman, 1774 to 1845. He spent his last years planting orchards around Fort Wayne and is buried in Johnny Appleseed Park on Parnell Avenue. The stone reads: He lived for others."
  },
  {
    name: "Philo Farnsworth House",
    lat: 41.0936,
    lng: -85.1286,
    radius: 300,
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
    lat: 41.2931,
    lng: -84.7630,
    radius: 1200,
    story: "Hicksville — platted in 1835 by the Hicks Land Company of New York, led by Henry W. Hicks, who named the town after himself. A post office has run here since 1838, and the village was incorporated in 1871."
  },
  {
    name: "St. Paul's Church",
    lat: 41.2935,
    lng: -84.7635,
    radius: 200,
    story: "St. Paul's Episcopal Church — built 1875 on West High Street, donated by A.P. Edgerton. A historical marker stands beside it. The Hicksville Historical Society rescued it from demolition in the 1970s; it's on the National Register of Historic Places."
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

