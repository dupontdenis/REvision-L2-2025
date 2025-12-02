import { ingredients } from "./data.mjs";
function getIngredientsForPizza(pizzaId) {
  return ingredients
    .filter((ingredient) => ingredient.pizzas.includes(pizzaId))
    .map((ingredient) => ingredient.name);
}

// Exemple d'utilisation
console.log(getIngredientsForPizza("e3f2a9d0-2b5c-4a6f-a7b8-2c3d4e5f6a02"));
// => ["tomate", "mozzarella", "jambon"]
