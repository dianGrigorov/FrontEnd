'use strict';

const bookings = [];

const createBooking = function (flightName, numPassengers = 1, price = 199 * numPassengers) {

    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightName,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking)
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 500);

const flight = 'LH234';
const jonas = {
    name: 'Jonas Shmedtmann',
    passport: 12345,
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 12345) {
        alert('Checked in!');
    } else {
        alert('Wrong passport!')
    }
}

checkIn(flight, jonas);