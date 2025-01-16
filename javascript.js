// 1. Computer chooses a random value 0,1,2
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  // 2. Assigning values to rock, paper and scissors
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "sccissors";
  }
}

// 3. Human chooses between rock, paper and scissors
function getHumanChoice() {
  const humanChoice = prompt("What's your pick?");
  return humanChoice;
}

// 4. Create two variables that tracks player and computer score
let humanScore = 0;
let computerScore = 0;

// 5. Logic to play a single round:
//Create function with two parameters: human and computer choice
function playRound(humanChoice, computerChoice) {
  //Increment the winners score
}

//Make the humanChoice parameter case-insensitive
//Get human and computer choices : Create two variables in a global scope
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//Display if human won or lost
// 6. Logic to play the entire game: 5 rounds:
//Soon
