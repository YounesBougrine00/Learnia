const mongoose = require('mongoose')

const connectToDb = ()=>{
    mongoose.connect('mongodb://localhost:27017/learnia-lecture-db');
    console.log("MongoDB  connected to lecture service!")
}

module.exports = connectToDb