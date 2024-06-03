// data/seeds/02-steps.js

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').del();
  // Inserts seed entries
  await knex('steps').insert([
    { recipe_id: 1, step_number: 1, step_instructions: 'Put a large saucepan on a medium heat' },
    { recipe_id: 1, step_number: 2, step_instructions: 'Add 1 tbsp olive oil' }
  ]);
};
