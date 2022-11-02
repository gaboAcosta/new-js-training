
const { getModel } = require('../database')
const User = getModel('User')
const UsersService = require('./usersService')

class ServiceFactory {
    static createUsersService () {
        return new UsersService(User)
    }
}

module.exports = ServiceFactory
