/**
===============================================================================
Domino's Pizza Randomizer
GitHub Profile: l-shahid
03-20-2022

This is a simple JavaScript for generating a random Domino's Pizza for
when you don't know what to order.

Notes--------------------------------------------------------------------------
From dominos.com

Topping limit is 10
X-Large crusts: Brooklyn crust
Large Crusts: Brooklyn, hand tossed, thin crust
Medium Crusts: Hand tossed, handmade pan, thin crust
Small: Hand tossed, gluten free

Changelog----------------------------------------------------------------------
03-20-2022: Pizza variables instantiated, generation functions instantiated.

===============================================================================
*/

const pizzaSizes = ['small', 'medium', 'large', 'extra large'];
const cheeseSauceLevel = ['light', 'normal', 'extra'];
const pizzaCut = ['pie cut', 'square cut', 'uncut'];
const pizzaBake = ['well done', 'normal bake'];
const seasoning = ['garlic seasoned crust', 'no garlic seasoned crust'];

const smallCrusts = ['gluten-free', 'hand tossed'];
const mediumCrusts = ['hand tossed', 'hand made pan', 'crunchy thin crust'];
const largeCrusts = ['brooklyn style', 'hand tossed'];
const xLargeCrust = ['brooklyn style'];

const pizzaSauces = ['robust inspired tomato sauce', 'hearty marinara sauce',
  'honey bbq sauce', 'garlic parmesean sauce', 'alfredo sauce', 'ranch'];

const meatToppings = ['italian sausage', 'pepperoni', 'ham', 'beef',
  'premium chicken', 'salami', 'bacon', 'philly steak'];

const veggieToppings = ['spinach', 'black olives', 'hot buffalo sauce',
  'shredded provelone cheese', 'onions', 'roasted red peppers',
  'jalapeno peppers', 'cheddar cheese', 'green peppers', 'banana peppers',
  'diced tomatoes', 'feta cheese', 'mushrooms', 'shredded parmesean asiago',
  'pineapple'];

const pizzaToppings = ['italian sausage', 'pepperoni', 'ham', 'beef',
  'premium chicken', 'salami', 'bacon', 'philly steak', 'spinach',
  'black olives', 'hot buffalo sauce', 'shredded provelone cheese', 'onions',
  'roasted red peppers', 'jalapeno peppers', 'cheddar cheese', 'green peppers',
  'banana peppers', 'diced tomatoes', 'feta cheese', 'mushrooms',
  'shredded parmesean asiago', 'pineapple'];

let numToppings;
let fiveDollarPizza = true;
let toppingList = [];

if (fiveDollarPizza === true) {
  numToppings = 2;
  console.log('The Dominos Pizza Oracle TM will now predict a two topping medium pizza for you.');
  randomToppings();
  generateFiveDollarPizza();
} else {
  console.log('The Dominos Pizza Oracle TM will now predict a pizza you will enjoy.');
  toppingCheck();
}

function toppingCheck() {
  if (numToppings > 10) {
    console.log('Please enter a topping number that is less than or equal to 10');
  } else {
    randomToppings();
    generatePizza();
  }
}

function randomToppings(numToppings) {
  let toppingIndices = [];
  while (toppingIndices.length < numToppings) {
    let toppingIndex = Math.random(pizzaToppings.length) * 10;
    toppingIndices.push(toppingIndex);
  }

  console.log('Topping Indices: ' + toppingIndices);
}

function generateFiveDollarPizza(numToppings) {

  let crust = mediumCrusts[Math.floor(Math.random(mediumCrusts.length) * 10)];
  let bake = pizzaBake [Math.floor(Math.random(pizzaBake.length) * 10)];
  let cut = pizzaCut[Math.floor(Math.random(pizzaCut.length) * 10)];
  let sauce = pizzaSauces[Math.floor(Math.random(pizzaSauces.length) * 10)];
  let toppingA = pizzaToppings[Math.floor(Math.random(pizzaToppings.length) * 10)];
  let toppingB = pizzaToppings[Math.floor(Math.random(pizzaToppings.length) * 10)];

  console.log('Test Random:' + Math.floor(Math.random(pizzaToppings.length) * 10));

  console.log('The Dominos Pizza Oracle TM predicts you will enjoy a:');
  console.log(`medium, ${bake} ${cut} ${crust} pizza`);
  console.log(`with ${sauce}, ${toppingA} and ${toppingB}.`);
};

function generatePizza(numToppings) {
  if (numToppings > 10) {
  } else {
    let toppingCount = 0;
    while (toppingCount < numToppings) {
      let toppingIndex = Math.random(pizzaToppings.length) * 10;
      toppingList.push(pizzaToppings[toppingIndex]);
      toppingCount += 1;
    }
  }
}
