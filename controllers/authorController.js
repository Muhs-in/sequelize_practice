const { Author, Book, Genre } = require('../models');

const createAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const getAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll({
            include: [
                {
                    model: Book,
                    attributes: ['id', 'title'],
                },
            ]
        });
        res.status(200).json(authors)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const deleteAuthor = async (req, res) => {
    try {
        const id = req.params.id;
        const author = await Author.findByPk(id);

        await author.destroy();
        res.status(200).json({ message: 'Author deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}

module.exports = { createAuthor, getAuthors, deleteAuthor }