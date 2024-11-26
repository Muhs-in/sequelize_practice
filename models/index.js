const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');


const Author = require('./author')(sequelize, DataTypes);
const Book = require('./books')(sequelize, DataTypes)
const Genre = require('./genre')(sequelize, DataTypes)

Author.hasMany(Book);
Book.belongsTo(Author);

Genre.hasMany(Book);
Book.belongsTo(Genre);

sequelize.sync().then(() => {
    console.log('Database synchronized success')
}).catch(error => {
    console.error('Error syncing database:', error)
})

module.exports = { Author, Book, Genre } 