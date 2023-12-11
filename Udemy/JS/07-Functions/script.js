'use strict';

// const bookings = [];

// const createBooking = function (flightName, numPassengers = 1, price = 199 * numPassengers) {

//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;
//     const booking = {
//         flightName,
//         numPassengers,
//         price,
//     }
//     console.log(booking);
//     bookings.push(booking)
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 500);

// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Shmedtmann',
//     passport: 12345,
// }

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 12345) {
//         alert('Checked in!');
//     } else {
//         alert('Wrong passport!')
//     }
// }

// checkIn(flight, jonas);

// const oneWord = function (str) {

//     return str.replaceAll(' ', '').toLowerCase();
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher-order Function

// const transformer = function (str, fn) {
//     console.log(`Original string; ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord)
// transformer('JavaScript is the best!', oneWord)
// console.log(oneWord('dido dido'));

// const greet = function (greeting) {
//     return function (name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');

// greeterHey('Dido');
// greeterHey('Jonas');

// greet('Hello')('Dido');

// const newGreet = greeting => names => console.log(`${greeting} ${names}`);

// newGreet('Best regards')('Alex')

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    book (flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}

lufthansa.book(223, 'Dian Grigorov');
console.log(lufthansa);

const euroWings = {
     airline: 'Eurowings',
     iataCode:'EW',
     bookings: [],
}
const book = lufthansa.book;
// Does not work
// book(23, 'John Smith');

book.call(euroWings , 23 , 'John Smith');
console.log(euroWings);


// Bind method

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);

// Whit Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {

    console.log(this);
    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// Partial application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(300));
console.log(addVAT(100));

const addTaxRate = function (rate) {
    return function(value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(300));