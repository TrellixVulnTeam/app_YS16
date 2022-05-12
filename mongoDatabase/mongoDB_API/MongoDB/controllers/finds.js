const { Student, Course } = require('../models/finds');

var dbcourse = [];
exports.all = async (req, res, next) => {
  try {
    Course.find({ category: "database" })
      .then(data => {
        console.log("Database Courses:")
        console.log(data);

        data.map((d, k) => {
          dbcourse.push(d._id);

        })


        Student.find({ courseId: { $in: dbcourse } })
          .then(data => {
            console.log("Students in Database Courses:")
            console.log(data);
            console.log("dbcourse", dbcourse);
          })
          .catch(error => {
            console.log(error);
          })
      })
  } catch (err) {
    console.log(err)
  }
};



