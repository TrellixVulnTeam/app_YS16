const Users = require('../models/arrayOp');

exports.all = async (req, res) => {
  try {
    Users.find()
      .sort({ date: -1 })
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}

exports.search = async (req, res) => {
  try {
    Users.find({
      testScore: { $all: [10, 20, 30] }
    })
      .then(main => res.json(main))
  } catch (err) {
    console.log(err)
  }
}

exports.size = async (req, res) => {
  try {
    Users.find({
      testScore: { $size: 3 }
    })
      .then(main => res.json(main))
  } catch (err) {
    console.log(err)
  }
}

exports.elementMatch = async (req, res) => {
  try {
    Users.find({
      testScore: { $elemMatch: { $gt: 20 } }
    })
      .then(main => res.json(main))
  } catch (err) {
    console.log(err)
  }
}

exports.creates = async = (req, res) => {
  try {
    const newUsers = new Users({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      testScore: req.body.testScore,
    })

    newUsers.save().then(item => res.json(item));
  } catch (err) {
    console.log(err)
  }
}