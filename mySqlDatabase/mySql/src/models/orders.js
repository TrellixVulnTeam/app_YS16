var dbConn = require('../../config/db.config');

var Order = function (orders) {
  this.items = orders.items;
  this.price = orders.price;
  this.qty = orders.qty;
  this.created_at = orders.created_at;
  this.updated_at = orders.updated_at;
};

Order.create = function (newProd, result) {
  dbConn.query("INSERT INTO orders set ?", newProd, function (err, res) {
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

Order.findAll = function (result) {
  dbConn.query("Select * from orders", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('orders : ', res);
      result(null, res);
    }
  });
};

Order.findById = function (id, result) {
  dbConn.query("Select * from orders where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};

Order.update = function (id, Order, result) {
  dbConn.query("UPDATE orders SET items=?,price=?,qty=?,created_at=?,updated_at=? WHERE id = ?", [Order.items, Order.price, Order.qty, Order.created_at, Order.updated_at, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Order.delete = function (id, result) {
  dbConn.query("DELETE FROM orders WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};

module.exports = Order;