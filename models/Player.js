const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Player = new Schema({
  playerName: String,
  playerNum: Number
 
})

module.exports = mongoose.model('Player', Player)
