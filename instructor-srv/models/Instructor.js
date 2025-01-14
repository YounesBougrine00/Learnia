const mongoose = require('mongoose')

const instructorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    image:{
        type:String,
        required: true
    },

    about:{
        type: String,
        required: true
    },

    courses:{
        type:[Object],
   
    },
    
})

module.exports = Instructor = mongoose.model('instructor',instructorSchema) 