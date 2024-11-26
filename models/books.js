module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        publishedDate: {
            type: DataTypes.DATE,
            allowNull: true
        },

        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Author',
                key: 'id'
            }
        },

        genreId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Genre',
                key: 'id'
            }
        }

    }, {
        timestamp: true,
    })

    return Book
}