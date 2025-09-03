const express  = require('express')

const router = express.Router()


// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'Get all workouts'})
})

// GET single workouts
router.get()
module.exports = router