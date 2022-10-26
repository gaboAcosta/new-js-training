
const { getModel } = require('../database')
const User = getModel('User')

async function listUsers (req, res) {
    const users = await User.findAll({})
    res.json(users)
}

async function getUser (req, res) {
    const { id } = req.params
    const user = await User.findOne({ where: { id }})
    res.json(user)
}

async function createUser (req, res) {
    const details = req.body
    const user = await User.create(details)
    res.json(user)
}

async function updateUser (req, res) {
    try {
        const { id } = req.params
        const user = await User.findOne({ where: { id }})
        if (!user) {
            res.status(404).send('Not Found!')
            return
        }
        user.name = req.body.name
        user.email = req.body.email
        await user.save()
        res.json(user)
    } catch (ex) {
        res.status(500).send(ex.message)
    }
}

async function destroyUser (req, res) {
    const { id } = req.params
    const result = await User.destroy({ where :  { id }})
    res.json(result)
}

module.exports = {
    listUsers,
    getUser,
    createUser,
    updateUser,
    destroyUser
}
