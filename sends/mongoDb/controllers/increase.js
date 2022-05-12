const Users = require('../models/increase');

exports.all = async (req, res) => {
  try {

    let password = "newPass"
    const result = await Users.findOneAndUpdate({
      //find username, if not find just insert into db
      username: 'Frank',
    }, {
      email: "vlues@gmail.com",
      username: 'Frank',
      password: password,
      $inc: {
        messages: 1,       //increse messages by 1
        // messages: -2       //decrease messages by 2
      }
    }, {
      upsert: true, //combination of update and insert
      new: true     //return updated document
    })
      .then(main => res.json(main));
    console.log('result', result);
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
    })

    newItems.save().then(item => res.json(item));
  } catch (err) {
    console.log(err)
  }
}