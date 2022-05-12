const Order = require('../models/orders');

exports.findAll = function (req, res) {
  Order.findAll(function (err, product) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', product);
    res.send(product);
  });
};

exports.findById = function (req, res) {
  Order.findById(req.params.id, function (err, employee) {
    if (err)
      res.send(err);
    res.json(employee);
  });
};

exports.create = function (req, res) {
  const new_prod = new Order(req.body);

  //handles null error 
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Order.create(new_prod, function (err, product) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Order added successfully!", data: product });
    });
  }
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Order.update(req.params.id, new Order(req.body), function (err, employee) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Order successfully updated' });
    });
  }
};

exports.delete = function (req, res) {
  Order.delete(req.params.id, function (err, employee) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Order successfully deleted' });
  });
};