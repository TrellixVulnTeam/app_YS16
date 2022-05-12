var mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reqString = {
  type: String, required: true
}

const plurizedSchema = mongoose.Schema({
  email: reqString,
  username: reqString,
  password: reqString,
  messages: {
    type: Number, default: 5, min: 0, max: 10
  },
  nameHistory: [String]
}, {
  timeStamps: true
})

module.exports = mongoose.model('manyQry', plurizedSchema);
