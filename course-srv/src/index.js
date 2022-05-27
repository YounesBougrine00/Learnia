const express = require('express')
const json = require('body-parser')
const router = express.Router()
const connectToDb = require('../db/db')
const {connectQueues} = require('../queue/queue')
const cors = require('cors')
require('dotenv').config()


const app = express();
app.use(express.json({limit: '500mb', extended: true}))
app.use(json());
app.use(cors())


//Connecting to db
connectToDb()

//Connecting to RabbitMQ
connectQueues(["instructor:course.created","lecture:course.created","purchase:course.purchased"]);


app.use('/api/course', require('./routes/index'))


app.listen(5003, () => {
  console.log("Listening on port 5003!");
});
 