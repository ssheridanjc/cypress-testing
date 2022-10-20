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
})
