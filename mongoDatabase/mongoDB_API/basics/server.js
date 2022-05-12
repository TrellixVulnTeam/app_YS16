const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const url='mongodb://localhost:27017/nodeJs';

mongoose.connect(url, { useNewUrlParser:true }, (err, db) => {
      ()=>{console.log('Db Connected')},
      err=>{console.log(err)}
    });
    


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));

