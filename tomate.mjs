// Small script: list all pizzas that include the ingredient "tomate".
// - Imports the `ingredients` and `pizzas` arrays from `data.mjs`.
// - Finds the ingredient object for "tomate" and filters pizzas that contain it.
// - Prints the resulting list as a table.

import { ingredients, pizzas } from "./data.mjs";

// Find the ingredient object for "tomate"
const tomate = ingredients.find((ing) => ing.name === "tomate");
console.log("Ingredient found:", tomate);
// Filter pizzas that include "tomate" (matching by string `id`)
const pizzasAvecTomate = pizzas.filter((p) => tomate.pizzas.includes(p.id));

console.table(pizzasAvecTomate);
