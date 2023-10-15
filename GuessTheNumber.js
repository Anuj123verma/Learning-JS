const prompt = require("prompt-sync")();
// generate a random number
const randomNumber = Math.floor(Math.random() * 100 + 1);

// take input from the user
let number = parseInt(prompt('Guess a number from 1 to 100: '));
let totalNumberOfChances = 100;

while (totalNumberOfChances-- > 0) {
  if (number === randomNumber) {
    console.log('Congratulations! You guessed the correct number.');
    console.log(`Your score is ${totalNumberOfChances}`);
    break;
  }
  else if (number > randomNumber) {
    console.log('Your number is greater than the actual number.');
    number = parseInt(prompt('Guess again: '));
  }
  else if (number < randomNumber) {
    console.log('Your number is less that the actual number.');
    number = parseInt(prompt('Guess again: '));
  }
}

if (totalNumberOfChances == 0) {
  console.log('You failed it :(, Better luck next time!');
}