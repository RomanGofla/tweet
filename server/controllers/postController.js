const Post = require('../models/Post')

class postController{
    async createPost(req, res){
        try {
          const {author, title, content} = req.body
          const post = await Post.create({author, title, content})
          res.status(200).json({message: 'Post successfully created'})
        } catch (error) {
            console.log(error)
        }
    }

    async getPosts(req, res){
        try {
            const posts = await Post.find()
            res.json(posts)
        } catch (error) {
            console.log(error)
        }
    }

    async getOnePost(req, res){
        try {
            const post = await Post.findOne()
            res.json(post)
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = new postController