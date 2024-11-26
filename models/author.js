module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        bio: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        timestamp: true,
    })

    return Author
}