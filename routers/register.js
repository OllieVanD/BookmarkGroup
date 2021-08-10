const express = require('express');
const router = express.Router()
const registerController = require('../controllers/register.js')

// console.log("in the sorted router")

router.get('/', registerController.Load);
router.post('/', registerController.register);

module.exports = router
