const mongoose = require('mongoose')

// Create timestamp schema
const timestampSchema = mongoose.Schema({
    zone: Number,
    time: Number,
}, {
    // This have nothing todo with the timestamps above!
    // This just creates a updated at and created at field!
    timestamps: true
})

module.exports = mongoose.model('Timestamp', timestampSchema)