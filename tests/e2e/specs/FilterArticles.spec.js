/// <reference types="cypress" />

describe('FilterArticles', () => {
  it('filters articles', () => {
    cy.server()
    cy.route('GET', '/articles/*').as('fetchArticle')
    cy.visit('/')

    /*
      TODO
      1. search for 'School' in the input element with id 'articleSearchInput' and press enter
      2. confirm you're on the correct route
      3. confirm there is an element with the text 'VueSchool'
      4. click on the element (with the text 'VueSchool')
      5. Verify you are now on the page with the route of 'article'
    */
  
    cy.get('[data-testid=articleSearchInput]').type('School{enter}')
    cy.url().should('include', 'articles?q=School')
    cy.get('[data-testid=articleListItemTitle]').should('exist').and('have.text', 'VueSchool')
    cy.get('[data-testid=articleListItemTitle]').click()
    cy.url().should('include', 'articles/4')

  })
})