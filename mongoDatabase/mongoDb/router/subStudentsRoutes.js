const express = require('express');
const router = express.Router();

const classCont = require('../controllers/subStudents');


router.route("/").get(classCont.all);
router.route("/nested").get(classCont.findNested);
router.route("/specifyNested").get(classCont.specifyNested);


module.exports = router;
