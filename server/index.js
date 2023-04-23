const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const model = require('./database/todosItems.js')
const mysql = require('mysql')


//mysql connection
// require(  './database/db.js')

const app = express()
app.use(cors())
const port = 8000

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//router import
const itemsRoute = require('./Router/itemRoute.js') 
//routes

app.use('/api/item',itemsRoute)





//create database
app.get('/createdb',(req,res)=>{
  const sql = 'CREATE DATABASE todoapp'
  con.query(sql,(err,result)=>{
    if(err){
      throw err
    }
    console.log(result)
    res.send("database created")
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect('mongodb://localhost:27017/mern-todo',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(()=>console.log('database is successfully connected')).catch(console.error)



