// data/seeds/04-step_ingredients.js

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('step_ingredients').del();
  // Inserts seed entries
  await knex('step_ingredients').insert([
    { step_id: 2, ingredient_id: 1, quantity: 0.014 }
  ]);
};
