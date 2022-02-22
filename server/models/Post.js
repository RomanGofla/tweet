const {Schema, model} = require('mongoose')

const Post = new Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true}
    //Добавить 20:20 user_id ссылка на пользователя
})

module.exports = model('Post', Post)