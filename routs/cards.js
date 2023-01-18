const express = require('express')
const router = express.Router()
const {data} = require('../data/data.json')
const {cards} = data


router.get('/',(req,res)=> {
  const number = Math.floor(Math.random()*cards.length)
  res.redirect(`/cards/${number}?side=question`)
})

router.get('/:id',(req,res)=> {
  const {id} = req.params
  const {side} = req.query
  const template = {}
  template.id = id
  template.question = cards[id].question
  template.hint = cards[id].hint
  if(side === 'answer') {
    template.answer = cards[id].answer
  } else if (side !== 'question') {
    return res.redirect('/error')
  }
  

  res.render('cards',template)
})







module.exports = router