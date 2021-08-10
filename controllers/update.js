require('dotenv').config()
const { Bookmark} = require('../models');

const update = async (req,res) => {
    await Bookmark.update({
        url: req.body.bookmarkUrl,
        categories: req.body.bookmarkCategory,
        // comment: req.body.bookmarkComment
    },
        {
            where: {
                id: req.params.id
            }
        });

    res.redirect('/')
}

const loadPage = (req, res) => {
    
    res.render("update.ejs", {
        id: req.params.id
    })
    
}

module.exports = {update, loadPage}