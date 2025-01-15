// 1. Computer chooses a random value 0,1,2
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "sccissors";
  }
}
console.log(getComputerChoice());

// 2. Assigning values to rock, paper and scissors
// 3. Human chooses between rock, paper and scissors
// 4. Create a variable that tracks player and computer score
// 5. Logic to play a single round:
//Get human and computer choices
//Display if human won or lost
//Increment humanScore or ComputerScore
// 6. Logic to play the entire game: 5 rounds:
//Soon
