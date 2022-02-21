const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routers/authRouter')
const postRouter = require('./routers/postRouter')
const PORT = process.env.PORT || 5000
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.json())
app.use('/auth', authRouter)
app.use('/', postRouter)

const start = async() => {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()