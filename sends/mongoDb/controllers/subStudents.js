var Class = require('../models/class');


exports.all = async (req, res) => {
  try {
    Class.find({}).populate('students').exec((err, docs) => {
      //populate fields which want to pass
      if (err) throw (err);
      res.json(docs)
    })
  } catch (err) {
    console.log(err)
  }
};

exports.findNested = async (req, res) => {
  try {
    Class.find({ name: 'Three', age: 20 })
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
};

exports.specifyNested = async (req, res) => {
  try {
    Class.find({ 'students.age': { $lt: 30 } })
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
};

