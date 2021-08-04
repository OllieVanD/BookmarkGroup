require ('dotenv').config()
const {models} = require ("../models")


async function createEntry (inputUrl = "www.test.com") {
  console.log("Inside the new truncate function file")
  await models.bookmarks.create({url: inputUrl
    
  })
}

module.exports = createEntry;