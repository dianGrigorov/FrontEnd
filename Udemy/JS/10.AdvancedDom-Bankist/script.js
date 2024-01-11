'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav')
///////////////////////////////////////
// Modal window

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

btnScrollTo.addEventListener('click', (e) => {
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

  section1.scrollIntoView({ behavior: 'smooth' })
});
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// });

// Event Delegation

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy 
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab')
  // Guard clause
  if (!clicked) return;

  // Remove active classes 
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));


// Sticky navigation
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
// if(window.scrollY > initialCoords.top){
//   nav.classList.add('sticky');
// } else nav.classList.remove('sticky');
// });

// Sticky navigation: Intersection Observer API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

/////////////////////////////
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


const h1 = document.querySelector('h1');

const alertH1 = (e) => {
  alert('Hello from the heading :D');

  h1.removeEventListener('mouseenter', alertH1)
}

h1.addEventListener('mouseenter', alertH1);

// // old school :D
// h1.onmouseenter = (e) => {
//   alert('Hello from the heading :D');
// };

// BUBBLING AND CAPTURING

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min); 

//generate a random color 'rgb(255, 255, 255)'
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function(e) {
  console.log(this);
this.style.backgroundColor = randomColor();

// // stop propagation
// e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(this);
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log(this);
  this.style.backgroundColor = randomColor();
});


// DOM Traversing

const h1 = document.querySelector('h1');
// Going downwards: children
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'red';
h1.lastElementChild.style.color = 'blue';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);
// selecting the closest parent element
h1.closest('.header').style.background = 'var(--gradient-secondary)';

// Going sideways: selecting siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// selecting all siblings

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

// Sticky navigation: Intersection Observer API
// Intersection Observe API accept a callback function and object with options
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  })
};

const obsOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);


*/
