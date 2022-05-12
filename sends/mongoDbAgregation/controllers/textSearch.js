const Items = require('../models/aggregation');


exports.all = async (req, res) => {
  try {
    Items("textstore", {}, function (err, coll) {
      if (err != null) {
        Items.find("textstore", function (err, result) {
          assert.equal(null, err);
        });
      }
      Items.ensureIndex("textstore", {
        document: "text"
      }, function (err, indexname) {
        assert.equal(null, err);
      });
    })
  } catch (err) {
    console.log(err)
  }
}
