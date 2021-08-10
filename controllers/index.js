require('dotenv').config()
const { Bookmark} = require('../models');


const loadPage = async (req, res) => {
    if (Bookmark === undefined) {
         res.render('index.ejs',{
    bookmarks : ""})} 
    else{
    const Bookmarks = await Bookmark.findAll({
        where : { 
            LoginId : req.session.userId
        }
        // include: {
        //     all: true
        //   }
    })

    if (req.session.userId !== undefined) 
    {
	res.render('index.ejs',{
    bookmarks: Bookmarks,
    userId : req.session.userId
    });
} else {
    res.redirect('/')
}
}
}

module.exports = {loadPage}