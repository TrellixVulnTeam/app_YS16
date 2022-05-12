var dbConn = require('../../config/db.config');

var Order = function (orders) {
  this.items = orders.items;
  this.price = orders.price;
  this.qty = orders.qty;
  this.created_at = orders.created_at;
  this.updated_at = orders.updated_at;
};

//join 2 tables
Order.findAll = function (result) {
  dbConn.query("select orders.id, orders.items from Orders JOIN products on products.id = Orders.id", function (err, res) {
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

//SELECT DISTINCT
Order.findAll = function (result) {
  dbConn.query("Select DISTINCT items from orders", function (err, res) {
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

//WHERE Clause
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items='One'", function (err, res) {
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

//AND
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items='One' AND price='100'", function (err, res) {
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

//OR
Order.findAll = function (result) {
  dbConn.query("Select * DISTINCT items from orders WHERE items='One' OR price='100'", function (err, res) {
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

//NOT
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE NOT items='One'", function (err, res) {
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

//ORDER BY Keyword
Order.findAll = function (result) {
  dbConn.query("Select * from orders ORDER BY items", function (err, res) {
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

//ORDER BY DESC Keyword
Order.findAll = function (result) {
  dbConn.query("Select * from orders ORDER BY items ASC, price DESC", function (err, res) {
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

//IS NULL
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items IS NULL", function (err, res) {
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

//IS NOT NULL
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items IS NOT NULL", function (err, res) {
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

//LIMIT
Order.findAll = function (result) {
  dbConn.query("Select * from orders LIMIT 3", function (err, res) {
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

//MIN() 
Order.findAll = function (result) {
  dbConn.query("Select MIN(price) AS SmallestPrice from orders", function (err, res) {
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

//MAX()
Order.findAll = function (result) {
  dbConn.query("Select MAX(price) AS LargestPrice from orders", function (err, res) {
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

//COUNT()
Order.findAll = function (result) {
  dbConn.query("Select COUNT(items) from orders", function (err, res) {
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

//AVG()
Order.findAll = function (result) {
  dbConn.query("Select AVG(items) from orders", function (err, res) {
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

//SUM()
Order.findAll = function (result) {
  dbConn.query("Select SUM(qty) from orders", function (err, res) {
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

//LIKE
//The following SQL statement selects all customers with a CustomerName starting with "a"
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items LIKE 'a%'", function (err, res) {
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

//The following SQL statement selects all customers with a CustomerName ending with "a"
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items LIKE '%a'", function (err, res) {
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

//The following SQL statement selects all customers with a CustomerName that have "or" in any position
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items LIKE '%On%'", function (err, res) {
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

//The following SQL statement selects all customers with a CustomerName that have "r" in the second position
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items LIKE '_r%'", function (err, res) {
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

//The following SQL statement selects all customers with a CustomerName that starts with "a" and are at least 3 characters in length:
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items LIKE 'a__%'", function (err, res) {
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

//The following SQL statement selects all customers with a ContactName that starts with "a" and ends with "o"
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items LIKE 'a%o'", function (err, res) {
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

//The following SQL statement selects all customers with a CustomerName that does NOT start with "a"
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items LIKE 'a%'", function (err, res) {
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


//Wildcards: A wildcard character is used to substitute one or more characters in a string
//Wildcard characters are used with the LIKE operator. The LIKE operator is used in a WHERE clause to search for a specified pattern in a column
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items LIKE '%se%'", function (err, res) {
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

//The following SQL statement selects all customers with a City starting with any character, followed by "ondon"
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items LIKE '_ondon'", function (err, res) {
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

//The following SQL statement selects all customers with a City starting with "L", followed by any character, followed by "n", followed by any character, followed by "on"
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items LIKE 'L_n_on'", function (err, res) {
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

//he following SQL statement selects all customers with a City starting with "b", "s", or "p"
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items LIKE '[bsp]%'", function (err, res) {
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

//selects all customers with a City starting with "a", "b", or "c"
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items LIKE '[a-c]%'", function (err, res) {
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

//select all customers with a City NOT starting with "b", "s", or "p"
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items NOT LIKE '[bsp]%'", function (err, res) {
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

//IN operator allows you to specify multiple values in a WHERE clause
//IN operator is a shorthand for multiple OR conditions.
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items IN ('One', 'Two', 'Three')", function (err, res) {
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

//BETWEEN operator selects values within a given range. The values can be numbers, text, or dates.
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE price BETWEEN 10 AND 20", function (err, res) {
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

//NOT BETWEEN
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE price NOT BETWEEN 10 AND 20", function (err, res) {
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

//BETWEEN with IN
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE price BETWEEN 10 AND 20 AND ID NOT IN (1,2,3)", function (err, res) {
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

//BETWEEN Text
Order.findAll = function (result) {
  dbConn.query("Select * from orders WHERE items BETWEEN 'Seconds' AND 'Three' ORDER BY items", function (err, res) {
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

//INNER JOIN
/*
The INNER JOIN keyword selects all rows from both tables as long as there is a match between the 
columns. If there are records in the "Orders" table that do not have matches in "Customers", 
these orders will not be shown!
*/
Order.findAll = function (result) {
  dbConn.query("select orders.id, products.items from Orders INNER JOIN products on orders.id = products.id", function (err, res) {
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

//LEFT JOIN
//returns all records from the left table (table1), and the matching records from the right table (table2).
Order.findAll = function (result) {
  dbConn.query("select orders.id, products.items from Orders LEFT JOIN products on orders.id = products.id", function (err, res) {
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

//RIGHT JOIN
//returns all records from the right table (table2), and the matching records from the left table (table1). 
Order.findAll = function (result) {
  dbConn.query("select orders.id, products.items from Orders RIGHT JOIN products on orders.id = products.id", function (err, res) {
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