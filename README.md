# REvision L2 2025 — Scripts Overview

This repository contains small example scripts (ES modules: `.mjs`) demonstrating different ways to work with two simple datasets: `pizzas` and `ingredients`.

Below is a short description of each script and how to run it.

## Files

- `data.mjs`

  - Exports `pizzas` and `ingredients` arrays.
  - `pizzas` use UUID strings as `id` and have a `name`.
  - `ingredients` include `id` (UUID string), `name`, and `pizzas` (array of pizza `id` values).

- `dataSimpleID.mjs`

  - Same shape as `data.mjs` but uses simple numeric `id` values for pizzas and ingredient `pizzas` references.

- `tomate.mjs`

  - Small script that finds the `tomate` ingredient and prints all pizzas that include it (uses `data.mjs`).
  - Run: `node tomate.mjs`

- `getIngredientsForPizzaWithReduce.mjs`

  - Uses `Array.prototype.reduce` to collect ingredient names for a specific pizza (UUID id hard-coded for Regina).
  - Run: `node getIngredientsForPizzaWithReduce.mjs`

- `getIngredientsForPizzaWithFilterMap.mjs`

  - Uses `filter` + `map` to return ingredient names for a given pizza id. Example call prints ingredients for the Regina id.
  - Run: `node getIngredientsForPizzaWithFilterMap.mjs`

- `pizzasWithIngredientsFilterMap.mjs`

  - Builds an array of pizza objects augmented with an `ingredients` array. It uses `filter` + `map` to compute ingredient names per pizza.
  - Run: `node pizzasWithIngredientsFilterMap.mjs`

- `pizzasWithIngredientsReduce.mjs`

  - Demonstrates computing the `ingredients` array per pizza by reducing the `ingredients` list and collecting names.
  - Run: `node pizzasWithIngredientsReduce.mjs`

- `pizzasWithIngredients.mjs`

  - Similar to the other enrichment scripts but (depending on the current `data.mjs`) may attach ingredient `id` values instead of names. Inspect the file to see whether it pushes `ing.name` or `ing.id`.
  - Run: `node pizzasWithIngredients.mjs`

- `PythonTutor/getIngredients.mjs`
  - A small example intended for teaching: `getIngredientsByPizzaId(id)` returns ingredient names using numeric ids (works with `dataSimpleID.mjs` shape).
  - Run: `node PythonTutor/getIngredients.mjs`

## Notes

- Some scripts expect the `data.mjs` format (UUID string ids) while others expect the `dataSimpleID.mjs` format (numeric ids). When running a script, ensure the imported `data.mjs` file matches the expected id format or adjust the import to the correct data file.
- To quickly print the dataset from Node:

```bash
node -e "import('./data.mjs').then(m => console.log(m.pizzas, m.ingredients))"
```

If you want, I can:

- Add a top-level `run.sh` or `package.json` scripts to run examples easily.
- Standardize all scripts to use the same `data` format and update code accordingly.

---

Generated README summarizing each `.mjs` in the workspace.
