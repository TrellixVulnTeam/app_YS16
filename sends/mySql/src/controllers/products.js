const Products = require('../models/products');

exports.findAll = function (req, res) {
  Products.findAll(function (err, product) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', product);
    res.send(product);
  });
};

exports.findById = function (req, res) {
  Products.findById(req.params.id, function (err, employee) {
    if (err)
      res.send(err);
    res.json(employee);
  });
};

exports.create = function (req, res) {
  const new_prod = new Products(req.body);

  //handles null error 
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Products.create(new_prod, function (err, product) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Products added successfully!", data: product });
    });
  }
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Products.update(req.params.id, new Products(req.body), function (err, employee) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Products successfully updated' });
    });
  }
};

exports.delete = function (req, res) {
  Products.delete(req.params.id, function (err, employee) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Products successfully deleted' });
  });
};