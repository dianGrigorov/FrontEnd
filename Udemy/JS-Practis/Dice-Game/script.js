'use strict';
// selecting all the buttons
const btnRules = document.querySelector('.btn--rules');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// rules modal selections
const modal = document.querySelector('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

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
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        addRemoveModal();
    }
});