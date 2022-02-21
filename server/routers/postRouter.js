const Router = require('express')
const router = new Router()
const controller = require('../controllers/PostController')

router.post('/', controller.createPost)
router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.put('/', controller.update)
router.delete('/:id', controller.delete)

module.exports = router