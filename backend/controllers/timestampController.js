const asyncHandler = require('express-async-handler')

const Timestamp = require('../models/timestampModel')

// Instead of using try catch, and using 'the errorhandler', we are using the library express async handler

// @desc ...
// @route GET /api/Timestamps
// @access Private
const getTimestamp = asyncHandler(async (req, res) => {
    // Get from DB
    const timestamps = await Timestamp.find()
    
    
    // Status code set to 200 - success
    // Answer with json object
    res.status(200).json(timestamps)
})

// TODO, do the same with the rest...

// @desc ...
// @route GET /api/Timestamps
// @access Private
const setTimestamp = asyncHandler(async (req, res) => {
    // Status code set to 200 - success
    // Answer w ith json object
    if (!req.body.zone && !req.body.time) {
        // bad request
        res.status(400)

        // Express build in error handler
        throw new Error('Please add a text field')
    }

    const timestamp = await Timestamp.create({
        zone: parseInt(req.body.zone),
        time: parseInt(req.body.time),
    })
    console.log(req.body)
    res.status(200).json(timestamp) 
})

// @desc ...
// @route GET /api/Timestamps
// @access Private
const updateTimestamp = asyncHandler(async (req, res) => {
    // Find timestamp in database
    const timestamp = await Timestamp.findById(req.params.id)

    if (!timestamp) {
        res.status(400)
        throw new Error("id does not match")
    }

    const updatedTimestamp = await Timestamp.findByIdAndUpdate(req.params.id, 
        {
            zone: parseInt(req.body.zone),
            time: parseInt(req.body.time),
        }, {
            new: true, // creates it if it doens't exist, but will never happen since checked for above
        })
    res.status(200).json(updatedTimestamp) 
})

// @desc ...
// @route GET /api/Timestamps
// @access Private
const deleteTimestamp = asyncHandler(async (req, res) => {
    // Find timestamp in database
    const timestamp = await Timestamp.findById(req.params.id)

    if (!timestamp) {
        res.status(400)
        throw new Error("id does not match")
    }

    const deletedTimestamp = await Timestamp.findByIdAndDelete(req.params.id)

    // Status code set to 200 - success
    // Answer with json object
    res.status(200).json(deletedTimestamp) 
})

module.exports = {
    getTimestamp,
    setTimestamp,
    updateTimestamp,
    deleteTimestamp
}