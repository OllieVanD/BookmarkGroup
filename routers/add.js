const express = require('express');
const router = express.Router()
const addController = require('../controllers/add.js')

router.post('/', addController.add);

module.exports = router