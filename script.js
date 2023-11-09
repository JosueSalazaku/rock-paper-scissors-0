const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const playBtn = document.querySelector(".computer");
const allBtn = document.querySelector("#buttons");
const choices = ["rock", "paper", "scissors"];

const drawMsg = document.querySelector(".draw");
const lossMsg = document.querySelector(".loss");
const winMsg = document.querySelector(".win");
const score = document.querySelector(".score");
const round = document.querySelector(".round");

let playerChoice;
let computerChoice;

function play() {
  const choices = ["rock", "paper", "scissors"];
  computerChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice) {
    if (playerChoice === computerChoice) {
      //   console.log("It's a draw!");
      drawMsg.style.visibility = "visible";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissor") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissor" && computerChoice === "paper")
    ) {
      winMsg.style.visibility = "visible";
    } else {
      lossMsg.style.visibility = "visible";
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
