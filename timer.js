let Interval;

let hours = 0;
let minutes = 0;
let seconds = 0;

const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

//all utility functions to setup the page
const addPresetEventListeners = () => {
  let buttonDiv = document.getElementById("presets");
  buttonDiv.childNodes.forEach((button) => {
    button.addEventListener("click", setPresetTime);
  });
};

const setPresetTime = (e) => {
  let button = e.target.id;

  switch (button) {
    case "one-hour":
      hours += 1;
      break;
    case "thirty-min":
      minutes += 30;
      break;
    case "fifteen-min":
      minutes += 15;
      break;
    case "ten-min":
      minutes += 10;
      break;
    case "five-min":
      minutes += 5;
      break;
    case "one-min":
      mintes += 1;
      break;
    case "thirty-sec":
      seconds += 30;
      break;
    case "fifteen-sec":
      seconds += 15;
      break;
    case "five-sec":
      seconds += 5;
      break;
  }

  updateHTML();
};

startButton.onclick = () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 1000);
};

stopButton.onclick = () => {
  clearInterval(Interval);
};

resetButton.onclick = () => {
  clearInterval(Interval);
  minutes = 0;
  tens = 0;
  seconds = 0;

  updateHTML();
};

//logic of the timer
const startTimer = () => {
  if (hours != 0 || minutes != 0 || seconds != 0) {
    seconds -= 1;
    if (seconds < 0) {
      seconds = 59;
      minutes -= 1;
    }
    if (minutes < 0) {
      minutes = 59;
      hours -= 1;
    }
    updateHTML();
  } else {
    alert("Done!");
    clearInterval(Interval);
  }
};

//utility functions
const updateHTML = () => {
  if (seconds >= 60) {
    seconds = seconds % 60;
    minutes += 1;
  }
  if (minutes >= 60) {
    minutes = minutes % 60;
    hours += 1;
  }

  seconds > 9 && seconds != undefined
    ? (secondsDisplay.innerHTML = seconds)
    : (secondsDisplay.innerHTML = "0" + seconds);
  minutes > 9 && minutes != undefined
    ? (minutesDisplay.innerHTML = minutes)
    : (minutesDisplay.innerHTML = "0" + minutes);
  hours > 9 && hours != undefined
    ? (hoursDisplay.innerHTML = hours)
    : (hoursDisplay.innerHTML = "0" + hours);
};

const init = () => {
  addPresetEventListeners();
};

window.onload = init();