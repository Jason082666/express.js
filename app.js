const express = require('express')
const app = express()
app.set('view engine','pug')
app.get('/',(req,res)=>{
  res.render('index')
})

app.listen(3000,()=>{
  console.log('this application is running at localhost:3000')
})
