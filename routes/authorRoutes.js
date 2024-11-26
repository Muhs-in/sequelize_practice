const express = require('express');
const router = express.Router();
const { createAuthor, getAuthors, deleteAuthor } = require('../controllers/authorController');

router.post('/authors', createAuthor)
router.get('/authors', getAuthors)
router.delete('/authors/:id', deleteAuthor)

module.exports = router