const Items = require('../models/nested');

exports.all = async (req, res) => {
  try {
    Items.find()
      .sort({ date: -1 })
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}

exports.messages = async (req, res) => {
  try {
    Items.findOne({
      'messages.text': 'Text'
    })
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}

exports.creates = async = (req, res) => {
  try {
    const newItems = new Items({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      messages: [
        {
          userId: req.body.email,
          text: 'Text'
        },
      ]
    })

    newItems.save().then(item => res.json(item));
  } catch (err) {
    console.log(err)
  }
}
