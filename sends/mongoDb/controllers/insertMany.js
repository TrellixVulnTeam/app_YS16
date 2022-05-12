const Items = require('../models/insertMany');

exports.all = async (req, res) => {
  try {
    Items.find()
      .sort({ date: -1 })
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}

exports.inserts = async = (req, res) => {
  try {
    Items.insertMany([{
      "email": "valid@gmail.com", "username": "min", "password": "password"
    },
    {
      "email": "valid2@gmail.com", "username": "min2", "password": "password2"
    },
    {
      "email": "valid3@gmail.com", "username": "min3", "password": "password3"
    }]).then(function () {
      console.log("Data inserted")  // Success
    })
  } catch (err) {
    console.log(err)
  }
}

exports.remove = async = (req, res) => {
  try {
    Items.deleteMany({
      username: ['min', 'min2']
    }).then(function () {
      console.log("Data inserted")  // Success
    })
  } catch (err) {
    console.log(err)
  }
}