// routers/recipes-router.js

const express = require('express');
const { getRecipeById } = require('./recipes-model');
const router = express.Router();

router.get('/recipes/:id', async (req, res, next) => {
  try {
    const recipe = await getRecipeById(req.params.id);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
