const express = require('express')
const router  = express.Router()
const { getTimestamp, setTimestamp, updateTimestamp, deleteTimestamp } = require('../controllers/timestampController')

// Each request type to Timestamps, will have a seperate handler
// Called from the controller

// Method/function chaining can result in shorter code: https://x-team.com/blog/javascript-method-chaining/ 
// Eq to: router.route('/').get(getTimestamp).post(setTimestamp)
router.get('/', getTimestamp)
router.post('/', setTimestamp)

// Eq to: router.route('/:id').put(putTimestamp).post(delteTimestamp)
router.put('/:id', updateTimestamp)
router.delete('/:id', deleteTimestamp)

module.exports = router