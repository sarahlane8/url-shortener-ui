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

  it('Should display the Form with the proper inputs', () => {
    cy.get('form').should('be.visible')
      .get('form > input').should('have.length', 2)
      .get('form > input').eq(0).invoke('attr', 'placeholder').should('contain', 'Title...')
      .get('form > input').eq(1).invoke('attr', 'placeholder').should('contain', 'URL to Shorten...')
      .get('button').should('be.visible').should('contain', 'Shorten Please!')
  })

  it('Should update state with the input field value when a user fills out the form', () => {
    cy.get('form > input').eq(0).type('Monkey photo').should('have.value', 'Monkey photo')
      .get('form > input').eq(1)
        .type('https://i.guim.co.uk/img/media/02088fb2247b13df646907d47f552dc69a236bc7/0_748_3235_1940/master/3235.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=172ccbaa7535c9e16d0455138d20a07c')
        .should('have.value', 'https://i.guim.co.uk/img/media/02088fb2247b13df646907d47f552dc69a236bc7/0_748_3235_1940/master/3235.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=172ccbaa7535c9e16d0455138d20a07c')
  })
})
