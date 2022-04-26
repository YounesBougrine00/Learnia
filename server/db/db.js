const mongoose = require('mongoose')

const connectToDb = ()=>{
    mongoose.connect('mongodb://localhost:27017/Learnia');
    console.log("MongoDB connected !")
}

module.exports = connectToDb