const computerValue = document.getElementById("computer-value");
const myValue = document.getElementById("my-value");
const winner = document.getElementById("result");
const availableOption = document.querySelectorAll("button");
//console.log(availableOption);
let userChoice;

availableOption.forEach((options) =>
  options.addEventListener("click", (event) => {
    userChoice = event.target.id;
    myValue.innerHTML = userChoice;
    computerSelection();
    showResult();
  })
);

function computerSelection() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);

  if (randomNumber === 1) {
    computerChoice = "scissors";
  }
  if (randomNumber === 2) {
    computerChoice = "rock";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerValue.innerHTML = computerChoice;
}

function showResult() {
  if (userChoice === computerChoice) {
    result = "It is a draw!!";
  }
  if (userChoice === "rock" && computerChoice === "scissors") {
    result = "I won!!";
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    result = "I won!!";
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    result = "I won!!";
  }
  if (userChoice === "scissors" && computerChoice === "rock") {
    result = "I lost!!";
  }
  if (userChoice === "paper" && computerChoice === "scissors") {
    result = "I lost!!";
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    result = "I lost!!";
  }
  winner.innerHTML = result;
}
