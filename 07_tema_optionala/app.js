const computerValue = document.getElementById("computer-value")
const myValue = document.getElementById("my-value")
const result = document.getElementById("result")
const availableOption = document.querySelectorAll("button")
console.log(availableOption);
let userChoice;

availableOption.forEach(options => options.addEventListener('click', (event) => {
    userChoice = event.target.id
    myValue.innerHTML = userChoice
}))