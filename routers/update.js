const express = require('express');
const router = express.Router()
const updateController = require('../controllers/update.js')

router.get('/:id', updateController.loadPage);
router.put('/:id', updateController.update);

module.exports = router