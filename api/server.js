import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import userRoute from "./routes/users.js";
import cookieParser from 'cookie-parser'
import path from 'path'

// init app
const app = express()
// config env
dotenv.config()


// dirrname init
const __dirname = path.resolve()
// init middlewares
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))


// config static folder
app.use(express.static(path.join(__dirname, '/api/public')))

// init cookieparser on server
app.use(cookieParser())



// init routes here
app.use('/api/v1/user/', userRoute)

// init env variables
const port = process.env.PORT || 5000


// init listener

app.listen(5000, ()=>{
    console.log(`Server is running on Port ${port}`.bgGreen.black);
})