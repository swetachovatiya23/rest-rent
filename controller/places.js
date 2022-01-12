const router = require('express').Router()

// first route(i.e. the get route that will show a list of all places.)
router.get('/',(req,res) => { 
    res.send('GET/places')
})

module.exports = router