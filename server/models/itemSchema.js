const mongoose = require('mongoose')

const items = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        require: true
    },
    description:{
        type:String
    }
},
{timestamps:true}
)

const item = mongoose.model('Items', items) //mongoose.model() takes two arguments : name of the collections and the schema to use for the collection

module.exports = item