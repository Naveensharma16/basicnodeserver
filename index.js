require("dotenv").config()
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/gmail',(req,res) =>{
  res.send("naveen@gmail.com")
})

app.get('/login',(req,res) =>{
  res.send("<h1>please enter your data to login</h1>")
})

app.get('/sendjson',(req,res) =>{
     res.json({
      'name':"naveen"
     })
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})