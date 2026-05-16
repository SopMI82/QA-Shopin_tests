class BasePage {

     clickElement(selector) {
        return cy.get(selector).click();
    }

    typeText(selector, text) {
        return cy.get(selector).clear().type(text);
    }

    getElement(selector) {
        return cy.get(selector);
    }
    goToUrl(url) {
        return cy.visit(url);
    }

}

export default BasePage;