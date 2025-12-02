// Build pizza objects that include their ingredient names using a reduce-based map.
// - Imports `pizzas` and `ingredients` from `data.mjs`.
// - Creates a `pizzaIngredientsMap` mapping pizza ids → ingredient name arrays.
// - Enriches each pizza with an `ingredients` array (empty if none match).
import { pizzas, ingredients } from "./data.mjs";

function enrichPizzas(pizzas, ingredients) {
  // Construire un dictionnaire { pizzaId: [ingredients] }
  const pizzaIngredientsMap = ingredients.reduce((acc, ing) => {
    ing.pizzas.forEach((pid) => {
      if (!acc[pid]) acc[pid] = [];
      acc[pid].push(ing.id);
    });
    return acc;
  }, {});

  // Enrichir les pizzas en une seule passe
  return pizzas.map((pizza) => ({
    ...pizza,
    ingredients: pizzaIngredientsMap[pizza.id] || [],
  }));
}

const pizzasWithIngredients = enrichPizzas(pizzas, ingredients);
console.log(pizzasWithIngredients);
