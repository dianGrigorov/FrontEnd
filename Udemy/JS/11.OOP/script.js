'use strict';

       // Constructor function
/////////////////////////////////////
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never do this
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // }
};

// 1. New object is created
// 2. function is called, this keyword = object
// 3. Object is linked to prototype
// 4. Function automatically return object

const dido = new Person('Dian', 1986);
console.log(dido); 

console.log(dido instanceof Person);

       // Prototypes
/////////////////////////////////////       

// each instance of the class inherit the method
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

dido.calcAge();

console.log(dido.__proto__);
console.log(dido.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(dido));
console.log(Person.prototype.isPrototypeOf(Person));

// Add a property on the object
Person.prototype.species = 'Homo Sapiens';
console.log(dido.species);

console.log(dido.hasOwnProperty('firstName'));
console.log(dido.hasOwnProperty('species'));