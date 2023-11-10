const outCome = {
  win: "You win, you lucky bastard!",
  loss: "Damn tough loss, bro",
  draw: "That's a draw"
};

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
const playBtn = document.querySelector("#computer");
const score = document.querySelector("#score");
const round = document.querySelector("#round");
const resetBtn = document.querySelector("#reset");
const choices = ["rock", "paper", "scissors"];

let playerChoice = '';
let computerChoice = '';
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

function validatePlayerChoice(playerChoice) {
  return ["rock", "paper", "scissors"].includes(playerChoice);
}

function displayResult(result) {
  const resultElement = document.createElement("h2");
  resultElement.textContent = result;

  const resultContainer = document.querySelector("#resultContainer");
  
  resultContainer.appendChild(resultElement);

  setTimeout(() => {
    resultElement.remove();
  }, 1500);
}


function updateScore() {
  score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function play() {
  computerChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice) {
    if (validatePlayerChoice(playerChoice)) {
      if (playerChoice === computerChoice) {
        displayResult(outCome.draw);
      } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        displayResult(outCome.win);
        playerScore++;
      } else {
        displayResult(outCome.loss);
        computerScore++;
      }

      updateScore();
      playerChoice = null;
      computerChoice = null;
      roundCount++;
      round.textContent = roundCount;
    } else {
      displayResult("Invalid player choice");
    }
  } else {
    displayResult("Please make a choice first.");
  }
}

rockBtn.addEventListener("click", function () {
  playerChoice = "rock";
  play();
});

paperBtn.addEventListener("click", function () {
  playerChoice = "paper";
  play();
});

scissorBtn.addEventListener("click", function () {
  playerChoice = "scissors";
  play();
});
