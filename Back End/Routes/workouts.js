const express  = require('express')

const router = express.Router()


// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'Get all workouts'})
})

// GET single workouts
router.get('/:id', (res,req) => {
    res.json({mssg: 'Get a single workout'})
})

// POST a new workout
router.post('/', (res,req) => {
    res.json({mssg: 'Post a new workout'})
})

// DELETE a workout
router.delete('/:id', (res,req) => {
    res.json({mssg: 'Delete a single workout'})
})

// UPDATE a workout
router.patch('/:id', (res,req) => {
    res.json({mssg: 'Update a workout'})
})

module.exports = router