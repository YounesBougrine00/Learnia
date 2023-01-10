const mongoose = require('mongoose')

const connectToDb = () => {
    mongoose.connect(process.env.MONGO_URI).catch((err) => {
        console.log(err.message);
    });
    console.log("MongoDB  connected to purchase service!")
}

module.exports = connectToDb