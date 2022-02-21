const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routers/authRouter')
const postRouter = require('./routers/postRouter')
const PORT = process.env.PORT || 5000


const app = express()

app.use(express.json())
app.use('/auth', authRouter)
app.use('/', postRouter)

const start = async() => {
    try {
        await mongoose.connect('mongodb+srv://Gofla:qwerty123@cluster0.haks4.mongodb.net/forum?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()