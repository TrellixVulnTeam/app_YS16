const Items = require('../models/conditional');

exports.findLevel = async (req, res) => {
  try {
    //Search an user level > 10
    Items.find({
      level: {
        $exists: true,                    //check value exixt or not
        // $gte: 10, $lt: 15               //gte = greater than or equal to
      }
    })
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
      level: req.body.level,
    })

    newItems.save().then(item => res.json(item));


  } catch (err) {
    console.log(err)
  }
}
