// data/seeds/01-recipes.js

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del();
  // Inserts seed entries
  await knex('recipes').insert([
    { recipe_name: 'Spaghetti Bolognese' }
  ]);
};
