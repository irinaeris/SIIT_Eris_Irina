
let player = document.querySelector(".player")
document.addEventListener("keydown", function (event) {
  console.log("event= ", event)
  if (event.code === "ArrowDown") {
    let oldTop = parseInt(player.style.top)
    if (oldTop < 370) {
      player.style.top = `${oldTop + 10}px`
    }
  }
  if (event.code === "ArrowRight") {
    let oldLeft = parseInt(player.style.left) 
    if (oldLeft < 370) {
      player.style.left = `${oldLeft + 10}px` 
    }
  }
 
});


const obstaco = {
  left: Math.random() * 400, // asa generam nr random
  top: 10
}
const obstacolList = [obstaco]