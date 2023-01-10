const express = require('express')
const json = require('body-parser')
const router = express.Router()
const connectToDb = require('../db/db')
const cors = require('cors')
const { connectQueues } = require('../queue/queue')


const app = express();
app.use(express.json());
app.use(cors())

//Connecting to db
connectToDb()

//Connecting to RabbitMQ
connectQueues(["purchase:user.created"]);

app.use('/api/auth', require('./routes/index'))


app.listen(3000, () => {
    console.log("Auth service Listening !");
});