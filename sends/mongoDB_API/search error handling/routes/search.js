const express = require('express');
const router = express.Router();

const Item = require('../models/search');


router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});


router.get("/search/:name", (req, res) => {
  var regex = new RegExp(req.params.name, 'i');
  Item.find({ name: regex }).then((result) => {
    res.status(200).json(result)
  })
})


module.exports = router;
