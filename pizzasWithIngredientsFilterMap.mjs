// Build a list of pizzas where each pizza object includes its ingredient names.
// - Imports `pizzas` and `ingredients` from `data.mjs`.
// - Uses `filter` to find matching ingredients for each pizza, then `map` to extract names.
// - Result: `pizzasWithIngredients` is an array of pizza objects with an `ingredients` array.
import { pizzas } from "./data.mjs";
import { ingredients } from "./data.mjs";

const pizzasWithIngredients = pizzas.map((pizza) => {
  const pizzaIngredients = ingredients
    .filter((ing) => ing.pizzas.includes(pizza.id))
    .map((ing) => ing.name);

  // Return a new pizza object with an added `ingredients` property
  return { ...pizza, ingredients: pizzaIngredients };
});

console.log(pizzasWithIngredients);
