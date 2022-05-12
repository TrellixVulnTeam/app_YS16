const JoinOp = require('../models/joinOp');

exports.findAll = function (req, res) {
  JoinOp.findAll(function (err, product) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', product);
    res.send(product);
  });
};

exports.findById = function (req, res) {
  JoinOp.findById(req.params.id, function (err, employee) {
    if (err)
      res.send(err);
    res.json(employee);
  });
};

