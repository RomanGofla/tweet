const Router = require('express')
const router = new Router()
const controller = require('../controllers/postController')

router.post('/', controller.createPost)
router.get('/', controller.getPosts)

module.exports = router