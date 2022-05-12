var mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reqString = {
  type: String, required: true
}

const timeSchema = mongoose.Schema({
  email: reqString,
  username: reqString,
  password: reqString,
  messages: {
    type: Number, default: 5, min: 0, max: 10
  },
  nameHistory: [String]       //every time name chage
}, {
  timeStamps: true          //created and updated time automatically manage
})

module.exports = mongoose.model('timeStamps', timeSchema);