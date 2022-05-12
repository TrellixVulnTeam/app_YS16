var mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reqString = {
  type: String, required: true
}

const arraysSchema = mongoose.Schema({
  email: reqString,
  username: reqString,
  password: reqString,
  messages: Number,          //count number of messages
  nameHistory: [String],      //every time name chage
  testScore: [Number]
})

module.exports = mongoose.model('arraysOp', arraysSchema);