const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// MIDDLEWARE
// use goalRoutes to handle any endpoints that end with api
app.use('/api/goals', require('./routes/goalRoutes'))
// USER RESOURCE



app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})