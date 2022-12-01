class articlePage{

    elements = {
        errors: () => cy.get('[data-cy="title_error"]'),
        window: () => cy.window(),
        title: () => cy.get('[data-testid="title"]'),
        author: () => cy.get('[data-testid="author"]'),
        image: () => cy.get('[data-testid="image"]'),
        rating: () => cy.get('[data-testid="rating"]'),
        submit: () => cy.get('[data-testid="submit"]'),
        text: () => cy.get('[data-testid="body"]')
    }

    getErrors(){
        this.elements.errors().should('be.visible')
        this.elements .window().contains('Title is required')
        this.elements .window().contains('Author is required')
    }

    typeInputs(){
        this.elements.title().type('Vue enterprise boilerplate')
        this.elements.author().type('Chris Fritz')
    }

    submit(){
        this.elements.submit().click()
    }

    imageError(){
        this.elements.image().type('Vue enterprise boilerplate')
        this.elements.errors().should('be.visible')
        this.elements.image().clear()
        this.elements.image().type('https://cdn-images-1.medium.com/max/2000/1*PHmNXbvOfg5AHiMWWuaRXg.jpeg')
        this.elements.errors().should('not.be.visible')
    }

    setRating(){
        this.elements.rating().invoke('val', 3).trigger('change')
    }

    writeText(){
        this.elements.text().type('Lorem Ipsum .... whatever')
    }

}

module.exports = new articlePage()