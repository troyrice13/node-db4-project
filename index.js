// index.js

const express = require('express');
const recipesRouter = require('./api/schemes/recipes-router');
const server = express();

server.use(express.json());
server.use('/api', recipesRouter);

server.use((err, req, res, next) => {  // Error handling middleware
  console.error(err);
  res.status(500).json({ message: 'Something went wrong' });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
