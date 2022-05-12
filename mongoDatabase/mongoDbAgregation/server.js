const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const ItemsRoutes = require('./routes/aggregation');
const TextSearchRoutes = require('./routes/textSearch');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB')
})

app.use('/aggregations', ItemsRoutes);
app.use('/text', TextSearchRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})