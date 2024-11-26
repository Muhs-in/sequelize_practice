const { Book, Author, Genre } = require('../models');

const createBook = async (req, res) => {
    try {
        const { title, description, publishedDate, authorId, genreId } = req.body;
        const book = await Book.create({
            title,
            description,
            publishedDate,
            authorId,
            genreId
        });
        res.status(201).json(book)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const getBooks = async (req, res) => {
    try {
        const books = await Book.findAll({
            attributes: {
                exclude: ['authorId', 'genreId']
            },
            include: [
                {
                    model: Author,
                    attributes: ['id', 'name'],
                },
                {
                    model: Genre,
                    attributes: ['id', 'name'],
                }
            ]
        });
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const deleteBook = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findByPk(id);

        await book.destroy();
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}

module.exports = { createBook, getBooks, deleteBook }