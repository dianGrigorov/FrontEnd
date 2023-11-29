'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (menuIndex, categoriesIndex) {
    return [this.mainMenu[menuIndex], this.categories[categoriesIndex]]
  }
};

const openingHour = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

// FOR OF LOOPS ON OBJECTS
// Property NAMES

const prop = Object.keys(openingHour);

let open = `We are open on ${prop.length} days `;
console.log(prop);
for (const day of prop) {
  open +=` ${day}, `;
}
console.log(open);


// Property VALUES 
const values = Object.values(openingHour);
console.log(values);


const entries = Object.entries(openingHour);
console.log(entries);

for (const [day, {open, close}] of entries) {
console.log(`On ${day} we are open at ${open} and close at ${close}!`);
}
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