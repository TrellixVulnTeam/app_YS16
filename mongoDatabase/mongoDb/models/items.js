const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MainSchema = new Schema({
  title: { type: String, required: true },
  age: { type: Number, required: true },
  list: { type: Array, required: true },
  status: { type: String, required: false },
  qty: { type: Number },
});

module.exports = mains = mongoose.model('mains', MainSchema);