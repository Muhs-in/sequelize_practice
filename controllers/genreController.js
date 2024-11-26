const { Genre } = require('../models');

const createGenre = async (req, res) => {
    try {
        const genre = await Genre.create(req.body);
        res.status(201).json(genre)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const getGenres = async (req, res) => {
    try {
        const genre = await Genre.findAll(req.body);
        res.status(200).json(genre)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const deleteGenre = async (req, res) => {
    try {
        const id = req.params.id;
        const genre = await Genre.findByPk(id);

        await genre.destroy();
        res.status(200).json({ message: 'Genre deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}

const updateGenre = async (req, res) => {
    const genreId = req.params.id;
    const { name } = req.body;

    try {
        const genre = await Genre.findByPk(genreId);

        if (!genre) {
            return res.status(404).json({ error: 'Genre not found' });
        }

        // Update the genre's name
        genre.name = name;
        await genre.save();

        res.status(200).json(genre);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createGenre, getGenres, deleteGenre, updateGenre }