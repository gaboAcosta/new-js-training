
const { DataTypes } = require('sequelize')

module.exports = (connection)  => {
    const User = connection.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        }
    }, {});
    return User
}
