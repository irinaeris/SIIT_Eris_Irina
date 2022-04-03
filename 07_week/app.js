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

startBtn.addEventListener("click", function () {
  let secunde = parseInt(secundeHtml.innerText);
  let minute = parseInt(minuteHtml.innerText);
  let hour = parseInt(hourHtml.innerText);

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
  clearInterval(intervalId);
  hourHtml.innerHTML = "00";
  minuteHtml.innerHTML = "00";
  secundeHtml.innerHTML = "00";
});

saveButton.onclick = function () {
  let secunde = parseInt(secundeHtml.innerText);
  let minute = parseInt(minuteHtml.innerText);
  let hour = parseInt(hourHtml.innerText);

  const secondDisplay = document.getElementById("second_display");
  secondDisplay.innerHTML = `<span id="hour">${addZero(
    hour
  )}</span> : <span id="minute">${addZero(minute)}</span> :
    <span id="second">${addZero(secunde)}</span>
  `;
  body.div.appendChiled(secondDisplay);
};
