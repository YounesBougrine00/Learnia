const express = require('express')
const json = require('body-parser')
const connectToDb = require('../db/db')
const cors = require('cors')
const {connectQueues} = require('../queue/queue')
const {addUser,addCourse} = require('../queue/listener/methods')

const app = express();
app.use(json());
app.use(cors())

//Connecting to db
connectToDb()

//Connect and get data from queues
connectQueues(["purchase:user.created","purchase:course.purchased"]).then(() => {

 
  channel.consume("purchase:user.created", (data) => {
      const {userId}= JSON.parse(data.content);
      
     addUser({userId})
      
      channel.ack(data);
  });
  channel.consume("purchase:course.purchased", (data) => {
    const {userId, courseId, title, thumbnail, purchaseDate}= JSON.parse(data.content);
    
    addCourse({userId, courseId, title, thumbnail, purchaseDate})
    
    channel.ack(data);
});

});;

app.use('/api/purchase', require('./routes/index'))


app.listen(5005, () => {
  console.log("Listening on port 5005!");
});
 