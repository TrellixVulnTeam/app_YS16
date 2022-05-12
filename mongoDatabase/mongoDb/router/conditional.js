const express = require('express');
const router = express.Router();

const mainsRoutes = require('../controllers/conditional')


router.route("/").get(mainsRoutes.findLevel);
router.route("/msg").get(mainsRoutes.messages);
router.route("/").post(mainsRoutes.creates);


module.exports = router;