const Users = require('../models/arrays');

exports.all = async (req, res) => {
  try {

    let newName = "Joe"
    await Users.findOneAndUpdate({

      username: 'Frank',
    }, {
      email: "vlues@gmail.com",
      $push: {//push values in an array every time
        nameHistory: newName,
      }

      // $addToSet: {//push values in an array if newName not exist
      //   nameHistory: newName,
      // }

      // $pull: {//nameHistory become empty
      //   nameHistory: newName,
      // }
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