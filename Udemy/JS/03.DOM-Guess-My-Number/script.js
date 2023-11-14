'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'wow';

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 1000;

document.querySelector('.guess').value = 10;
*/

const randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ Not a number!';

        // When player wins
    } else if (guess === randomNum) {
        document.querySelector('.message').textContent = '🥇 Correct number';
        document.querySelector('.number').textContent = randomNum;
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.highscore').textContent = score;
        document.querySelector('.number').style.width = '30rem'
    } else if (score > 1) {
        // When the guess is to hight
        if (guess > randomNum) {
            document.querySelector('.message').textContent = '📈 Too high';
        }
        // When the guess is too low
        else {
            document.querySelector('.message').textContent = '📉 Too low';
        }
        score--;
        document.querySelector('.score').textContent = score;
    }

    // When player lose the game
    else {
        document.querySelector('.message').textContent = '💥 You lose the game!';
        score--;
        document.querySelector('.score').textContent = score;
    }
})