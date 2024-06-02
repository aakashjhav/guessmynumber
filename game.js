'use strict';

//Defining the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Defining the 'score' and 'guess'
let score = 20;

//Defining highScore
let highScore = 0;

//Defining  functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (message) {
  document.querySelector('.number').textContent = message;
};
const displayScore = function (message) {
  document.querySelector('.score').textContent = message;
};

//
//
//
/////Game logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('⛔ No number');
  }

  // When player win
  else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    displayNumber(guess);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //Wnen guess is not equal to the secretNumber or its different
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('😌 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//
//
//
/////
//when user click on again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore('score');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';
});
