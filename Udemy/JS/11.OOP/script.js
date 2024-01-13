'use strict';

// Constructor function

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const dido = new Person('Dian', 1986);
console.log(dido);