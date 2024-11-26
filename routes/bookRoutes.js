const express = require('express');
const router = express.Router();
const { createBook, getBooks, deleteBook } = require('../controllers/bookController');

router.post('/books', createBook)
router.get('/books', getBooks)
router.delete('/books/:id', deleteBook)

module.exports = router