const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const model = require('./database/todosItems.js')

const app = express()
app.use(cors())
const port = 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect('mongodb://localhost:27017/mern-todo',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(()=>console.log('database is successfully connected')).catch(console.error)


app.post('/todos/new', async (req, res)=>{
  try{
  const todo = await new model({
    text:"Chaudhary"
  }).save()
  res.send(todo)
  res.json(todo)
  }catch(error){
    res.send(error)
  }
})
app.get('/todo/:id',async (req,res)=>{
  const todo = await model.find()
  res.json(todo)
})



app.get('/message', (req, res) => {
  res.json({
    message: "Hello from server!",
    name:"Nishant",
    lastname:"Chaudhary"
  });
})


