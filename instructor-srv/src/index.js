const express = require('express')
const json = require('body-parser')
const connectToDb = require('../db/db')
const {connectQueues} = require('../queue/queue')
const {addCourse} = require('../queue/listener/methods')
const cors = require('cors')
require('dotenv').config()

const app = express();
app.use(express.json({limit: '100mb', extended: true}))
app.use(json());
app.use(cors())

//Connecting to db
connectToDb()


//Connect and get data from queues
connectQueues(["instructor:course.created"]).then(() => {
  channel.consume("instructor:course.created", (data) => {
      const {courseId,title,instructor,thumbnail}= JSON.parse(data.content);
      
     addCourse({courseId,title,instructor,thumbnail })
      
      channel.ack(data);
  });
});;

app.use('/api/instructor', require('./routes/index'))


app.listen(5002, () => {
  console.log("Listening on port 5002!");
});
 