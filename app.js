
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const userRoutes = require('./src/routes/usersRouter')

app.use('/api/users', userRoutes)

module.exports = app
