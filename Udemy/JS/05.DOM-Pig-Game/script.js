'use strict';

// Selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Starting values

let scores, currScore, activePlayer, playing;

const init = function () {

    scores = [0, 0];
    currScore = 0;
    activePlayer = 0;
    playing = true;

    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;

    diceElement.classList.add('hidden');
    player0Element.classList.remove('player--winner');
    
    player1Element.classList.remove('player--winner');
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');
};

init();

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currScore = 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
};
// Rolling dice functionality



btnRoll.addEventListener('click', function () {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    if (playing) {
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
            switchPlayer();
        }
    }
});


btnHold.addEventListener('click', function () {
    if (playing) {
        // 1.Add current score to the active player score
        scores[activePlayer] += currScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //2. check if player's score is >= 100
        // Finish the game
        if (scores[activePlayer] >= 10) {
            playing = false;
            diceElement.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {

            //Switch to the next player
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init)