const express = require('express')
const mongoose = require('mongoose');
const path = require('path');


mongoose.connect("mongodb://localhost:27017/eduRight",{
      useNewUrlParser:true,
      useUnifiedTopology:true
      })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
    
const ReactController = require('./controllers/reactController')


const app = express()
app.use(express.json())

app.use('/postMessages',ReactController)


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));