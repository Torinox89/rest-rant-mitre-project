const router = require('express').Router()
const places = require('../models/places.js')

router.get('/new', (req, res) => {
  res.render('places/new')
})


// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/chris-liverani-restaurant-two.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'images/jay-restaurant-one.jpg'
  }]
  
  res.render('places/index', { places })

})

router.post('/', (req, res) => {
  console.log(req.body)
  res.redirect('/places')
})

  module.exports = router
