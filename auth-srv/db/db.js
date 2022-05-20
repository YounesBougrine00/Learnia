const mongoose = require('mongoose')

const connectToDb = ()=>{
    mongoose.connect('mongodb://localhost:27017/learnia-auth-db');
    console.log("MongoDB  connected to auth service!")
}

module.exports = connectToDb