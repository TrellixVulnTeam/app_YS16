const express = require('express');
const router = express.Router();

const itemRoutes = require('../controllers/Item');

router.route("/").get(itemRoutes.all);
router.route("/:id").get(itemRoutes.getOne);
router.route("/").post(itemRoutes.creates);
router.route("/:id").patch(itemRoutes.update);
router.route("/:id").delete(itemRoutes.remove);

module.exports = router;
