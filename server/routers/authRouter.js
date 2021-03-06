const Router = require('express')
const router = new Router()
const controller = require('../controllers/AuthController')
const {check} = require('express-validator')
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

router.post('/registration', [
    check('username', "Name cannot be empty").notEmpty(),
    check('password', "Password has to contain more 4 and less 10 symbols").isLength({min:4, max:10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['USER', 'ADMIN']), controller.getUsers)
router.get('/', authMiddleware, controller.check)

module.exports = router