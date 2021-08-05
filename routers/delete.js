const express = require('express');
const router = express.Router()
const deleteController = require('../controllers/delete.js')

router.delete('/:id', deleteController.deleteBookmark);

module.exports = router