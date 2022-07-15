const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Role = new Schema({
  roleName: String,
  roleNum: Number,
  roleImg: String
 
})


module.exports = mongoose.model('Role', Role)
