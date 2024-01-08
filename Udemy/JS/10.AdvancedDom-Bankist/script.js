'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
console.log(btnScrollTo);
const section1 = document.querySelector('#section--1');
console.log(section1);

btnScrollTo.addEventListener('click' , (e) => {
  // getting coordinate of the element 
const s1coords = section1.getBoundingClientRect();

// Scrolling without smooth effect
// window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);

// Scrolling with smooth effect need to pass an object as argument

// window.scrollTo({
//   left: s1coords.left + window.scrollX,
//   top: s1coords.top + window.scrollY,
//   behavior: 'smooth',
// })

section1.scrollIntoView({behavior: 'smooth'})
});

////////////////////////////
/*

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection);

console.log(document.getElementById('section--1'));
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements 

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies. <button class="btn btn--close-cookie">Got it</button>';

// header.append(message); // place it in the end of the element
header.prepend(message); // place it in the beginning of the element

// Delete elements

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
  // message.parentElement.removeChild(message); // old way
});

// Styles 
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// get the computed styles from the document
console.log(getComputedStyle(message).color);
message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 30 + 'px';

// changing variable value in the css 
document.documentElement.style.setProperty('--color-primary', 'lightblue');
*/
