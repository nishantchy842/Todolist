import mongoose from "mongoose";

const Connection = () =>{

    const mongo_url = 'mongodb+srv://nishant:12345@merntodo.cb3mmyq.mongodb.net/?retryWrites=true&w=majority'
    mongoose.connect(mongo_url,{useNewUrlParse:true})
}