// 1. Computer chooses a random value 0,1,2

function playGame() {
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
  function getHumanChoice() {
    const humanChoice = prompt("What's your pick?");
    return humanChoice;
  }
  // 4. Create two variables that tracks player and computer score
  let humanScore = 0;
  let computerScore = 0;
  let winner = "";

  // 5. Logic to play a single round:
  //Create function with two parameters: human and computer choice
  function playRound(humanChoice, computerChoice) {
    //Make the humanChoice parameter case-insensitive
    try {
      humanChoice = humanChoice.toLowerCase();
    } catch (error) {
      console.log("You have to choose");
    }
    //Display the choices
    console.log(`Human: ${humanChoice}`);
    console.log(`Computer: ${computerChoice}`);

    //Implement the game logic (use switch)
    switch (humanChoice) {
      case "rock":
        if (computerChoice === "paper") {
          console.log("You lost!");
          computerScore++;
        } else if (computerChoice === "scissors") {
          console.log("You won!");
          humanScore++;
        } else {
          console.log("It's a tie!");
        }
        break;

      case "paper":
        if (computerChoice === "rock") {
          console.log("You won!");
          humanScore++;
        } else if (computerChoice === "scissors") {
          console.log("You lost!");
          computerScore++;
        } else {
          console.log("It's a tie!");
        }
        break;

      case "scissors":
        if (computerChoice === "rock") {
          console.log("You lost!");
          computerScore++;
        } else if (computerChoice === "paper") {
          console.log("You won!");
          humanScore++;
        } else {
          console.log("It's a tie!");
        }
        break;

      default:
        console.log("You have to choose!");
        break;
    }
  }
  for (i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
}

playGame();

//Calling the function 5 times

// 6. Logic to play the entire game (5 rounds):
//Call the get functions 5 times
//Return the winner of the round
//Make a function to cound rounds:
//If the counter reaches 5 - end the game and display the winner
//for loop:
//number of games increments until it reaches 5
//variable - gameCount
