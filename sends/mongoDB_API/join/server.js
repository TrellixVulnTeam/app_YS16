const express = require('express');
const mongoose = require('mongoose');
const app = express();

const classRoutes = require('./routes/classRoutes');
const studetsRoutes = require('./routes/studentsRoutes');


const PORT = process.env.PORT || 5000;
const MONGODB_URI = "mongodb://localhost:27017/mongodb_design";


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/class', classRoutes);
app.use('/students', studetsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});