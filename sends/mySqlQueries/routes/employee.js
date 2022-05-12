const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee');


router.get('/', employeeController.findAll);
router.post('/', employeeController.create);
router.get('/:id', employeeController.findById);


module.exports = router