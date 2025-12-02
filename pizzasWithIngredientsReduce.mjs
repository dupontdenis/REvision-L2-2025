// Build pizza objects augmented with their ingredient names using `reduce`.
// - Imports `pizzas` and `ingredients` from `data.mjs`.
// - `enrichPizzas` maps each pizza to a new object with an `ingredients` array
//   built by reducing the `ingredients` list and collecting matching names.
import { pizzas, ingredients } from "./data.mjs";

function enrichPizzas(pizzas, ingredients) {
  return pizzas.map((pizza) => {
    const pizzaIngredients = ingredients.reduce((acc, ing) => {
      if (ing.pizzas.includes(pizza.id)) {
        acc.push(ing.name);
      }
      return acc;
    }, []);

    // Return a new pizza object with an added `ingredients` property
    return { ...pizza, ingredients: pizzaIngredients };
  });
}

const pizzasWithIngredients = enrichPizzas(pizzas, ingredients);

console.log(pizzasWithIngredients);
