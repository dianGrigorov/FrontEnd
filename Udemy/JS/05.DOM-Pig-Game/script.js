'use strict';

// Selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn-hold');


// Starting values
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');


let currScore = 0;

// Rolling dice functionality

btnRoll.addEventListener('click', function () {
    // 1. Generate a random dice roll
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${diceNumber}.png`;

    //3. Check for rolled 1
    if (dice !== 1) {
        // Add dice to current score    
        currScore += diceNumber;

    } else {
        // Switch to next player
    }
})