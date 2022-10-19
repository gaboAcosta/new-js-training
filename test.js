
const { red } = require('chalk')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const port = 3000

function getUsers (req, res) {
    console.log(req)
    res.json([])
}

function getUser (req, res) {
    console.log(req)
    res.json({})
}

function createUser (req, res) {
    console.log(req)
    res.json({ id: 1 })
}

function updateUsers (req, res) {
    console.log(req)
    res.json({ id: 1, name: 'updated' })
}

function destroyUser (req, res) {
    const myObject = { test: 1 }
    console.log(req)
    res.json(1)
}

app.get('/users', getUsers)
app.get('/users/:id', getUser)
app.put('/users/:id', updateUsers)
app.post('/users', createUser)
app.delete('/users', destroyUser)

app.listen(port, () => {
    console.log(red(`Example app listening on port ${port}`))
})
