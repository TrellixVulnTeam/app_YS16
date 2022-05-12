const Item = require('../Item');


exports.all = async (req, res, next) => {
  try {
    Item.find()
      .populate({
        path: 'itemsOps',
        populate: { path: 'itemsOps' }
      })
      .sort({ date: -1 })
      .then(items => res.json(items));
  } catch (err) {
    console.log(err)
  }
};

exports.getOne = async (req, res, next) => {
  try {
    Item.findById(req.params.id)
      .sort({ date: -1 })
      .then(items => res.json(items));
  } catch (err) {
    console.log(err)
  }
};

exports.creates = async (req, res, next) => {
  try {
    const newItem = new Item({
      name: req.body.name
    });

    newItem.save().then(item => res.json(item));
  } catch (err) {
    console.log(err)
  }
};

exports.update = async (req, res, next) => {
  try {
    Item.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    }, { new: true }).then(data => { res.send(data) })
  } catch (err) {
    console.log(err)
  }
};

exports.remove = async (req, res, next) => {
  try {
    Item.findById(req.params.id)
      .then(item => item.remove().then(() => res.json({ success: true })))
  } catch (err) {
    res.status(404).json({ success: false })
  }
};

