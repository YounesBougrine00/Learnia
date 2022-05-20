const express = require('express')
const json = require('body-parser')
const router = express.Router()
const connectToDb = require('../db/db')
const cors = require('cors')

const app = express();
app.use(json());
app.use(cors())

//Connecting to db
connectToDb()

app.use('/api/auth', require('./routes/index'))


app.listen(5001, () => {
  console.log("Listening on port 5001!");
});
 