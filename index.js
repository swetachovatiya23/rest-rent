require('dotenv').config()

//require needed modules
const express = require('express')

//initialize the app object.
const app = express()

//create a homepage route
app.get('/', (req, res) => {
    res.send('Hello world!')
})

//404 route
app.get('*',(req,res) => {
    res.status(404).send('<h1>404 page</h1>')
})
app.listen(process.env.PORT)
