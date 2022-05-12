var mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reqString = {
  type: String, required: true
}

const userSchema = mongoose.Schema({
  email: reqString,
  username: reqString,
  password: reqString,
  messages: Number,          //count number of messages
})

module.exports = mongoose.model('users', userSchema);