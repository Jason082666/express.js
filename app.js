const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mainRouts = require('./routs')
const cardRouts = require('./routs/cards')
const helloRouts = require('./routs/hello')

app.use(cookieParser())
app.use(bodyParser.urlencoded({extend: false}))
app.set('view engine', 'pug')


app.use(mainRouts)
app.use('/cards', cardRouts)
app.use('/hello', helloRouts)
app.use('/static',express.static('public'))


app.post('/ready', (req, res) => {
  res.redirect('/cards')
})


app.post('/goodbye', (req, res) => {
  res.clearCookie('username')
  res.redirect('/hello')
})

app.get('/error',(req, res, next) => {
  const err = new Error('Not find!')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.error = err
  res.status(err.status)
  res.render('error')
})

app.listen(3000, () => {
  console.log('this application is running at localhost:3000')
})