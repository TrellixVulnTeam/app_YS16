const union = require('../models/union');

exports.findAll = function (req, res) {
  union.findAll(function (err, product) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', product);
    res.send(product);
  });
};

exports.findById = function (req, res) {
  union.findById(req.params.id, function (err, employee) {
    if (err)
      res.send(err);
    res.json(employee);
  });
};