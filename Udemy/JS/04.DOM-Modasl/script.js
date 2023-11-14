'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const closeMOdal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const openModal = function () {

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click', openModal);
} 
// closing the modal with button ant click
btnCloseModal.addEventListener('click',closeMOdal);
overlay.addEventListener('click', closeMOdal);

// closing the modal with ESC key

document.addEventListener('keydown', function (e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeMOdal();
    }
})