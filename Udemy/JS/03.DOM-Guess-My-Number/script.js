'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'wow';

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 1000;

document.querySelector('.guess').value = 10;
*/

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ Not a number!';
        displayMessage('⛔ Not a number!');

        // When player wins
    } else if (guess === randomNum) {
        // document.querySelector('.message').textContent = '🥇 Correct number';
        displayMessage('🥇 Correct number');

        document.querySelector('.number').textContent = randomNum;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highScore){
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }
        
    } else if (guess !== randomNum) {
        // When the guess is to hight
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > randomNum ? '📈 Too high' : '📉 Too low';
            displayMessage(guess > randomNum ? '📈 Too high' : '📉 Too low');

            score--;
            document.querySelector('.score').textContent = score;
        }
        // When the guess is too low
        else if (score === 1){
            // document.querySelector('.message').textContent = '💥 You lose the game!';
            displayMessage('💥 You lose the game!');
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
    // When player lose the game
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    randomNum = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...'
    displayMessage('Start guessing...');

    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
})