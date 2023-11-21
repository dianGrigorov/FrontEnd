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

};

// setting initial values
init();


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