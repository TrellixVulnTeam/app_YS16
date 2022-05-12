const Users = require('../models/primaryUniqeId');

exports.all = async (req, res) => {
  try {
    Users.find()
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}

exports.creates = async = (req, res) => {
  try {
    const newUsers = new Users({
      _id: req.body._id,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    })

    newUsers.save().then(item => res.json(item));
  } catch (err) {
    console.log(err)
  }
}