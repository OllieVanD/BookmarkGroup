require('dotenv').config()
const { models  } = require('../models');


const deleteBookmark = async (req,res) => {
    await models.bookmarks.destroy({ where:  {
        id : req.params.id}
    })
    res.redirect('/')
}

module.exports = { deleteBookmark}