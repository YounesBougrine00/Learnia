const express = require('express')
const json = require('body-parser')
const router = express.Router()
const connectToDb = require('../db/db')
const cors = require('cors')
require('dotenv').config()

const app = express();
app.use(json());
app.use(cors())

//Connecting to db
connectToDb()

app.use('/api/instructor', require('./routes/index'))


app.listen(5002, () => {
  console.log("Listening on port 5002!");
});
 