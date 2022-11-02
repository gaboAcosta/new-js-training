
const Boom = require('@hapi/boom')

function parseError (error) {
    let parsedError = error

    if(error.isBoom !== true) {
        console.log('Unhandled exception')
        console.log(error)
        parsedError = Boom.internal()
    }
    return parsedError
}

function handleError (ex, res) {
    const { message, output: { payload: { statusCode } } } = parseError(ex)
    res.status(statusCode).send(message)
}

module.exports = {
    parseError,
    handleError
}
