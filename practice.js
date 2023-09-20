/******************************** CONSTANTS *********************************/ 
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/
// Define a function to find the recipe for a given pieType
function findRecipe(pieType) {
  const recipe = recipes[pieType];
  if (!recipe) {
    console.log(`Error: Unknown pie type "${pieType}"`);
    return null;
  }
  return recipe;
}

// Define a function to bake a given quantity of pies from a recipe
function bakePies(pieType,recipe,pieQuantity) {
  
  for (let i = 0; i < pieQuantity; i++) {
    
    let combiningMsg = `Combining recipes for ${pieType} :`;
    combiningMsg+= recipe.map(ingredient => ingredient.name).join(' , ');
    console.log(combiningMsg);
    console.log(`Baked pie ${i + 1} !`);
  }
}

// Define a function to calculate the cost of a pie from a recipe
function calculateCost(recipe) {
  const costOfPie = recipe.reduce((prev, current) => {
    return prev + current.cost;
  }, recipe[0]?.cost || 0);
  console.log(`Cost per pie: $${costOfPie}`);
  return costOfPie;
}

// Define a function to sell a given quantity of pies at a given profit margin
function sellPies(pieQuantity, costOfPie, profitMargin) {
  const totalCost = costOfPie * pieQuantity;
  const revenue = totalCost * (profitMargin || 1.2);
  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)} .`);
}

// Define a function that orchestrates the baking and selling of pies
function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  const recipe = findRecipe(pieType);
  if (!recipe) {
    return;
  }
  bakePies(pieType,recipe, pieQuantity);
  const costOfPie = calculateCost(recipe);
  sellPies(pieQuantity, costOfPie, profitMargin);
}


bakeAndSellPies("applePie", 5, 2.5);

/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};