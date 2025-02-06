// 1. Computer chooses a random value 0,1,2

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  // 2. Assigning values to rock, paper and scissors
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// 3. Human chooses between rock, paper and scissors

// 4. Create two variables that tracks player and computer score
let humanScore = 0;
let computerScore = 0;
const result = document.querySelector("#result");
const winner = document.querySelector("#winner");

// 5. Logic to play a single round:
//Create function with two parameters: human and computer choice
function playRound(humanChoice, computerChoice) {
  result.textContent = "Human choice: " + humanChoice;
  result.textContent += "Computer choice: " + computerChoice;
  //Implement the game logic (use switch)
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "paper") {
        computerScore++;
      } else if (computerChoice === "scissors") {
        humanScore++;
      } else {
        result.textContent += "It's a tie!";
      }
      break;

    case "paper":
      if (computerChoice === "rock") {
        humanScore++;
      } else if (computerChoice === "scissors") {
        computerScore++;
      } else {
        result.textContent += "It's a tie!";
      }
      break;

    case "scissors":
      if (computerChoice === "rock") {
        computerScore++;
      } else if (computerChoice === "paper") {
        humanScore++;
      } else {
        result.textContent += "It's a tie!";
      }
      break;

    default:
      result.textContent += "You have to choose!";
      break;
  }

  result.textContent += `Computer score: ${computerScore}`;
  result.textContent += `Human score: ${humanScore}`;

  // if score reaches 5 - announce a winner of the game
  if (humanScore === 5) {
    winner.textContent = "Human won!";
  } else if (computerScore === 5) {
    winner.textContent = "Computer won!";
  }
}

//Get the human choice and play a round with it

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    playRound(humanChoice, getComputerChoice());
  });
});
