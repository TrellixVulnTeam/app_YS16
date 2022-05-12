const Items = require('../models/renameDoc.js');

exports.all = async (req, res) => {
  try {
    Items.find()
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}

exports.updates = async = (req, res) => {
  try {
    const newItems = Items.updateMany({}, {
      // $rename: { password: req.body.password },   // rename password to pass
      $unst: { pass: '' },                           // remove field
    })
      .then(main => res.json(main));

    newItems.save().then(item => res.json(item));


  } catch (err) {
    console.log(err)
  }
}
