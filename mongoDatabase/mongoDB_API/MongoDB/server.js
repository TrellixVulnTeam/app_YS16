const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const items = require('./routes/item');
const itemsOp = require('./routes/itemsOp');
// const findsOp = require('./routes/finds');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = "mongodb://localhost:27017/mongodb_design";


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  });
}

app.use('/item', items);
app.use('/itemsOp', itemsOp);
// app.use('/finds', findsOp);


mongoose.connection.once('open', function () {
  console.log('Connected to the Database.');
});
mongoose.connection.on('error', function (error) {
  console.log('Mongoose Connection Error : ' + error);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});