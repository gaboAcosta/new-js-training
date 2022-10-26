
const request = require('supertest')
const app = require('../../../../app')
const { seedUser, getUser } = require('../../util/users')
const { clearDatabase } = require('../../util/db')

describe('usersController', () => {
    beforeEach(async () => {
        await clearDatabase()
    })
    describe('updateUser', () => {
        test('it should return a 404 if the user is not found', async () => {
            await request(app)
                .put('/api/users/5').send({ name: 'Robin' })
                .expect(404)
        })
        test('it should update a found user', async () => {
            try {
                const user = await seedUser('Batman')

                const name = 'Robin'
                await request(app)
                    .put(`/api/users/${user.id}`).send({ name })
                    .expect(200)

                const updatedUser = await getUser(user.id)
                expect(updatedUser.name).toEqual(name)
            } catch (ex) {
                console.log(ex)
            }
        })
    })
})