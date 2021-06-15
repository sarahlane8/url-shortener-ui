describe('Homepage', () => {
   beforeEach( () => {
    cy.fetchUrls()
    cy.visit('http://localhost:3000/')
  })

  it('Should display the page title and existing shortened url forms', () => {
    cy.get('.App').should('be.visible')
      .get('h1').should('contain', "URL Shortener")
      .get('.url').should('have.length', 2)
      .get('.url > h3').eq(0).should('contain', 'Awesome photo')
      .get('.url > a ').eq(0).should('contain', 'http://localhost:3001/useshorturl/1')
      .get('.url > p').eq(0).should('contain', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')

      .get('.url > h3').eq(1).should('contain', 'Zebra photo')
      .get('.url > a ').eq(1).should('contain', 'http://localhost:3001/useshorturl/2')
      .get('.url > p').eq(1).should('contain', 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8emVicmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80https://images.unsplash.com/photo-1501706362039-c06b2d715385?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8emVicmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80')
  })

})






// When a user visits the page, they can view the Form with the proper inputs
// When a user fills out the form, the information is reflected in the input fields
