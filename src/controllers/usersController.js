const ServiceFactory = require('../services')
const usersService = ServiceFactory.createUsersService()
const {handleError} = require('../utils/response')

async function listUsers(req, res) {
    try {
        const users = await usersService.getUsers()
        res.json(users)
    } catch (ex) {
        handleError(ex, res)
    }
}

async function getUser(req, res) {
    try {
        const {id} = req.params
        const user = await usersService.getUser(id)
        res.json(user)
    } catch (ex) {
        handleError(ex, res)
    }
}

async function createUser(req, res) {
    try {
        const details = req.body
        const user = await usersService.createUser(details)
        res.json(user)
    } catch (ex) {
        handleError(ex, res)
    }
}

async function updateUser(req, res) {
    try {
        const {id} = req.params
        const {name, email} = req.body
        const user = await usersService.updateUser(id, name, email)
        res.json(user)
    } catch (ex) {
        handleError(ex, res)
    }
}

async function destroyUser(req, res) {
    try {
        const {id} = req.params
        const result = await usersService.destroyUser(id)
        res.json(result)
    } catch (ex) {
        handleError(ex, res)
    }
}

module.exports = {
    listUsers,
    getUser,
    createUser,
    updateUser,
    destroyUser
}
