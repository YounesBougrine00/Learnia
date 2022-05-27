const express = require('express')
const json = require('body-parser')
const connectToDb = require('../db/db')
const cors = require('cors')
const fileUpload = require('express-fileupload');



const app = express();
app.use(json());
app.use(cors())
app.use(fileUpload())


//Connecting to db
connectToDb()


//Connect and get data from queues
/*connectQueues(["lecture:course.created"]).then(() => {
  channel.consume("lecture:course.created", (data) => {
      const {courseId,title,instructor,thumbnail}= JSON.parse(data.content);
      
     addCourse({courseId,title,instructor,thumbnail })
      
      channel.ack(data);
  });
});;*/

app.use('/api/lecture', require('./routes/index'))


app.listen(5004, () => {
  console.log("Listening on port 5004!");
});
 