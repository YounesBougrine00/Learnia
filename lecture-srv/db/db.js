const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB  connected to lecture service!")
}

module.exports = connectToDb