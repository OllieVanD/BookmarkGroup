require('dotenv').config()
const { Bookmark } = require('../models');


const sortedPage = async (req, res) => {
	// console.log('Do you even go here');

    const Bookmarks = await Bookmark.findAll(
        {where: { categories : req.body.Search,
                    LoginId : req.session.userId,            
        }}
    )
	res.render('index.ejs', {
        bookmarks: Bookmarks
    })
}

module.exports = {sortedPage}