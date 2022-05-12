const Users = require('../models/timeStamps');

exports.all = async (req, res) => {
  try {
    Users.find()
      .then(main => res.json(main))
  } catch (err) {
    console.log(err)
  }
}


exports.creates = async = (req, res) => {
  try {
    const newItems = new Users({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      messages: req.body.messages,
    })

    // const valid = new Promise((res) => {
    //   newItems.validate((err) => {
    //     if (err) {
    //       res(false)
    //     } else {
    //       res(true)
    //     }
    //   })
    // })

    // if (valid) {
    //   newItems.save()
    // }
    newItems.save().then(item => res.json(item));
  } catch (err) {
    console.log(err)
  }
}