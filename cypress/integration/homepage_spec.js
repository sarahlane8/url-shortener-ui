describe('Homepage', () => {
   beforeEach( () => {
    cy.fetchUrls()
    cy.visit('http://localhost:3000/')
  })

  it('Should display the page title and existing shortened url forms', () => {
    cy.
  })

})





//
// When a user visits the page, they can view the page title and the existing shortened URLs
// When a user visits the page, they can view the Form with the proper inputs
// When a user fills out the form, the information is reflected in the input fields
