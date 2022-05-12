var dbConn = require('../../config/db.config');

var Products = function (products) {
  this.items = products.items;
  this.price = products.price;
  this.qty = products.qty;
  this.created_at = products.created_at;
  this.updated_at = products.updated_at;
};

Products.create = function (newProd, result) {
  dbConn.query("INSERT INTO products set ?", newProd, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Products.findAll = function (result) {
  dbConn.query("Select * from products", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('products : ', res);
      result(null, res);
    }
  });
};

Products.findById = function (id, result) {
  dbConn.query("Select * from products where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};

Products.update = function (id, products, result) {
  dbConn.query("UPDATE products SET items=?,price=?,qty=?,created_at=?,updated_at=? WHERE id = ?", [products.items, products.price, products.qty, products.created_at, products.updated_at, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Products.delete = function (id, result) {
  dbConn.query("DELETE FROM products WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};

module.exports = Products;