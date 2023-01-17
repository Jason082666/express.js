const express = require('express')
const router = express.Router()
const {data} = require('../data/data.json')
const {cards} = data


router.get('/',(req,res)=> {
  const number = Math.floor(Math.random()*cards.length)
  const question = cards[number].question
  const hint = cards[number].hint

  res.render('cards',{question,hint})
})







module.exports = router