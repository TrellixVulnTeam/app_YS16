const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});


const employeeRoutes = require('./src/routes/employee')
const productsRoutes = require('./src/routes/products')
const ordersRoutes = require('./src/routes/orders')

const joinRoutes = require('./src/routes/joinOp')
const unionRoutes = require('./src/routes/union')

// using as middleware
app.use('/api/v1/employees', employeeRoutes)
app.use('/api/v1/products', productsRoutes)
app.use('/api/v1/orders', ordersRoutes)

app.use('/api/v1/joinOp', joinRoutes)
app.use('/api/v1/union', unionRoutes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});