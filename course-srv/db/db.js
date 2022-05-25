const mongoose = require('mongoose')

const connectToDb = ()=>{
    mongoose.connect('mongodb://localhost:27017/learnia-course-db');
    console.log("MongoDB  connected to course service!")
}

module.exports = connectToDb