import { ingredients } from "./data.mjs";
const pizzaId = "e3f2a9d0-2b5c-4a6f-a7b8-2c3d4e5f6a02"; // Regina

const ingredientsForPizza = ingredients.reduce((acc, ingredient) => {
  if (ingredient.pizzas.includes(pizzaId)) {
    acc.push(ingredient.name);
  }
  return acc;
}, []);

console.log(ingredientsForPizza);
// => ["tomate", "mozzarella", "jambon"]