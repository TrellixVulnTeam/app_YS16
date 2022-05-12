const mongoose = require('mongoose');

const Items = mongoose.Schema({
  name:String,
  price:String
});


module.exports = mongoose.model('items', Items);

