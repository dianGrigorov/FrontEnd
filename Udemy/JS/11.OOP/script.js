'use strict';
/*
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

console.log(dido.__proto__);
console.log(dido.__proto__.__proto__);

const arr = [1, 2, 4, 5, 7, 1, 4];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

*/
///////////////////////////////////////////////////

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'.A car has a 'make' and a
// 'speed' property.The 'speed' property is the current speed of the car in
//     km / h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km / h
// § Data car 2: 'Mercedes' going at 95 km / h
// GOOD LUCK 😀

/*
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(this.speed);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(this.speed);
}

const bmw = new Car ('BMW', 120);
const mercedes = new Car ('Mercedes', 95);

bmw.accelerate();
mercedes.accelerate();
bmw.brake();

*/
//////////////////////////////////////////
/*
// ES6 Classes

// class expression
// const PersonCL = class {};

// class declaration

class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    // Method will added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }
};

const jessica = new Person('Jessica', 1988);
console.log(jessica);
jessica.calcAge();

// 1. Classes ane NOT hoisted
// 2. Classes are first-class citizen
// 3. Classes are executed in strict mode always

*/

////////////////////////////////////////////

/*
// Getters and Setters

const account = {
    owner: 'Dian',
    movements: [100, 400, 320, 570],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
}

console.log(account.latest);
account.latest = 500;
console.log(account.movements);

class Person {
    constructor(fullName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    set fullName (name) {
        console.log(name);
        if (name.include(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }
    get fullName() {
        return this._fullName
    }
};
*/

///////////////////////////////////////

// Object.create  

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    
};

const steven = Object.create(PersonProto);

console.log(steven);
steven.userName = 'Steven';
steven.birthYear = 1987;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

