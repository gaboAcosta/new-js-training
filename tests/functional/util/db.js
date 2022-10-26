
const { getConnection } = require('../../../src/database')
const { connection } = getConnection()

async function clearDatabase () {
    connection.sync({ force: true })
}

module.exports = {
    clearDatabase
}
