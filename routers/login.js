const express = require('express');
const router = express.Router()
const loginController = require('../controllers/login.js')

// console.log("in the sorted router")

router.get('/', loginController.Load)
router.post('/', loginController.login);


module.exports = router
