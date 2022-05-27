const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
    
    userId:{
        type: String,
        required: true
    },

    courses:{
        type:[Object]
    }
  
    
})

module.exports = Purchase = mongoose.model('purchase',purchaseSchema) 