const express = require('express');
const router = express.Router();
const { createGenre, getGenres, deleteGenre, updateGenre } = require('../controllers/genreController');

router.post('/genres', createGenre)
router.get('/genres', getGenres)
router.delete('/genres/:id', deleteGenre)
router.put('/genres/:id', updateGenre)

module.exports = router