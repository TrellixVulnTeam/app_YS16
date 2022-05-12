const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();

// Bodyparser Middleware
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB')
})

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

const port = process.env.PORT

app.listen(port, () => {
  console.log('Server is running on port', port)
})