const cors = require('cors');
const express = require('express');
const app = express();

const { getAllGames, getGameById } = require('./controllers');

app.use(cors());
app.use(express.json());

// Endpoint to get all games
app.get('/games', async (req, res) => {
  const games = getAllGames();
  res.json({ games });
});

// Endpoint to get game details by id
app.get('/games/details/:id', async (req, res) => {
  const game = getGameById(parseInt(req.params.id));
  res.json({ game });
});

module.exports = { app };
