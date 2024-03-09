const express = require('express');
const router = express.Router();
const Book = require('../Models/Book.model')

// Route to insert a new book
router.post('/books', async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishedYear) {
      return res.status(400).send({
        message: 'Send all required fields: title, author, publishedYear'
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear
    };
    const book = await Book.create(newBook);
    res.status(201).json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});


// Route to get all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find({});
    res.json({
      count: books.length,
      data: books
    }).status(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get one book from database
router.get('/books/:id',async (req, res) =>{
  try{
    const {id} = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  }
  catch(error){
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
})

module.exports = router;
