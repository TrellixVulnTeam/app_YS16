const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const ItemsRoutes = require('./router/items')
const ItemsModRoutes = require('./router/itemsMod')
const classRoutes = require('./router/classRoutes');
const studetsRoutes = require('./router/studentsRoutes');
const subStudetsRoutes = require('./router/subStudentsRoutes');
const increaseRoutes = require('./router/increase');
const arraysRoutes = require('./router/arrays');
const timeRoutes = require('./router/timeStamps');
const plurizedRoutes = require('./router/PluralizedCollectioName');
const insertManyRoutes = require('./router/insertMany');
const nestedRoutes = require('./router/nested');
const conditionalRoutes = require('./router/conditional');
const renameRoutes = require('./router/renameDoc');
const arrayOpRoutes = require('./router/arrayOp');
const keyIdRoutes = require('./router/primaryUniqeId');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB')
})

app.use('/items', ItemsRoutes);
app.use('/itemsMod', ItemsModRoutes);
app.use('/class', classRoutes);
app.use('/students', studetsRoutes);
app.use('/subStudents', subStudetsRoutes);
app.use('/increase', increaseRoutes);
app.use('/arrays', arraysRoutes);
app.use('/times', timeRoutes);
app.use('/plurized', plurizedRoutes);
app.use('/many', insertManyRoutes);
app.use('/nested', nestedRoutes);
app.use('/conditional', conditionalRoutes);
app.use('/rename', renameRoutes);
app.use('/arrayOp', arrayOpRoutes);
app.use('/keysIds', keyIdRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})