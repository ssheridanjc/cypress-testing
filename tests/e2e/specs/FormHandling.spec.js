/// <reference types="cypress" />
describe('Shows how to test a basic form', () => {
  it('fills in the form', () => {
    cy.server()
    // Stub the POST request to /articles and return a 403
    cy.route({
      method: 'POST',
      url: 'articles*',
      status: '403',
      response: 'Invalid Cover image'
    })

    // visit the page
    cy.visit('/add-article')

    // submit without any data
    cy.getByTestId('submit').click()

    // check if fields have errors and type into them
    
    /*
      TODO
      1. get the element with data-testid="title" and assert it is invalid with the message 'Title is required' (since it's empty)
      2. enter the valid input of 'Vue enterprise boilerplate'
      
      3. get the element with data-testid="author" and assert it is invalid with the message 'Author is required' (since it's empty)
      4. enter the valid input of 'Chris Fritz'

      5. get the element with data-testid="image"
      6. enter 'Vue enterprise boilerplate'
      7. assert it is invalid with the message 'Cover image must be a valid url'
      8. clear the input
      9. enter 'https://cdn-images-1.medium.com/max/2000/1*PHmNXbvOfg5AHiMWWuaRXg.jpeg' into the input

      10. get the element with data-testid="rating"
      11. set the slider to have a value of '3'
      12. trigger the input

      13. get the element with data-testid="body"
      14. enter the text 'Lorem Ipsum .... whatever'

      15. click the 'Save article' button
      16. uncomment the rest of this file and have the whole test pass
    */
    
    /*
    cy.isPopupVisible('error', 'Invalid Cover image', true)

    cy.route('POST', 'articles').as('postArticle') // unstub

    cy.getByTestId('submit').click()

    cy.isPopupVisible('info', 'Vue enterprise boilerplate saved successfully.', true)

    cy.wait('@postArticle').its('responseBody').then((body) => {
      cy.url().should('contain', `articles/${body.id}`)

      cy.getByTestId('articleTitle').should('contain', body.title)

      cy.getByTestId('articleRating').should('contain', body.rating)
    })
    */
  })
})
