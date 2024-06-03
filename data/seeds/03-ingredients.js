// data/seeds/03-ingredients.js

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').del();
  // Inserts seed entries
  await knex('ingredients').insert([
    { ingredient_name: 'olive oil' }
  ]);
};
