const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://shobhashelke6:dmPHYrqhwMKLGk9E@cluster0.auycxeq.mongodb.net/')
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db