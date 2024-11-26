const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('muhsin_db', 'muhsin', 'muhsin', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize