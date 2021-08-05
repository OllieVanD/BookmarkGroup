require('dotenv').config()
const { models} = require('../models');


const loadPage = async (req, res) => {
	console.log('in the get method!');
    const Bookmarks = await models.bookmarks.findAll({})
	res.render('index.ejs',{
    bookmarks: Bookmarks
    });
}

module.exports = {loadPage}