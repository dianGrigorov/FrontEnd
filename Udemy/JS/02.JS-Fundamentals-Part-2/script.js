'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can Drive`);

           //FUNCTIONS

function logger() {
    console.log(`My name is Dian`);
}

            // calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} appels and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const applesOrangeJuice = fruitProcessor(2, 4);
console.log(applesOrangeJuice); 


            // Function Expression

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}


             // Arrow Function

const calcAge3 = birthYear => 2023 - birthYear;
console.log(calcAge3(1986));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} year`;
}

console.log(yearsUntilRetirement(1986, `Dian`));
console.log(yearsUntilRetirement(1984, `Venci`));


// Function Calling Other Function

const cutPieces = function (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of appels and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 4));

const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires after ${retirement} years`);
        return age;
    } else {
        return -1;
    }
}
console.log(yearsUntilRetirement(1986, `Dian`));

                //Challenge 1

const calcAverage = (first, second, third) => (first + second + third) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (scoreDolphins, scoreKoalas) {
    if (scoreDolphins >= scoreKoalas * 2) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
    } else if (scoreKoalas >= scoreDolphins * 2) {
        console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);

        // Arrays

const friends = [`Dido`, `Mitko`, `Gosho`];

// Add elements to array

friends.push(`Pavel`); // add to the end of the array!
friends.unshift(`Kaloyan`); // ass to the beginning of the array!

// Remove elements from the array

friends.pop(); // remove the last element from the array, return removed element
friends.shift(); //remove the first element from the array

// Checks if such element exist return true or false

friends.includes(`Kalayan`);

         // Challenge 2

const calcTip = function (bill) {
   return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
}
const bills = [125, 555, 44];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]))
}
for (let i = 0; i < bills.length; i++) {

    total.push(bills[i] + tips[i]);
    
}
console.log(bills);
console.log(tips);
console.log(total);


        //Objects

const dido = {
    firstName: `Dian`,
    lastName: `Grigorov`,
    age: 38,
    job: `developer`,
    friends: [`Kaloyan`, `Dimitur`, `Pavel`]
};

console.log(dido.job);
const challenge = `${dido.firstName} has ${dido.friends.length} friends, and his best friend is called ${dido.friends[0]}`;    
console.log(challenge);     

 
const dido = {
    firstName: `Dian`,
    lastName: `Grigorov`,
    birthYear: 1986,
    job: `developer`,
    friends: [`Kaloyan`, `Dimitur`, `Pavel`],
    hasDriveLicense: false,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    fetchInfo: function () {
        return`${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriveLicense ? 'a' : 'no'} driver's license`;
        
    }
};
console.log(dido.calcAge());
console.log(dido.fetchInfo());


            // Challenge 3
       
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    
    calcBMI: function () {
         this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}            

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI:  function()  {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
}

console.log(mark.calcBMI() > john.calcBMI() 
? `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!` 
: `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`);



            //Loops

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

const dido = [
    'dido',
    'gosho',
    'sasho',
    'asen',
    10,
    true
]

const newArr = [];
for (let i = 0; i < dido.length; i++) {
    console.log(dido[i], typeof dido[i]);
    newArr.push(typeof dido[i])

}
console.log(newArr);



const years = [1991, 2007, 1965, 2020];
let sum = 0;
for (let i = years.length - 1; i >= 0; i--) {
 console.log(i, years[i]);
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled  a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}


// Challenge 4

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i])
}

// compute average sum in the array
const calcAverage = (arr) => {
    return arr.reduce((a, b) => a + b, 0) / arr.length
}

console.log(calcAverage(totals));
*/