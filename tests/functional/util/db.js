
const { getConnection } = require('../../../src/database')
const { connection } = getConnection()

async function clearDatabase () {
    await connection.query(`TRUNCATE Users`)
}

module.exports = {
    clearDatabase
}
