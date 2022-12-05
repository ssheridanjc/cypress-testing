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

    });

    /*
      TODO
      1. show off your testing skills by adding some additional tests not covered in the other 2 specs
      2. try to include at least one button click and route verification assertion
    */

  it('Redirection with header options.', () => {
    cy.get('a').contains('Articles').click()
    cy.url().should('include', 'articles?')
    cy.get('a').contains('Add Article').click()
    cy.url().should('include', 'add-article')

  });

  it('The "articles" pages changes with user actions.', () => {
    cy.get('a').contains('Articles').click()
    for(let pageOne = 1; pageOne < 10; pageOne ++){
      cy.url().should('include', 'page='+ pageOne)
      cy.get('[data-testid=paginationCurrentPage]').should('be.visible').and('contain', pageOne)
      if (pageOne < 9 ) {
        cy.get('[data-testid=pageNext]').click()
        cy.get('[data-testid=pagePrev]').should('be.visible').should('not.be.disabled')
        cy.get('[data-testid=pageFirst]').should('be.visible').should('not.be.disabled')
      } else {
        cy.get('[data-testid=pageNext]').should('be.visible').should('be.disabled')
        cy.get('[data-testid=pageLast]').should('be.visible').should('be.disabled')
      }
    }
  });

  it('Searching for non-existent articles.', () => {
    cy.get('[data-testid=articleSearchInput]').type('NoExist{enter}')
    cy.get('[data-testid=pageLast]').click()  /* IMO, this line should not exist, however the system needs it to set the main page to zero.*/
    cy.get('.text-grey-darker').should('contain', '0 / 0')
  });

  })
