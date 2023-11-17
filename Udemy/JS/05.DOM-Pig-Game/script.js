'use strict';

// Selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn-hold');


// Starting values
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];
let currScore = 0;
let activePlayer = 0;

// Rolling dice functionality

btnRoll.addEventListener('click', function () {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;
    //3. Check for rolled 1
    if (dice !== 1) {
        // Add dice to current score    
        currScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currScore;
        
    } else {
        // Switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currScore = 0;
        player0Element.classList.toggle('player--active');
        player1Element.classList.toggle('player--active');
    }
});