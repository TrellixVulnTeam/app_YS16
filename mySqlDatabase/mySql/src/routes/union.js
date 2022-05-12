const express = require('express')
const router = express.Router()
const UnionController = require('../controllers/union');


router.get('/', UnionController.findAll);
router.get('/:id', UnionController.findById);


module.exports = router