let player = document.querySelector(".player");
document.addEventListener("keydown", function (event) {
  console.log("event= ", event);
  if (event.code === "ArrowDown") {
    let oldTop = parseInt(player.style.top);
    if (oldTop < 370) {
      player.style.top = `${oldTop + 10}px`;
    }
  }
  if (event.code === "ArrowRight") {
    let oldLeft = parseInt(player.style.left);
    if (oldLeft < 370) {
      player.style.left = `${oldLeft + 10}px`;
    }
  }
  if (event.code === "ArrowLeft") {
    let oldRight = parseInt(player.style.left);
    if (oldRight < 370) {
      player.style.left = `${oldRight - 10}px`;
    }
  }
  if (event.code === "ArrowUp") {
    let oldDown = parseInt(player.style.top);
    if (oldDown < 370) {
      player.style.top = `${oldDown - 10}px`;
    }
  }
});

var obstacol = document.querySelectorAll(".obstacol");

for (var i = 0; i < obstacol.length; i++) {
  var obstacolList = obstacol[i];

  randomTop = getRandomNumber();
  randomLeft = getRandomNumber();

 
  obstacolList.style.top = randomTop + "px";
  console.log(obstacolList)
  obstacolList.style.left = randomLeft + "px";
  console.log(obstacolList)
}


function getRandomNumber() {
  return parseInt(Math.random() * 370);
}
