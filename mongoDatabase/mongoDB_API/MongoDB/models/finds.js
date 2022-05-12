const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  category: String
});


const studentSchema = new mongoose.Schema({
  name: String,
  enroll: Number,
  courseId: Number
});


const Course = mongoose.model('course', courseSchema);
const Student = mongoose.model('student', studentSchema);

module.exports = {
  Student, Course
}
