const status = document.getElementById("status");
const button = document.getElementById("start");

button.addEventListener("click", () => {
  status.textContent = "LIVE";
  status.classList.add("live");
  console.log("Radio started");
});
