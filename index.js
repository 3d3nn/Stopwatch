const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const timeDisplay = document.querySelector(".timeDisplay");

startBtn.addEventListener("click", () => {
  startTimer();
});

stopBtn.addEventListener("click", () => {
  stopTimer();
});

resetBtn.addEventListener("click", () => {
  resetTimer();
});

let startTime = 0;
let elapsedTime = 0;

let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime
    timeDisplay.textContent = formatTime(elapsedTime);
  }, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}
function formatTime(elapsedTime) {
  const miliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 ^ 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") + 
":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + 
":" +
  (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + 
"." +
 (miliseconds > 9 ? miliseconds : "0" + miliseconds));
}
function stopTimer() {
  clearInterval(timerInterval);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}
function resetTimer() {
  timeDisplay.textContent = "00:00:00";
  startBtn.disabled = false;
  stopBtn.disabled = false;
}
