require('dotenv').config()
const express = require('express')

// Connecting Routes (API) to this file 
const workoutRoutes = require('./Routes/workouts')

// express app
const app = express()

// Middleware
// Handle a POST or PATCH request we can't access
// the data from 'req' object we use middleware express.json()
app.use(express.json())

// This is the global middleware express 
// It runs for every request
// 'next' is used for passing to other middleware to move on further
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// This is also a middleware 
// Want to react to the request 
// req : request, res : response
// '/'  for local host
//app.get('/',(req,res) => {
//    res.json({mssg: 'Welcome to the app'})
//})

// Using all the API call
app.use('/api/workouts', workoutRoutes)

// Listen for requests (port) -- Listen to a certain port number
//app.listen(4000,() =>{
//    console.log('listening on port 4000')
//})
app.listen(process.env.PORT,() =>{
    console.log('listening on port: ', process.env.PORT)
})
