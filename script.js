const rockBtn = document.querySelector(".rock");
const paperkBtn = document.querySelector(".paper");
const scissorkBtn = document.querySelector(".scissor");
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
    }
  }
}
