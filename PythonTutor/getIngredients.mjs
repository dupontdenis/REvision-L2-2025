// Returns the ingredient names for a given pizza id.
// - `getIngredientsByPizzaId(id)` accepts a numeric pizza id and
//   returns an array of ingredient names used on that pizza.
const pizzas = [
  { id: 1, name: "Margherita" },
  { id: 2, name: "Regina" },
  { id: 3, name: "Quattro Formaggi" },
  { id: 4, name: "Diavola" },
];

const ingredients = [
  { name: "tomate", pizzas: [1, 2, 3, 4] },
  { name: "mozzarella", pizzas: [1, 2, 3] },
  { name: "jambon", pizzas: [2] },
  { name: "gorgonzola", pizzas: [3] },
  { name: "salami piquant", pizzas: [4] },
];

function getIngredientsByPizzaId(targetPizzaId) {
  const matchingIngredients = ingredients.filter((ingredient) =>
    ingredient.pizzas.includes(targetPizzaId)
  );
  const ingredientNames = matchingIngredients.map(
    (ingredient) => ingredient.name
  );
  return ingredientNames;
}

console.log(getIngredientsByPizzaId(2));
