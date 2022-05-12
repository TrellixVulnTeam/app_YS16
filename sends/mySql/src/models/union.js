var dbConn = require('../../config/db.config');

var Order = function (orders) {
  this.items = orders.items;
  this.price = orders.price;
  this.qty = orders.qty;
  this.created_at = orders.created_at;
  this.updated_at = orders.updated_at;
};

//UNION operator is used to combine the result-set of two or more SELECT statements.
Order.findAll = function (result) {
  dbConn.query("select items from Orders UNION select items from products ORDER BY items", function (err, res) {
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

//GROUP BY
Order.findAll = function (result) {
  dbConn.query("select COUNT(items), qty from Orders GROUP BY items ORDER BY COUNT(qty) DESC;", function (err, res) {
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

//HAVING
//HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions
Order.findAll = function (result) {
  dbConn.query("select COUNT(items), qty from Orders GROUP BY items HAVING COUNT(qty) > 1;", function (err, res) {
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

//EXISTS operator is used to test for the existence of any record in a subquery
Order.findAll = function (result) {
  dbConn.query("select items from Orders WHERE EXISTS (SELECT qty FROM products WHERE products.id = products.id AND price < 20);", function (err, res) {
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

//ANY
Order.findAll = function (result) {
  dbConn.query("select items from Orders WHERE items = ANY (SELECT qty FROM products WHERE price < 20);", function (err, res) {
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

//ALL
Order.findAll = function (result) {
  dbConn.query("select items from Orders WHERE items = ALL (SELECT qty FROM products WHERE price < 20);", function (err, res) {
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


module.exports = Order;