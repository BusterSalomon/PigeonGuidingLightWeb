const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()
const app = express()

// Middleware to use body data
// https://aws.amazon.com/what-is/middleware/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// When '/api/Timestamp' is hit, it looks into './routes/TimestampRoutes'
// to find the handler
app.use('/api/timestamps', require('./routes/timestampRoutes'))

app.use(errorHandler)


app.listen(port, () => console.log(`Server started on port ${port}`))