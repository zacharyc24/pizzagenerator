/**
===============================================================================
Domino's Pizza Randomizer

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
fiveDollarPizza & generatePizza functions work.

===============================================================================
*/

// Instantiate Pizza Constants-------------------------------------------------

const pizzaSizes = ['small', 'medium', 'large', 'extra large'];
const cheeseSauceLevel = ['light', 'normal', 'extra'];
const pizzaCut = ['pie cut', 'square cut', 'uncut'];
const pizzaBake = ['well done', 'normal bake'];
const seasoning = ['a garlic seasoned crust', 'no garlic seasoned crust'];

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

//-----------------------------------------------------------------------------

//User set variables ----------------------------------------------------------

let numToppings = 0;
let fiveDollarPizza = true;

//-----------------------------------------------------------------------------

//Pizza Check Statements -------------------------------------------------------------

if (fiveDollarPizza === true) {
  console.log('The Dominos Pizza Oracle TM will now predict a two topping medium pizza for you.');
  generateFiveDollarPizza();
} else {
  console.log('The Dominos Pizza Oracle TM will now predict a pizza you will enjoy.');
  toppingCheck();
}

function toppingCheck() {
  if (numToppings > 10) {
    console.log('The number of toppings you desire is clouding my vision.');
    console.log('Please enter a topping number that is between 1 and 10.');
  } else if (numToppings < 0) {
    console.log('I am unable to generate negative toppings.');
    console.log('Please enter a topping number between 1 and 10.');
  } else if (numToppings === 0) {
    numToppings = Math.floor(Math.random() * 10);
    generatePizza(numToppings);
  } else {
    generatePizza(numToppings);
  }
}

//-----------------------------------------------------------------------------

//Pizza generation functions --------------------------------------------------

function generateFiveDollarPizza(numToppings) {
  let bake = pizzaBake[Math.floor(Math.random() * (pizzaBake.length))];
  let cut = pizzaCut[Math.floor(Math.random() * (pizzaCut.length))];
  let crust = mediumCrusts[Math.floor(Math.random() * mediumCrusts.length)];
  let sauce = pizzaSauces[Math.floor(Math.random() * pizzaSauces.length)];
  let toppingA = pizzaToppings[Math.floor(Math.random() * pizzaToppings.length)];
  let toppingB = pizzaToppings[Math.floor(Math.random() * pizzaToppings.length)];
  let seasoningBool = seasoning[Math.floor(Math.random() * seasoning.length)];

  console.log('The Dominos Pizza Oracle TM predicts you will enjoy a: ');
  console.log(`medium, ${bake} ${cut} ${crust} pizza`);
  console.log(`with ${sauce}, ${toppingA}, ${toppingB}, and ${seasoningBool}.`);
}

function generatePizza(numToppings) {
  let size = pizzaSizes[Math.floor(Math.random() * pizzaSizes.length)];
  let bake = pizzaBake[Math.floor(Math.random() * pizzaBake.length)];
  let cut = pizzaCut[Math.floor(Math.random() * pizzaCut.length)];
  let sauce = pizzaSauces[Math.floor(Math.random() * pizzaSauces.length)];
  let seasoningBool = seasoning[Math.floor(Math.random() * seasoning.length)];

  let crust;

  let toppings = [];
  let toppingCount = 0;

  switch (size){
    case 'small':
      crust = smallCrusts[Math.floor(Math.random() * smallCrusts.length)];
    break;

    case 'medium':
      crust = mediumCrusts[Math.floor(Math.random() * mediumCrusts.length)];
    break;

    case 'large':
      crust = largeCrusts[Math.floor(Math.random() * largeCrusts.length)];
    break;

    case 'xlarge':
      crust = xLargeCrust[Math.floor(Math.random() * xLargeCrust.length)];
    break;
  }

  while (toppingCount < numToppings) {
    let toppingIndex = Math.floor(Math.random() * pizzaToppings.length);
    toppings.push(' ' + pizzaToppings[toppingIndex]);
    toppingCount += 1;
  }

  console.log('The Dominos Pizza Oracle TM predicts you will enjoy a:');
  console.log(`${size}, ${bake} ${cut} ${crust} pizza`);
  console.log(`with ${sauce},${toppings} and ${seasoningBool}.`);
}
