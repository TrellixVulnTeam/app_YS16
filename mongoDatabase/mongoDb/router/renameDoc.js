const express = require('express');
const router = express.Router();

const mainsRoutes = require('../controllers/renameDoc')


router.route("/").get(mainsRoutes.all);
router.route("/").put(mainsRoutes.updates);


module.exports = router;