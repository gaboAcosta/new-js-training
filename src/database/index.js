
const { Sequelize, DataTypes } = require('sequelize');

const db = { connection: false }

function getConnection () {
    if (db.connection) {
        return db
    }
    db.connection = new Sequelize('training', 'admin', 'admin', {
        host: 'localhost',
        dialect: 'mysql'
    });
    db.models = {
        User: require('./models/User')(db.connection)
    }
    return db
}

function getModel (modelName) {
    getConnection()
    const model = db.models[modelName]
    if(model === undefined) throw new Error('Unable to resolve model!')
    return model
}

module.exports = {
    getConnection,
    getModel
}