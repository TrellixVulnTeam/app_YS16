const Items = require('../models/aggregation');


exports.all = async (req, res) => {
  try {
    Items.find()
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}

exports.getAggregate = async (req, res) => {
  try {
    Items.aggregate([{
      $group: {
        _id: { title: "$title", list: "$list" },
        age: { $sum: "$pop" },
        totalCity: { $sum: 1 }
      }
    },
    { $sort: { totalCity: 1 } },
    // {
    //   $group:
    //   {
    //     _id: "$_id.state",
    //     biggestCity: { $last: "$_id.city" },
    //     biggestPop: { $last: "$pop" },
    //     smallestCity: { $first: "$_id.city" },
    //     smallestPop: { $first: "$pop" },
    //     totalCity: { $sum: "$totalCity" }
    //   }
    // },
    {
      $project:
      {
        _id: 0,
        title: "$_id",
        totalCity: "$totalCity",
        // biggestCity: { name: "$biggestCity", pop: "$biggestPop" },
        // smallestCity: { name: "$smallestCity", pop: "$smallestPop" },
      }
    }
    ])
      .then(main => res.json(main))
  } catch (err) {
    console.log(err)
  }
}


//projection
exports.projections = async (req, res) => {
  try {
    Items.find({ "title": "Title3" }, { "age": true, list: 1 })
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}

/*
Create an Ascending Index
creates an ascending index key for the dateOfBirth field:
*/
exports.cIndex = async (req, res) => {
  try {
    Items.createIndexe({ age: 25 })
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}

exports.creates = async = (req, res) => {
  try {
    const newItems = new Items({
      title: req.body.title,
      age: req.body.age,
      list: req.body.list,
      status: req.body.status,
      qty: req.body.qty,
    })

    newItems.save().then(item => res.json(item));
  } catch (err) {
    console.log(err)
  }
}
