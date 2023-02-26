// Middleware: functions that execute during the request/response cycle, so when you make a request

// Overwrites default express errorHandler
// Parses error messages as json instead of html
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    
    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
} 

module.exports = {
    errorHandler,
}