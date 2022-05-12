const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

const employeeRoutes = require('./routes/employee')

// using as middleware
app.use('/api/v1/employees', employeeRoutes)


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});