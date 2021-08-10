require('dotenv').config()
const { Bookmark} = require('../models');


const deleteBookmark = async (req,res) => {
    await Bookmark.destroy({ where:  {
        id : req.params.id}
    })
    res.redirect('/')
}

module.exports = { deleteBookmark}