// / <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// taskCreateEntry(testInput) {
//   console.log("in create entry task")
//   createEntry(testInput)
//   return null
// },
// taskTruncateTables () {
//   console.log("in truncate table task")
//   truncateTables()
//   return null
// },
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//// const createEntry = require('../../Test/createEntry.js')
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)


const truncateTables = require('../../Test/truncateTables.js')
const createEntry = require('../../Test/createEntry.js')



// // eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('task', {
    taskTruncateTables (){
      console.log("in the taskTruncateTable")
      truncateTables()
      return null
    },
     createTask(inputUrl) {
    createEntry(inputUrl)
     return null

    }
    
  })
}


