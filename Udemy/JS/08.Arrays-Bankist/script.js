'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function (movements) {
  // clear the section we chose 
  containerMovements.innerHTML = '';
  // for each movements we make string literal to make our html elements, then added to the DOM
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
       <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
  `;
    // insertAdjacentHTML function insert elements in the HTML
    containerMovements.insertAdjacentHTML('afterbegin', html)
  });
};

displayMovements(account1.movements)

const createUsername = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  })
}
createUsername(accounts);

const calcDisplaySummary = function (movements) {
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income} €`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(outcomes)} €`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest} €`;
};
calcDisplaySummary(account1.movements)

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, int) => acc + int, 0);
  labelBalance.textContent = `${balance} €`;

}

calcDisplayBalance(account1.movements)
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////



let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2)); // minus value slice the last 2 elements
console.log(arr.slice(1, -2));
console.log(arr.slice()); // make a shallow copy of the array
console.log([...arr]); // another method to make shallow copy of an array 


// SPLICE
// work similar us slice method but mutate the original array

 arr.splice(-1); // remove the last element from the array
 arr.slice(1, 2); // remove 2 elements starting from position 1

// REVERSE 

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j','i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // reverse method mutate the original array

// CONCAT

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // same result us concat method

// JOIN

console.log(letters.join(' - '));


const arr3 = [1, 2, 3];

console.log(arr3[0]);
console.log(arr3.at(0));

// get the last element from the array

console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1)); 



const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements1) {
  if (movement > 0) {
    console.log(`You deposit ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
console.log('------FOREACH------');
movements1.forEach(function (movement, index, arr) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposit ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});



// MAPS
const currencies1 = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies1.forEach(function(value, key, map) {
  console.log(`${key}: ${value} ${map}` );
})


Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
GOOD LUCK 😀


const juliaDogs = [3, 5, 2, 12, 7];
const kateDogs = [4, 1, 15, 8, 3];

const checkDogs = function (arr1, arr2) {
  
  const juliaCopy = arr1.slice(1, 3)
  const kateCopy = arr2.slice();
  const dogs = juliaCopy.concat(kateCopy);
  console.log(juliaCopy);
  console.log(kateCopy);
  console.log(dogs);

  dogs.forEach(function (years, index) {
    if (years >= 3) {
      console.log(`Dog number ${index + 1} is an adult, and is ${years} years old`);
    } else {
      console.log(`Dog number ${index + 1} is still a puppy🐶`);
    }
  })
 
};


checkDogs(juliaDogs, kateDogs);



// MAP method 
// work like foeEach method but return new array

const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.1;

// using callback function
const movementsUSD = movements2.map(function (mov) {
  return mov * euroToUSD;
});

// using arrow function
const movementsUSD1 = movements2.map(mov => mov * euroToUSD)
console.log(movements2);
console.log(movementsUSD);
console.log(movementsUSD1);

const movementsDescription = movements2.map((mov, i) => 
  `Movement ${ i + 1 }: You ${mov > 0 ? 'deposit' : 'withdrew'} ${Math.abs(mov)}`
);

console.log(movementsDescription);

//FILTER method

const movements3 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements3.filter(mov => mov > 0);
const withdrawals = movements3.filter(mov => mov < 0);
console.log(deposits);
console.log(withdrawals);

// REDUCE method

const movements4 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements4.reduce((acc, mov) => acc + mov, 0);

console.log(balance);

// maximum value 

const maxValue = movements4.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements4[0]);

console.log(maxValue);

const calcAverageHumanAge = function (ages) {

  const humanAges = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4);

  const oldestDogs = humanAges.filter(dog => dog >= 18);
  const averageAge = humanAges.reduce((acc, age) => acc + age, 0) / humanAges.length;

  console.log(humanAges);
  console.log(oldestDogs);
  console.log(averageAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

*/
// Method chaining

const euroToUSD = 1.1;
const movements5 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalDepositsUSD = movements5
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUSD)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);