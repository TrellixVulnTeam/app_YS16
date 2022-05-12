const express = require('express');
const router = express.Router();

const mainsRoutes = require('../controllers/insertMany')


router.route("/").get(mainsRoutes.all);
router.route("/").post(mainsRoutes.inserts);
router.route("/").delete(mainsRoutes.remove);


module.exports = router;