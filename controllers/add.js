require('dotenv').config()
const { Bookmark} = require('../models');

const add =  async (req, res) => {
    console.log("Add function used")
    await Bookmark.create({
        url: req.body.bookmarkUrl,
        categories: req.body.categories,
        // LoginId : 2

        // comment: req.body.comment

    });

    res.redirect('/')
}

module.exports = {add}