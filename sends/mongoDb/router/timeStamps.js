const express = require('express');
const router = express.Router();

const mainsRoutes = require('../controllers/timeStemps')


router.route("/").get(mainsRoutes.all);
// router.route("/:id").get(mainsRoutes.getOne);
router.route("/").post(mainsRoutes.creates);


module.exports = router;