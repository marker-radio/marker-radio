const status = document.getElementById("status");
const button = document.getElementById("start");
const gps = document.getElementById("gps");

function eveIntro() {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(
    "This is Eve. Marker Radio is on. I'll speak when we pass a story."
  );
  u.rate = 0.95;
  speechSynthesis.speak(u);
}

button.addEventListener("click", () => {
  status.textContent = "LIVE";
  status.classList.add("live");
  gps.textContent = "GPS: asking…";
  eveIntro();
  if (window.startMarkerRadio) window.startMarkerRadio(gps);
});
