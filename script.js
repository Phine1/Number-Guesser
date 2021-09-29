let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
 const generateTarget = () => {
   const randomNumber = Math.floor(Math.random()*10);
   return randomNumber;
 };


const compareGuesses = (humanGuess, computerGuess, secretTargetNumber) => {
const humanDifference = Math.abs(secretTargetNumber - humanGuess);
const computerDifference = Math.abs(secretTargetNumber - computerGuess);
if (humanDifference >= computerGuess) {
  return true;
} else  {
  return false
}
}

const updateScore = (winner) => {
if (winner==='human') {
let humanScore =+1;
} else {
let computerScore =+1;
}
}

const advanceRound = () => {
  return currentRoundNumber + 1;
}



