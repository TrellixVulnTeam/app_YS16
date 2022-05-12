const express = require('express')
const router = express.Router()
const productsController = require('../controllers/products');


router.get('/', productsController.findAll);
router.post('/', productsController.create);
router.get('/:id', productsController.findById);
router.put('/:id', productsController.update);
router.delete('/:id', productsController.delete);


module.exports = router