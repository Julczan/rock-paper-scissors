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

// 5. Logic to play a single round:
//Create function with two parameters: human and computer choice
function playRound(humanChoice, computerChoice) {
  result.textContent = `Human choice: ${humanChoice} `;
  result.textContent += `Computer choice: ${computerChoice}`;
  //Implement the game logic (use switch)
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "paper") {
        result.textContent += "You lost!";
        computerScore++;
      } else if (computerChoice === "scissors") {
        result.textContent += "You won!";
        humanScore++;
      } else {
        result.textContent += "It's a tie!";
      }
      break;

    case "paper":
      if (computerChoice === "rock") {
        result.textContent += "You won!";
        humanScore++;
      } else if (computerChoice === "scissors") {
        result.textContent += "You lost!";
        computerScore++;
      } else {
        result.textContent += "It's a tie!";
      }
      break;

    case "scissors":
      if (computerChoice === "rock") {
        result.textContent += "You lost!";
        computerScore++;
      } else if (computerChoice === "paper") {
        result.textContent += "You won!";
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
}

//Get the human choice and play a round with it

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    playRound(humanChoice, getComputerChoice());
  });
});
