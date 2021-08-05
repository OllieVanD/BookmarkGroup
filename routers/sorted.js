const express = require('express');
const router = express.Router()
const sortedController = require('../controllers/sorted.js')

console.log("in the sorted router")

router.post('/', sortedController.sortedPage);


module.exports = router
