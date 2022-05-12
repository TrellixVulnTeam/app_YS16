var mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reqString = {
  type: String, required: true
}

const messageSchema = mongoose.Schema({
  userId: reqString,
  text: reqString
})

const userSchema = mongoose.Schema({
  email: reqString,
  username: reqString,
  password: reqString,
  messages: [messageSchema],
  nameHistory: [String]
}, {
  timeStamps: true
})

module.exports = mongoose.model('nested', userSchema);
