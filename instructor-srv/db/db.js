const mongoose = require('mongoose')

const connectToDb = ()=>{
    mongoose.connect('mongodb://localhost:27017/learnia-instructor-db');
    console.log("MongoDB  connected to instructor service!")
}

module.exports = connectToDb