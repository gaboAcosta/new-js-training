const Boom = require('@hapi/boom')

class UsersService {
    constructor(usersModel) {
        this.model = usersModel
    }

    getUsers() {
        return this.model.findAll({})
    }

    getUser(id) {
        return this.model.findOne({where: {id}})
    }

    createUser(details) {
        return this.model.create(details)
    }

    async updateUser(id, name, email) {
        const user = await this.getUser(id)
        if (!user) {
            throw new Boom.notFound('User not found!')
        }
        user.name = name
        user.email = email
        await user.save()
        return user
    }

    destroyUser(id) {
        return this.model.destroy({where: {id}})
    }
}

module.exports = UsersService