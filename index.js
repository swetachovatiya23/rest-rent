require('dotenv').config()

//require needed modules
const express = require('express')

//initialize the app object.
const app = express()

//the route that define the view engine.
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//code to import router created in places.js
app.use('/places',require('./controllers/places'))

//create a homepage route
app.get('/', (req, res) => {
    res.render('home')
})

//404 route
app.get('*',(req,res) => {
    res.status(404).send('<h1>404 page</h1>')
})
app.listen(process.env.PORT)
