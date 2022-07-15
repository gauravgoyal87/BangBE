const express = require('express')
// 1. Require body-parser and savie it to the variable parser.

const app = express()

const roleController = require('./controllers/role.js')
const characterController = require('./controllers/character')
const playerController = require('./controllers/player')

// 2. Add the coded needed to make body-parser work within your app.

app.use('/api/role/', roleController)
app.use('/api/character/', characterController)
app.use('/api/player/', playerController)

app.listen(4000, () => console.log('Server running on port 4000!'))
