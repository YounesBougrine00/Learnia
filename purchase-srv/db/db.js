const mongoose = require('mongoose')

const connectToDb = ()=>{
    mongoose.connect('mongodb://localhost:27017/learnia-purchase-db');
    console.log("MongoDB  connected to purchase service!")
}

module.exports = connectToDb