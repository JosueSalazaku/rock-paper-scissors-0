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
const resetBtn = document.querySelector(".reset");

let playerChoice;
let computerChoice;

function showMessage(messageType) {
  switch (messageType) {
    case "draw":
      drawMsg.style.display = "block";
      break;
    case "loss":
      lossMsg.style.display = "block";
      break;
    case "win":
      winMsg.style.display = "block";
      break;
    default:
      alert(invalide);  
  }
}

function hideMessages() {
  drawMsg.style.display = "none";
  lossMsg.style.display = "none";
  winMsg.style.display = "none";
}

function validatePlayerChoice(playerChoice) {
  if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    return true;
  } else {
    return false;
  }
}

function play() {
  const choices = ["rock", "paper", "scissors"];
  computerChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice) {
    if (playerChoice === computerChoice) {
      //   console.log("It's a draw!");
      showMessage("draw");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissor") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissor" && computerChoice === "paper")
    ) {
      showMessage("win");
    } else {
      showMessage("loss");
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

resetBtn.addEventListener("click", function () {
  hideMessages();
  playerChoice = null;
  computerChoice = null;
});