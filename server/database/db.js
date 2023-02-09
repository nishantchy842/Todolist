import { error } from "console";
import mongoose from "mongoose";
import { connected, disconnect } from "process";

const Connection = () =>{

    const mongo_url = 'mongodb+srv://nishant:12345@merntodo.cb3mmyq.mongodb.net/?retryWrites=true&w=majority'
    mongoose.connect(mongo_url,{useNewUrlParser:true})

    mongoose.connection.on('connected',()=>{
        console.log("database is successfully connected")
    })
    mongoose.connection.on('disconnected',()=>{
        console.log("database is not connected")
    })
    mongoose.connection.on('error',()=>{
        console.log("database has something error",error.message)
    })
}
export default Connection