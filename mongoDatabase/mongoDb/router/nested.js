const express = require('express');
const router = express.Router();

const mainsRoutes = require('../controllers/nested')


router.route("/").get(mainsRoutes.all);
router.route("/msg").get(mainsRoutes.messages);
router.route("/").post(mainsRoutes.creates);


module.exports = router;