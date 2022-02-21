const PostService = require('../PostService')

class PostController{
    async createPost(req, res){
        try {
          const post = await PostService.create(req.body)
          res.json(post)
        } catch (error) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const post = await PostService.create(req.params.id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


module.exports = new PostController