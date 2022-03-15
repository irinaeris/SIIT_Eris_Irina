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
let resetButton=document.getElementById("resetButton")


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

function myStop(){
    clearInterval(intervalId);
    
}

resetButton.addEventListener("click", function(){

    hourHtml.innerHTML="00";
    minuteHtml.innerHTML="00";
    secundeHtml.innerHTML="00";
    
})



