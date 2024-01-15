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

/*
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

*/

////////////////////////////////////////////

/*
// Coding Challenge #2
// Your tasks:
// 1. Re - create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi / h(divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi / h(but
// converts it to km / h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km / h
// GOOD LUCK 😀


class CarCl {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
    }
    
    brake() {
        this.speed -= 5;
    }
    get speedUS () {
        return this.speed / 1.6; 
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const bmw = new CarCl('BMW', 120);

console.log(bmw.speedUS);

*/

///////////////////////////////////
/*
// Inheritance between classes   

// 1. Constructor function

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    // Bad practice  
    // this.firstName = firstName; 
    // this.birthYear = birthYear;
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes 
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student ('Mike', 1999, 'Computer Science');

mike.introduce();
mike.calcAge();
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////////

// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car(called 'EV') as a child
// "class" of 'Car'.Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1 %.Then log a message like this: 'Tesla going at 140
// km / h, with a charge of 22 % '
// 4. Create an electric car object and experiment with calling 'accelerate',
//     'brake' and 'chargeBattery'(charge to 90 %).Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// § Data car 1: 'Tesla' going at 120 km / h, with a charge of 23 %
//     GOOD LUCK 😀

/*
const Car = function (name, speed) {
    this.name = name;
    this.speed = speed;
};

const EV = function (name, speed, charge) {
    Car.call(this, name, speed);
    this.charge = charge;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
};

Car.prototype.brake = function () {
    this.speed -= 5;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo
};

EV.prototype.accelerate = function () {
    this.charge --;
    this.speed += 20;
    console.log(`${this.name} going at ${this.speed} km/h with a charge of ${this.charge}`);
};

const tesla = new EV ('Tesla', 120, 23);

console.log(tesla);
tesla.chargeBattery(100);
tesla.accelerate();
tesla.accelerate();
console.log(tesla);

*/

////////////////////////////////////////

// Inheritance between "Classes": ES6 Classes
/*
class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance method

    calcAge() {
        console.log(2037 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.fullName}`);
    }
    get age() {
        return 2037 - this.birthYear;
    }
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }
    get fullName() {
        return this._fullName;
    }

    // Static methods
    static hey() {
        console.log('Hey there 👋');
    }
};

class Student extends Person {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first
        super(fullName, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} years old`);
    }
};
const marta = new Student('Marta Jones', 1999, 'Computer Science')
console.log(marta);
marta.calcAge()
marta.introduce()
marta.calcAge();

class Account {
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;
    }

    // Public interface
    deposit(val) {
        this.movements.push(val);
    }
    withdraw(val) {
        this.deposit(-val);
    }
}

const acc1 = new Account('Dian', 'EUR', 1111);
acc1.deposit(400);
acc1.withdraw(300)
console.log(acc1);

*/

///////////////////////////////////

// Encapsulation: Protected properties and methods


// Public fields
// Private fields
// Public methods
// Private methods

class Account {
    // Public field

    locale = navigator.language;
    
    // Private fields
    
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // protected property
        // this._movements = [];
        // this.locale = navigator.language;
    }

    // Public method

    // Public interface
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
    }
    withdraw(val) {
        this.deposit(-val);
    }

    requestLoan(val) {
        if(this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan for ${val} ${this.currency} approved!`);
        }
    }
    // Private methods
    // _approveLoan(val)
    #approveLoan(val) {
        return true;
    }
}

const acc1 = new Account('Dian', 'EUR', 1111);
acc1.deposit(400);
acc1.withdraw(300);
acc1.requestLoan(1000)
// console.log(acc1.#movements); no longer be abele to access the property
// console.log(acc1.#pin);
console.log(acc1.getMovements());
console.log(acc1);
