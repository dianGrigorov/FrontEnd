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

const account5 = {
  owner: 'Dian Grigorov',
  movements: [430, 1000, -1000, 700, 500, 90],
  interestRate: 1.4,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

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


const displayMovements = function (movements, sort = false) {
  // clear the section we chose 
  containerMovements.innerHTML = '';
  // for each movements we make string literal to make our html elements, then added to the DOM

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
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

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income.toFixed(2)} €`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(outcomes).toFixed(2)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)} €`;
};


const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, int) => acc + int, 0);
  labelBalance.textContent = `${acc.balance} €`;

};

const createUI = function (acc) {

  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(currentAccount)
  // Display summary
  calcDisplaySummary(currentAccount)
}

// Event handler

let currentAccount;

btnLogin.addEventListener('click', function (e) {

  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    createUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username) {

    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    createUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add the movement
    currentAccount.movements.push(amount);

    // Update UI
    createUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username
    && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    // Delete Account
    accounts.splice(index, 1);

    //Hide UI

    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sort = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sort);
  sort = !sort;
})

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
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


// Method chaining

const euroToUSD = 1.1;
const movements5 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalDepositsUSD = movements5
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUSD)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);


const calcAverageHumanAge = ages => ages
  .map(age => age <= 2 ? age * 2 : 16 + age * 4)
  .filter(dog => dog >= 18)
  .reduce((acc, age, i, arr) => acc + age / arr.length, 0);


const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 =  calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);


// Find method

const movements5 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements5.find(mov => mov < 0);

console.log(movements5);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(account);


// Methods SOME and EVERY


const movements6 = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements6);

//EQUALITY
console.log(movements6.includes(-130));
//CONDITION
const anyDeposits = movements6.some(mov => mov > 0);
console.log(anyDeposits);
// Every method
console.log(movements6.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));


// Methods FLAT and FLATMAP

// const accountsMovements = accounts.map(acc => acc.movements);
// console.log(accountsMovements);
// const allMovements = accountsMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// Flat 
const overallBalance = accounts
.map(acc => acc.movements)
.flat()
.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap
// first call map method over an array then call flat method
// flatMap goes one level deep ONLY
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);


// SORT arrays
// sort alphabetical even numbers 
// !!!!!! Sort method mutate the original array !!!!!!!
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

const movements6 = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements6);
// Sorted Ascending  
// movements6.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

movements6.sort((a, b) => a - b);
console.log(movements6);

// Sorted Descending 

// movements6.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

movements6.sort((a, b) => b - a);
console.log(movements6);

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//Empty array method

const x = new Array(7);
console.log(x);

x.fill(1); // first value is the element to fill
console.log(x);

x.fill(2, 3) // second value is the starting index
console.log(x);

x.fill(4, 3, 6) // third value is the ending index but not included
console.log(x);

// Array.from

const y = Array.from({ length: 7}, () => 1);
console.log(y);

const z = Array.from({ length: 7}, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));
  console.log(movementsUI);

});



// 1. Sum all the deposits from the accounts

const deposits = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, mov) => sum + mov, 0);

console.log(deposits);

// 2. How many deposits has at least 1000$ in the bank

const numDeposit1000 = accounts
  // using reduce method and prefixed operator
  // .flatMap(acc => acc.movements)
  // .reduce((sum, cur) => (cur >= 1000 ? ++sum : sum) ,0)

  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length; // using length property

console.log(numDeposit1000);

//3. Create object which contains the sum of the deposits ant of the withdrawals using the reduce method

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, cur) => {
    // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);

    // using bracket notation
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums
  }, { deposits: 0, withdrawals: 0 });

console.log(sums);

//4.Convert string to a title case

const convertTitleCase = function (title) {

 const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exception = ['a', 'and', 'an', 'the', 'but', 'or', 'on', 'in', 'with']

  const titleCase = title
  .toLowerCase()
  .split(' ')
  .map(word => exception.includes(word) ? word : capitalize(word))

  return capitalize(title)
};

console.log(convertTitleCase('a this is a Nice title'));
*/


/*


Coding Challenge #4


Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks:

1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"

5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)

6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)

7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)

8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)

Hints:
§ Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉

§ Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.

*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1.
dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));

//2.
const SarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Sarah's dog is eating to ${SarahDog.curFood > SarahDog.recommendedFood ? 'much' : 'little'} !`);

//3.
const ownersEatTooMuch = dogs
.filter(dog => dog.curFood > dog.recommendedFood)
.map(dog => dog.owners)
.flat();
console.log(ownersEatTooMuch);


const ownersEatTooLittle = dogs
.filter(dog => dog.curFood < dog.recommendedFood)
.flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);


//4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat to little!`);

//5.
console.log(dogs.some(dog => dog.recommendedFood === dog.curFood));

//6.
const checkEatingOkay = dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(checkEatingOkay));

//7.
console.log(dogs.filter(checkEatingOkay));


//8.

const dogsSorted = dogs
.slice()
.sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsSorted);
