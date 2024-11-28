const cors = require('cors');
const express = require('express');
const app = express();

const { getAllBooks, getBookById } = require('./controllers');

app.use(cors());
app.use(express.json());

// Endpoint to get all books
app.get('/books', async (req, res) => {
  const books = getAllBooks();
  res.json({ books });
});

// Endpoint to get book details by ID
app.get('/books/details/:id', async (req, res) => {
  const book = getBookById(parseInt(req.params.id));
  res.json({ book });
});

module.exports = { app };
