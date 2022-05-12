const Item = require('../models/itemsOp');

//sort the result in ascending or descending order
exports.allsorts = async (req, res, next) => {
  try {
    Item.find()
      .sort({ price: 1 })
      .then(items => res.json(items));
  } catch (err) {
    console.log(err)
  }
};

exports.creates = async (req, res, next) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      price: req.body.price
    });

    newItem.save().then(item => res.json(item));
  } catch (err) {
    console.log(err)
  }
};

//Limit
exports.limits = async (req, res, next) => {
  try {
    Item.find()
      .limit(2)
      .then(items => res.json(items));
  } catch (err) {
    console.log(err)
  }
};

//filter Regx
exports.filtersRegx = async (req, res, next) => {
  var query = { name: /^C/ };
  try {
    Item.find(query)
      .then(items => res.json(items));
  } catch (err) {
    console.log(err)
  }
};

//filter 
exports.filters = async (req, res, next) => {
  var query = { name: "Mobile" };
  try {
    Item.find(query)
      .then(items => res.json(items));
  } catch (err) {
    console.log(err)
  }
};

//left join
exports.joins = async (req, res, next) => {
  var query = { name: "Mobile" };
  try {
    Item.find(query)
      .then(items => res.json(items));
  } catch (err) {
    console.log(err)
  }
};

