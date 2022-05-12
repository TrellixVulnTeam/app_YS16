const express = require('express')
const router = express.Router()
const joinOpController = require('../controllers/joinOp');


router.get('/', joinOpController.findAll);
router.get('/:id', joinOpController.findById);


module.exports = router