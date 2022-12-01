class searchPage{

    elements = {
        inputField: () => cy.get('[data-testid="articleSearchInput"]')
    }

    typeSearch(articleSearch){
        this.elements.inputField().type(articleSearch).should('be.visible').type('{enter}')
    }

}

module.exports = new searchPage()