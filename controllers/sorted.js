require('dotenv').config()
const { models} = require('../models');


const sortedPage = async (req, res) => {
	console.log('Do you even go here');

    const Bookmarks = await models.bookmarks.findAll(
        {where: { categories : req.body.Search }}
    )
	res.render('index.ejs', {
        bookmarks: Bookmarks
    })
}

module.exports = {sortedPage}