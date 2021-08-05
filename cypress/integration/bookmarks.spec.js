describe("Testing overall bookmark functionality", function(){
    it(" Task function to destroy table", () => {
        
        cy.task('taskTruncateTables')
        cy.visit('/')
        cy.get('#inputBookmark').type('www.vscode.com')
        cy.get('#submit').click()
        cy.get('#bookmarks').should('contain', 'www.vscode.com')

    })
  it('creates task creating task', ()=>{
    cy.task('taskTruncateTables')
      cy.task('createTask', 'www.stackoverflow.com')
      cy.visit('/')
      cy.get('#bookmarks').should('contain', 'www.stackoverflow.com')
  })

})