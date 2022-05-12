const express = require('express');
const router = express.Router();

const mainsRoutes = require('../controllers/arrayOp')


router.route("/").get(mainsRoutes.all);
router.route("/search").get(mainsRoutes.search);
router.route("/size").get(mainsRoutes.size);
router.route("/elMa").get(mainsRoutes.elementMatch);
router.route("/").post(mainsRoutes.creates);


module.exports = router;