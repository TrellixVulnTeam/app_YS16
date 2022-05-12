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
  nameHistory: [String]       //every time name chage
}, {
  timeStamps: true          //created and updated time automatically manage
})

module.exports = mongoose.model('plurized', plurizedSchema);
/*
collection name=plurized
collection name is default create plural, if want singular collection name than follow as
module.exports = mongoose.model('plurized', plurizedSchema,'plurized');
*/