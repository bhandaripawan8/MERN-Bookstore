const express = require('express');
const router = express.Router();
const Book = require('../Models/Book.model')

// Route to insert a new book
router.post('/books', async (req, res) => {
  try {
    if(!req.body.title || !req.body.author || !req.body.publishedYear){
      return res.status(400).send({
        message: 'Send all required fields: title, author, publishedYear'
      })
    }
    const NewBook = {title: req.body.title, author: req.body.author, publishedYear: req.body.publishedYear};
    const book = await Book.create(NewBook);
    res.status(201).json(book).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Route to get all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
