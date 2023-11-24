'use strict';
// selecting all the buttons
const btnRules = document.querySelector('.btn--rules');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//selecting players scores
const totalScore0El = document.querySelector('.totalScore--0');
const totalScore1El = document.querySelector('.totalScore--1');
const currScore0El = document.querySelector('.currScore--0');
const currScore1El = document.querySelector('.currScore--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
// rules modal selections
const modal = document.querySelector('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// init values

let activePlayer, currScore, totalScores, playing;

function init() {
    activePlayer = 0;
    currScore = 0;
    totalScores = [0, 0];
    playing = true;

    totalScore0El.textContent = 0;
    totalScore1El.textContent = 0;
    currScore0El.textContent = 0;
    currScore1El.textContent = 0;
    player0El.classList.add('active')
    player1El.classList.remove('active')
    player0El.classList.remove('winner');
    player1El.classList.remove('winner');

    diceEl.src = `./src/dice--0.png`;
};

// setting initial values
init();

// switching the players
console.log(activePlayer);
const switchPlayer = () => {
    document.querySelector(`.currScore--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currScore = 0;
    console.log();
    player0El.classList.toggle('active');
    player1El.classList.toggle('active');
    

};
// show Rules modal or remove it

const addRemoveModal = () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

// open the Rules modal with click 
btnRules.addEventListener('click', addRemoveModal);

// closing the modal with button or click on overlay 
closeModal.addEventListener('click', addRemoveModal);
overlay.addEventListener('click', addRemoveModal);

// closing the modal with ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        addRemoveModal();
    }
});

// rolling the dice

btnRoll.addEventListener('click', function () {
    if(playing) {

   
    const dice = Math.trunc(Math.random() * 6 + 1);

    diceEl.src = `./src/dice--${dice}.png`;
    if (dice > 1) {
        currScore += dice;
        document.querySelector(`.currScore--${activePlayer}`).textContent = currScore;

    } else {
        switchPlayer();
    }
    }
});
// hold button

btnHold.addEventListener('click', function () {
    if (playing) {

        totalScores[activePlayer] += currScore;
        document.querySelector(`.totalScore--${activePlayer}`).textContent = totalScores[activePlayer];

        if (totalScores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('winner');
            diceEl.src = `./src/dice--0.png`;
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);

