const hourHtml = document.getElementById("hour");
const minuteHtml = document.getElementById("minute");
const secundeHtml = document.getElementById("secunde");

console.log(hourHtml);
console.log(minuteHtml);
console.log(secundeHtml);

function addZero(value) {
  if (value < 10) {
    return "0" + value;
  }
  return value;
}

let startBtn = document.getElementById("startButton");
let resetButton = document.getElementById("resetButton");
let saveButton = document.getElementById("saveButton");

let secunde = 0;
let minute = 0;
let hour = 0;
let intervalId;

startBtn.addEventListener("click", function () {
  intervalId = setInterval(function () {
    secunde = secunde + 1;

    if (secunde == 60) {
      minute = minute + 1;
      secunde = 0;
    }

    if (minute == 60) {
      hour = hour + 1;
      minute = 0;
    }

    secundeHtml.innerHTML = addZero(secunde);
    minuteHtml.innerHTML = addZero(minute);
    hourHtml.innerHTML = addZero(hour);
  }, 1000);
});

function myStop() {
  clearInterval(intervalId);
}

resetButton.addEventListener("click", function () {
  hourHtml.innerHTML = "00";
  minuteHtml.innerHTML = "00";
  secundeHtml.innerHTML = "00";
});

saveButton.onclick = function () {
  const valuesHour = document.getElementById("hour");
  const clone = valuesHour.cloneNode(true);
  document.body.appendChild(clone);

  const valuesMinutes = document.getElementById("minute");
  const clone2 = valuesMinutes.cloneNode(true);
  document.body.appendChild(clone2);

  const valuesSeconds = document.getElementById("secunde");
  const clone3 = valuesSeconds.cloneNode(true);
  document.body.appendChild(clone3);
};
