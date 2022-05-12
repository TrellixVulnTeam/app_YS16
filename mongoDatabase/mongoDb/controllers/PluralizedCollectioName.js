const Items = require('../models/PluralizedCollectioName');

exports.all = async (req, res) => {
  try {
    Items.find()
      .sort({ date: -1 })
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}

exports.getOne = async (req, res) => {
  try {
    Items.findById(req.params.id)
      .then(main => res.json(main))
  } catch (err) {
    console.log(err)
  }
}

exports.creates = async = (req, res) => {
  try {
    const newItems = new Items({
      title: req.body.title,
      age: req.body.age,
      list: req.body.list,
      status: req.body.status,
      qty: req.body.qty,
    })

    newItems.save().then(item => res.json(item));
  } catch (err) {
    console.log(err)
  }
}