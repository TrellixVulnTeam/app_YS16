const express = require('express');
const router = express.Router();

const mainsRoutes = require('../controllers/itemsMod')


router.route("/").get(mainsRoutes.all);
router.route("/or").get(mainsRoutes.or);
router.route("/orCon").get(mainsRoutes.orCon);
router.route("/and").get(mainsRoutes.and);
router.route("/orAnd").get(mainsRoutes.orAnd);


module.exports = router;