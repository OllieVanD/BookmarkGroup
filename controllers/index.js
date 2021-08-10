require('dotenv').config()
const { Bookmark} = require('../models');


const loadPage = async (req, res) => {
	console.log('in the get method!');
console.log(Bookmark)
    if (Bookmark === undefined) {
        console.log('Testtt')
         res.render('index.ejs',{
    bookmarks : ""})} 
    else{
    const Bookmarks = await Bookmark.findAll({
        include: {
            all: true
          }
    })
	res.render('index.ejs',{
    bookmarks: Bookmarks
    });
}
}

module.exports = {loadPage}