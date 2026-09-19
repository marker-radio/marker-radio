const status = document.getElementById("status");
const button = document.getElementById("start");
const gps = document.getElementById("gps");

let introPlayed = false;

const GREETINGS = [
  "This is Eve. Marker Radio is on.",
  "Eve here. Stories are waiting along the road.",
  "Welcome aboard. This is Marker Radio.",
  "Eve speaking. Keep your eyes on the road — I'll handle the history.",
  "Marker Radio, live. I'm Eve.",
  "Good to have you. Eve's at the mic.",
  "This is your guide, Eve. Let's see what's out there.",
  "Eve online. The next story is closer than you think.",
  "Rolling now. Eve's riding along.",
  "Hello from Eve. History's just past the next mile marker.",
  "Eve's on the air. Buckle up for the back roads.",
  "This is Marker Radio with Eve. Drive safe, listen close.",
  "Eve here, and the road's full of stories today.",
  "Welcome to Marker Radio. I'm Eve, your roadside historian.",
  "All aboard for history. Eve's driving the narration.",
  "Eve checking in. There's a tale hiding at the next turn.",
  "Marker Radio is live. Eve's got the mic and the map.",
  "Good morning from Eve. Or whatever time it is where you are.",
  "This is Eve. The past is just off the shoulder of the road.",
  "Eve online and ready. Let's find out what this town knows.",
  "Pulling onto the story highway. Eve's your co-pilot.",
  "Eve here. Every town has a secret — I'll tell you theirs.",
  "Marker Radio, with Eve. The quiet roads have the loudest stories.",
  "Welcome in. I'm Eve, and I've been waiting for this drive.",
  "This is your history radio. Eve's speaking, you're steering.",
  "Eve's voice, your windshield. Let's go find some history.",
  "Rolling with Eve. The next marker's got a story attached.",
  "Eve here. I don't drive, but I know every back road's tale.",
  "This is Marker Radio. Eve's on, and the map is full.",
  "Hello again. Eve's got fifty ways to say the same thing — lucky you.",
  "Eve speaking. History doesn't wait for red lights.",
  "Marker Radio live. I'm Eve, and this road remembers.",
  "Good to ride with you. Eve's the one who never gets lost.",
  "This is Eve. Somewhere ahead, a town is hiding its best story.",
  "Eve online. The boring stretch is about to get interesting.",
  "Welcome to the drive. Eve's narrating, you're the audience.",
  "Eve here. I collect small-town legends like postcards.",
  "Marker Radio. Eve's voice, your GPS, one great story at a time.",
  "This is Eve. Buckle up — the past is closer than it looks.",
  "Eve checking in from the passenger seat of history.",
  "Rolling now. Eve's got the stories, you've got the wheel.",
  "This is Marker Radio with Eve. Silence is for the highway, not the history.",
  "Eve here. I promise the next town is more interesting than this one.",
  "Welcome aboard. Eve's been saving these stories for you.",
  "Eve online. Every mile marker's a chapter — turn the page.",
  "This is Eve. The road you're on was somebody's whole life once.",
  "Marker Radio, Eve at the mic. Let's make this drive unforgettable.",
  "Eve speaking. I may be a voice, but these towns are real.",
  "Good company for a long road. That's me — Eve.",
  "This is Marker Radio. Eve's here, and so is the next story."
];

function eveIntro() {
  if (!("speechSynthesis" in window) || introPlayed) return;
  introPlayed = true;
  speechSynthesis.cancel();
  const line = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
  const u = new SpeechSynthesisUtterance(line);
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
