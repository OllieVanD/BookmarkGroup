require ('dotenv').config()
const {models} = require ("../models")

async function truncateTables () {
    console.log("Inside the new truncate function file")
    await models.bookmarks.destroy({truncate: true, cascade: true})
    
}

module.exports = truncateTables;