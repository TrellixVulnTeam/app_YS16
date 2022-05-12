const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path')

//express docs
port = process.env.PORT
app.get('/', (req, res) => {
  res.send("Hi")
})

// code to serve images, CSS files, and JavaScript files in a directory named public
// app.use(express.static('public'));
// app.use('/static', express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))


app.listen(port, () => console.log(`Server running on port ${port}`))