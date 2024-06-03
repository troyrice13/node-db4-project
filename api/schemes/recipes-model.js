// models/recipes-model.js

const db = require('../../data/db-config');

async function getRecipeById(recipe_id) {
  const recipeRows = await db('recipes as r')
    .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
    .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
    .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
    .select(
      'r.recipe_id',
      'r.recipe_name',
      'r.created_at',
      's.step_id',
      's.step_number',
      's.step_instructions',
      'i.ingredient_id',
      'i.ingredient_name',
      'si.quantity'
    )
    .where('r.recipe_id', recipe_id);

  if (recipeRows.length === 0) return null;

  const recipe = {
    recipe_id: recipeRows[0].recipe_id,
    recipe_name: recipeRows[0].recipe_name,
    created_at: recipeRows[0].created_at,
    steps: []
  };

  recipeRows.forEach(row => {
    const step = recipe.steps.find(s => s.step_id === row.step_id);
    if (step) {
      if (row.ingredient_id) {
        step.ingredients.push({
          ingredient_id: row.ingredient_id,
          ingredient_name: row.ingredient_name,
          quantity: row.quantity
        });
      }
    } else {
      recipe.steps.push({
        step_id: row.step_id,
        step_number: row.step_number,
        step_instructions: row.step_instructions,
        ingredients: row.ingredient_id ? [{
          ingredient_id: row.ingredient_id,
          ingredient_name: row.ingredient_name,
          quantity: row.quantity
        }] : []
      });
    }
  });

  return recipe;
}

module.exports = {
  getRecipeById,
};
