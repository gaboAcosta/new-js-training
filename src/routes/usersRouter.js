
const { Router } = require('express')
const router = new Router({})

const {
    listUsers,
    getUser,
    updateUser,
    createUser,
    destroyUser
} = require('../controllers/usersController')

router.get('/', listUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.post('/', createUser)
router.delete('/:id', destroyUser)

module.exports = router
