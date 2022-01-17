const router = require('express').Router()
const places = require('../models/places.js')



// first route(i.e. the get route that will show a list of all places.)

// GET /places
router.get('/', (req, res) => {
  res.render('./places/index', {places})
})


// new route
router.get('/new', (req, res) => {
  res.render('places/new')
})

//post route
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})
module.exports = router