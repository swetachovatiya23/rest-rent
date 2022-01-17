const router = require('express').Router()


// first route(i.e. the get route that will show a list of all places.)

// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/rr-thai-lunch-pic1.jpeg'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/rr-coffee-pic1.jpeg'
  }]
  res.render('./places/index', {places})
})
module.exports = router