const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const name = req.cookies.username
  if (name) {
    res.render('index', {
      name
    })
  } else {
    res.redirect('/hello')
  }
})




module.exports = router