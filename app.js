const display = document.querySelector(".watch");

let timer = null;
let elapsedTime = 0;
let startTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
    clearInterval(timer)
   elapsedTime = 0;
   startTime = 0;
   isRunning = false;
   display.innerHTML= "00:00:00:00"
}
function update() {
  let currTime = Date.now();
  elapsedTime = currTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let secound = Math.floor((elapsedTime / 1000) % 60);
  let milesecound = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  secound = String(secound).padStart(2, "0");
  milesecound = String(milesecound).padStart(2, "0");
  display.textContent = `${hours}:${minutes}:${secound}:${milesecound}`;
}
