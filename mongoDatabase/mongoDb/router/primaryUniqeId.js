const express = require('express');
const router = express.Router();

const mainsRoutes = require('../controllers/primaryUniqeId')


router.route("/").get(mainsRoutes.all);
router.route("/").post(mainsRoutes.creates);


module.exports = router;