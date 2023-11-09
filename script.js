const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const playBtn = document.querySelector(".computer");
const allBtn = document.querySelector("#buttons");
const choices = ["rock", "paper", "scissors"];

const drawMsg = document.querySelector(".draw");
const lossMsg = document.querySelector(".loss");
const winMsg = document.querySelector(".win");

let playerChoice;
let computerChoice;

function play() {
  const choices = ["rock", "paper", "scissors"];
  computerChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice) {
    if (playerChoice === computerChoice) {
      console.log("It's a draw!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissor") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissor" && computerChoice === "paper")
    ) {
      console.log("Player wins!");
    } else {
      console.log("Player Lost!");
    }

    playerChoice = null;
    computerChoice = null;
  } else {
    console.log("Please make a choice first.");
  }
}

rockBtn.addEventListener("click", function () {
  playerChoice = "rock";
  console.log("rock");
});

paperBtn.addEventListener("click", function () {
  playerChoice = "paper";
  console.log("paper");
});

scissorBtn.addEventListener("click", function () {
  playerChoice = "scissor";
  console.log("scissor");
});

playBtn.addEventListener("click", play);
