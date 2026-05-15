class BasePage {

    clickElement(locator){
        return cy.get(locator).click()
    }

}

export default BasePage;