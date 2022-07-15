const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bang', { useNewUrlParser: true })

mongoose.Promise = Promise

module.exports = mongoose
