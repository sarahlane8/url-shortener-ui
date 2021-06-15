Cypress.Commands.add('fetchUrls', () => {
  cy.intercept('http://localhost:3001/api/v1/urls',
  {
    "urls": [
      {
        "id": 1,
        "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        "short_url": "http://localhost:3001/useshorturl/1",
        "title": "Awesome photo"
      },
      {
        "id": 2,
        "long_url": "https://images.unsplash.com/photo-1501706362039-c06b2d715385?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8emVicmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80https://images.unsplash.com/photo-1501706362039-c06b2d715385?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8emVicmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        "short_url": "http://localhost:3001/useshorturl/2",
        "title": "Zebra photo"
      }
    ]
  })
})
