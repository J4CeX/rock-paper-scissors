let playerChoice = "";
let computerChoice = "";

let playerScore;
let computerScore;

playerScore = JSON.parse(localStorage.getItem("playerScore"));
if(playerScore == null)
  playerScore = 0;

computerScore = JSON.parse(localStorage.getItem("computerScore"));
if(computerScore == null)
  computerScore = 0;

const score = `${playerScore} | ${computerScore}`;
const scoreOutput = document.querySelector(".score");
scoreOutput.innerHTML = `
    <p>${score}</p>
`;
  
const rock = document.querySelector(".rock");
rock.addEventListener("click", (event) => {
  player("rock");
  computer();
  play(playerChoice, computerChoice);
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", (event) => {
  player("paper");
  computer();
  play(playerChoice, computerChoice);
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", (event) => {
  player("scissors");
  computer();
  play(playerChoice, computerChoice);
});

const playerMove = document.querySelector(".player-move");
const player = (move) => {
  playerChoice = move;
  playerMove.innerHTML = `
    <img src="img/${move}-emoji.png" alt="player-move" title="player move" width="220" height="220">
    <figcaption>
      player
    </figcaption>
    `;
}

const computer = () => {
  const choice = Math.floor(Math.random() * 3);
  if(choice === 0) {
    computerChoice = "rock";
  } else if(choice === 1) {
    computerChoice = "paper";
  } else if(choice === 2) {
    computerChoice = "scissors";
  }
  const computerMove = document.querySelector(".computer-move");
  computerMove.innerHTML = `
    <img src="img/${computerChoice}-emoji.png" alt="computer-move" title="computer move" width="220" height="220">
    <figcaption>
      computer
    </figcaption>
    `;
}

const play = (player, computer) => {
  const resultOutput = document.querySelector(".result");
  let result = ``;
  if(player == computer) {
    result = `Tie.`
  } else if(player == "rock" && computer == "paper") {
    result = `Computer wins!`;
    computerScore++;
  } else if(player == "paper" && computer == "scissors") {
    result = `Computer wins!`;
    computerScore++;
  } else if(player == "scissors" && computer == "rock") {
    result = `Computer wins!`;
    computerScore++;
  } else {
    result = `Player wins!`;
    playerScore++;
  }

  const score = `${playerScore} | ${computerScore}`;

  scoreOutput.innerHTML = `
    <p>${score}</p>
  `;
  resultOutput.innerHTML = `
    <p>${result}</p>
  `;

  localStorage.setItem("playerScore", JSON.stringify(playerScore));
  localStorage.setItem("computerScore", JSON.stringify(computerScore));
}
