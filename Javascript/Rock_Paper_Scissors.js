/*

Description:
In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:
•	Scissors cuts Paper
•	Paper covers Rock
•	Rock crushes Lizard
•	Lizard poisons Spock
•	Spock smashes Scissors
•	Scissors decapitates Lizard
•	Lizard eats Paper
•	Paper disproves Spock
•	Spock vaporizes Rock
•	Rock crushes Scissors
Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".
Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".


*/

                               // Solution :

function rockPaperScissorsLizardSpock(player1, player2) {

  // Define the rules of the game
  //We first create a winConditions object that maps each option to the ones it beats
  //We'll use an object to store all the winning conditions

  const winConditions = {
    scissors: ['paper', 'lizard'],          
    paper: ['rock', 'spock'],
    rock: ['scissors', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
  };

  // If both players chose the same option, it's a draw
  if (player1 === player2) {
    return "Draw!";
  }

  // Check if player 1's choice beats player 2's

  /*
  * If player1 is "scissors", then winConditions["scissors"] returns ['paper', 'lizard'].
  * The .includes() method: checks if the array (the one retrieved from winConditions[player1]) 
  *                         contains the element specified—in this case, player2.
  */
 
  if (winConditions[player1].includes(player2)) {   
    return "Player 1 Won!";
  } else {
    return "Player 2 Won!";
  }
}

// Test cases
console.log(rockPaperScissorsLizardSpock("rock", "scissors")); // "Player 1 Won!"
console.log(rockPaperScissorsLizardSpock("spock", "lizard"));   // "Player 2 Won!"
console.log(rockPaperScissorsLizardSpock("lizard", "lizard"));  // "Draw!"
