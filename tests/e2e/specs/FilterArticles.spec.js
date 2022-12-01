import searchPage from '../../e2e/pages/searchPage'
import { articleSearch } from '../../e2e/fixtures/testData'

describe('FilterArticles', () => {
  it('filters articles', () => {
    cy.server()
    cy.route('GET', '/articles/*').as('fetchArticle')
    cy.visit('/')

    //1. search for 'School' in the input element with id 'articleSearchInput' and press enter
    searchPage.typeSearch(articleSearch.firstSearch)
    //2. confirm you're on the correct route
    cy.url().should('eq',articleSearch.firstUrl)
    // 3. confirm there is an element with the text 'VueSchool'
    // 4. click on the element (with the text 'VueSchool')
    //NOTE** I am aware there is an element with a tag I can select, I interpreted it as doing a blind search for an element with such requirement. 
    cy.contains(articleSearch.containsElement).click()
    //5. Verify you are now on the page with the route of 'article'
    cy.url().should('eq',articleSearch.secondUrl)

  })
})
