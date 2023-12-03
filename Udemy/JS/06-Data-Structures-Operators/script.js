'use strict';

// Data needed for a later exercise
const flights =   
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45     +_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';



// Strings
const airLine = 'TAP Air Portugal';

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas

const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email 

const email = 'hello@dido.io';
const loginEmail = '   Hello@DiDo.Io';

const lowerEmail = email.toLowerCase();
const trimEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(trimEmail);
console.log(normalizedEmail);

// Replacing

const priceGB = '28888,97$';
const priceBGN = priceGB.replace('$', 'BGN').replace(',', '.').replaceAll('8', '7');

console.log(priceBGN);


// const airLine = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airLine.length);

// console.log(airLine.indexOf('r'));
// console.log(airLine.lastIndexOf('r'));
// console.log(airLine.indexOf('Portugal'));

// console.log(airLine.slice(4));
// console.log(airLine.slice(4, 7));

// console.log(airLine.slice(0, airLine.indexOf(' ')));
// console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if(s === 'B' || s === 'E'){
//     console.log('You got the middle seat 🤣');
//   } else {
//     console.log('You got lucky 😎');
//   }
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('22C');
// checkMiddleSeat('22E');
//  console.log(typeof plane);
// MAPS 

// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
// .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open', 11)
// .set('close', 23)
// .set(true, 'We are open :D')
// .set(false, 'We are closed :(');


// console.log(rest.get('name'));
// console.log(rest.get(true));


// const time = 24
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.size);
// console.log(rest.has('categories'));

// const arr = [1, 2]
// rest.set(arr, 'test');

// console.log(rest);

// const question = new Map ([
// [  'question', 'What is the best programming language in the word ?'],
// [1, 'C'],
// [2, 'Java'],
// [3, 'JavaScript'],
// ['correct', 3],
// [true, 'Correct'],
// [false, 'Try again!']
// ]);

// // Convert Object to Map
// const openingHours = {
//      thu: {
//        open: 12,
//        close: 22,
//      },
//      fri: {
//        open: 11,
//        close: 23,
//      },
//      sat: {
//        open: 0, // Open 24 hours
//        close: 24,
//      },
//    };
// // Coding challenge  #3

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = new Set([...gameEvents.values()]);

// console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);
// //Compute and log the following string to the console: 
// //"An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
// for (const [key, event] of gameEvents) {
//   const str = key <= 45 ? `[FIRST HALF] ${key}: ${event}` : `[Second HALF] ${key}: ${event}`;
//   console.log(str);
// }

//  const hoursMap = new Map(Object.entries(openingHours));
 
//  console.log(hoursMap);
// // Quiz app

// console.log(question.get('question'));
// for (const [key, value] of question) {
//  if(typeof key === 'number') {
//   console.log(`Answer ${key}: ${value}`);
//  }
// }

//const answer = Number(prompt('Your answer'));

// console.log(question.get(question.get('correct') === answer));

// Convert Map to Array

// console.log([...question]);
// SETS

// const orderSet = new Set([
//   'Pasta',
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Risotto',
// ]);
// console.log(orderSet);
// console.log(new Set('Dido'));

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// console.log(orderSet.add('Bread'));
// console.log(orderSet.add('Bread'));
// console.log(orderSet.delete('Bread')); 
// console.log(orderSet);

// for (const order of orderSet) {
//   console.log(order);
// }



// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef'];
// const staffUnique = [...new Set(staff)];
// console.log(typeof(staff));

// console.log(staffUnique);
// Challenge #2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//Task 1
// Loop over the game.scored array and print each player name to the console,
// along with the goal number(Example: "Goal 1: Lewandowski")
// const x = game.scored;
// console.log(x);
// for (const [goal , name] of game.scored.entries()) {
  
//   console.log(`Goal ${goal + 1}: ${name}`);
// }

// Task 2 
// Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)

// let total = 0;
// const odd = Object.entries(game.odds);
// console.log(odd);
// for (const [ ,value] of odd) {
//   console.log(value);
//   total += value;
// }
// console.log(`The average ODD is ${total / odd.length}`);

//Task 3 
// Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
//   (except for "draw").Hint: Note how the odds and the game objects have the
// same property names 😉

// for (const [team, score] of odd) {
  
//   const value = game[team];

//   const str = value ? `Odd of victory ${value}: ${score}` : `Odd of draw: ${score}`;
//   console.log(str);
// }

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (menuIndex, categoriesIndex) {
//     return [this.mainMenu[menuIndex], this.categories[categoriesIndex]]
//   }
// };

// const openingHour = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// }

// FOR OF LOOPS ON OBJECTS
// Property NAMES

// const prop = Object.keys(openingHour);

// let open = `We are open on ${prop.length} days `;
// console.log(prop);
// for (const day of prop) {
//   open +=` ${day}, `;
// }
// console.log(open);


// // Property VALUES 
// const values = Object.values(openingHour);
// console.log(values);


// const entries = Object.entries(openingHour);
// console.log(entries);

// for (const [day, {open, close}] of entries) {
// console.log(`On ${day} we are open at ${open} and close at ${close}!`);
// }
// Optional chaining 
// console.log(restaurant.openingHours.fri.open);
// console.log(restaurant.openingHours.mon?.open);
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (const item of menu.entries()) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el} `);
// }

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// // Task 1
// const [players1 ,players2] = game.players;

// // Task 2
// const [gk, ...fieldPlayers] = [...players1];
// // Task 3
// const [...allPlayers] = [...players1, ...players2];
// // Task 4
// const [...players1Final] = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // Task 5 Based on the game.odds object, create one variable for each odd (called'team1', 'draw' and 'team2')

// // const {team1, x: draw, team2} = ({...game.odds});
// const {odds : {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);
// // Task 6
// function printGoals (...players) {
//  console.log(`${players.length} goals were scored`);
// };

// printGoals('Dido');
// printGoals('Dido', 'Sasho');
// printGoals(...game.scored)

// // Task 7

// const winner = ((game.odds.team1 < game.odds.team2) && game.team1) || game.team2;

// console.log(winner);
// const rest1 = {
//   name: `Dunavski`,
//   numGest: 20,
// };

// const rest2 = {
//   name: `Ribarska`,
//   owner: `Anton`,
// };
//OR assignment operator 
// rest1.numGest = rest1.numGest || 10;
// rest2.numGest = rest2.numGest || 10;

// rest1.numGest ||= 10;
// rest2.numGest ||= 10;

// ?? Nullish assignment operator (null or undefined) 
// rest1.numGest ??= 10;
// rest2.numGest ??= 10;
// console.log(rest1);
// console.log(rest2);
// Destructing arrays

// const [a, b] = restaurant.categories;
// console.log(a, b);

// const [a, , b] = restaurant.mainMenu;
// console.log(a, b);
// const [menu, category] = restaurant.order(0, 2);
// console.log(menu, category);

// const [a, , , , b = 5] = restaurant.starterMenu;
// console.log(a, b);

// const [a, , [b, c]] = [1, 2, [3, 4]];
// console.log(a, b, c);