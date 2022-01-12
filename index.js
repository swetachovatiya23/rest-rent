//require needed modules
const express = require('express')

//initialize the app object.
const app = express()

//create a homepage route
app.get('/', (req, res) => {
    res.send('Hello world!')
})
//
app.listen(3000)
