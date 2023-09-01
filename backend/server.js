const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 3003

connectDB()

const app = express()

// MIDDLEWARE
// THIS MIDDLEWARE IS USED TO GET DATA
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// use goalRoutes to handle any endpoints that end with api
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
  
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})