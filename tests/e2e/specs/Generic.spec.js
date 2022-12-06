/// <reference types="cypress" />
describe('Generic Cypress assertions', () => {
  /**
   * Here we show simple assertions against the dom
   */
  it('Visits the Home page', () => {
    // Visit the URL
    cy.visit('/')
    // No need to wait for anything
    cy.contains('Showcase e2e tests with Vue and Cypress')

    // using 'JQuery like' selectors
    cy.get('[data-testid="vueLogo"]')
      .should('be.visible')
      .should('have.attr', 'alt', 'Vue logo')
    /*
      TODO
      1. show off your testing skills by adding some additional tests not covered in the other 2 specs
      2. try to include at least one button click and route verification assertion
    */
  })

  it('Adds an article in two different ways', () => {
    //Thought I'd do another article and check the route call
    cy.server()
    cy.route('POST', 'http://localhost:3000/articles').as('DiegosArticle')

    cy.visit('/add-article')

    cy.get('[data-testid="title"]').type('Cypress at Jumpcloud')
    cy.get('[data-testid="author"]').type('Diego Toledano')
    cy.get('[data-testid="image"]').type('https://cdn-images-1.medium.com/max/2000/1*PHmNXbvOfg5AHiMWWuaRXg.jpeg')
    cy.get('[data-testid="body"]').type('Jumpcloud')
    cy.get('[data-testid="submit"]').click()

    cy.get('.swal2-modal')
      .should('be.visible')
    cy.get('.swal2-confirm').click()

    cy.wait('@DiegosArticle')

    //Then I thought I would do the POST request directly and check the response with a custom command

    cy.postArticle().then((response)=>{
      expect(response.body.author).to.equal('Diego Toledano')
      expect(response.body.rating).to.equal(3)

    })
  })

  it('Checks my article es in last page', () => {
    cy.visit('/articles')
    cy.get('[data-testid="pageLast"]').click()
    cy.get('[data-cy="last_article"]').contains('Cypress at Jumpcloud')
  })
})
