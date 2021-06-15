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



Cypress.Commands.add('stubPost', () => {
  cy.intercept(POST, 'http://localhost:3001/api/v1/urls',
    {
      "urls": [
        {
          "id": 3,
          "long_url": "https://i.guim.co.uk/img/media/02088fb2247b13df646907d47f552dc69a236bc7/0_748_3235_1940/master/3235.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=172ccbaa7535c9e16d0455138d20a07c",
          "short_url": "http://localhost:3001/useshorturl/3",
          "title": "Monkey photo"
        }
      ]
    }
})
