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

    console.log(`Computer score: ${computerScore}`);
    console.log(`Human score: ${humanScore}`);
  }
  //Call the get functions 5 times
  for (i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  //Declare the winner
  if (humanScore > computerScore) {
    console.log("You won! Congratulations!");
  } else if (humanScore < computerScore) {
    console.log("You lost! Computer for the win!");
  } else {
    console.log("It's a tie! Play again");
  }
}

playGame();
