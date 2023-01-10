const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB  connected to auth service!")
}

module.exports = connectToDb