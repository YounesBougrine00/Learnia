const express = require('express')
const connectToDb = require('./db/db')
const router = express.Router()
const cors = require('cors')
const fileUpload = require('express-fileupload');

//Initializing express app
const app = express()
app.use(express.json({limit: '100mb', extended: true}))
app.use(cors())
app.use(fileUpload())
require('dotenv').config()

//Connecting to db
connectToDb()

// Define routes
app.use('/api/instructors', require('./routes/instructor'))
app.use('/api/courses', require('./routes/course'))
app.use('/api/lectures', require('./routes/lecture'))
app.use('/api/auth', require('./routes/auth'))





app.listen(5000, ()=>{
    console.log("listening on port 5000")
})