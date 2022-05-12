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

exports.updates = async = (req, res) => {
  try {
    Items.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      age: req.body.age,
      list: req.body.list,
      status: req.body.status,
      qty: req.body.qty,
      size: {
        h: req.body.h,
        w: req.body.w,
        uom: req.body.uom,
      }
    }, { new: true }).then(data => { res.json(data) })
  } catch (err) {
    res.status(404).json({ success: false })
  }
}

exports.remove = async (req, res) => {
  try {
    Items.findByIdAndRemove(req.params.id)
      .then(main => main.remove().then(() => res.json({ success: true })))
  } catch (err) {
    res.status(404).json({ success: false })
  }
}