const express = require('express');
const router = express.Router();

const itemRoutes = require('../controllers/finds');

router.route("/").get(itemRoutes.all);

module.exports = router;
