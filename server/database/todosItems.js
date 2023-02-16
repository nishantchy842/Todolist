const mongoose =  require('mongoose')
const todoItemschema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    timeStamp:{
        type:String,
        default:Date.now()
    }
})
const model = mongoose.model('model', todoItemschema);
module.exports = model