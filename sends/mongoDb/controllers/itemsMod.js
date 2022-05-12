const Items = require('../models/items');

exports.all = async (req, res) => {
  try {
    Items.find()
      .sort({ date: -1 })
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}

exports.or = async (req, res) => {
  try {
    Items.find({ status: { $in: ['A', 'D'] } })
      .sort({ date: -1 })
      .limit(4)
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}

exports.orCon = async (req, res) => {
  try {
    Items.find({ $or: [{ status: 'A' }, { qty: { $lt: 30 } }] })
      .sort({ date: -1 })
      .limit(4)
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}

exports.and = async (req, res) => {
  try {
    Items.find({ status: 'D', age: { $lt: 40 } })
      .sort({ date: -1 })
      .limit(4)
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}

exports.orAnd = async (req, res) => {
  try {
    Items.find({
      status: 'D',
      $or: [{ qty: { $lt: 30 } }, { title: 'Niketh' }]
    })
      .sort({ date: -1 })
      .limit(4)
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}