const express = require('express');
const router = express.Router();

const itemRoutes = require('../controllers/itemsOp');

router.route("/").get(itemRoutes.allsorts);
router.route("/").post(itemRoutes.creates);
router.route("/lmt").get(itemRoutes.limits);
router.route("/fltrebx").get(itemRoutes.filtersRegx);
router.route("/flt").get(itemRoutes.filters);
router.route("/ljoins").get(itemRoutes.joins);

module.exports = router;