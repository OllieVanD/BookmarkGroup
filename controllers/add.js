require('dotenv').config()
const { Bookmark} = require('../models');

const add =  async (req, res) => {
    // console.log("Add function used")
    await Bookmark.create({
        url: req.body.bookmarkUrl,
        categories: req.body.categories,
        LoginId : req.session.userId,

        // comment: req.body.comment

    });

    res.redirect('/home')
}

module.exports = {add}