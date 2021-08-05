require('dotenv').config()
const { models } = require('../models');

const add =  async (req, res) => {
    console.log("Add function used")
    await models.bookmarks.create({
        url: req.body.bookmarkUrl,
        categories: req.body.categories,
        comment: req.body.comment

    });

    res.redirect('/')
}

module.exports = {add}