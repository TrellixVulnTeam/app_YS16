const mongoose = require('mongoose');

const ItemsOps = mongoose.Schema({
  name: String,
  price: Number,
  ItemsOp: [{ type: mongoose.Schema.ObjectId, ref: 'itemsOp' }]
});


module.exports = mongoose.model('itemsOps', ItemsOps);

