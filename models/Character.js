const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Character = new Schema({
  charName: String,
  charNum: Number,
  charImg: String
 
})

module.exports = mongoose.model('Character', Character)
