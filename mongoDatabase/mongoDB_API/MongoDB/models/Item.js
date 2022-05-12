const mongoose = require('mongoose');

const ItemsOp = mongoose.Schema({
  name: String,
  date: new Date(),
  ItemsOps: [{ type: mongoose.Schema.ObjectId, ref: 'itemsOps' }]
});


module.exports = mongoose.model('itemsOp', ItemsOp);

