const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB')
})

app.use('/', require('./routes/search'));

app.use((req, res, next) => {
  res.status(404).json({
    error: 'bad request'
  })
})

const port = process.env.PORT

app.listen(port, () => {
  console.log('Server is running on port', port)
})