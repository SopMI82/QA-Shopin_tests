import config from '../fixtures/config.json'

class LoginPage {    
    
    get loginPageBtnClick() {
        return cy.get('a[aria-label="Login"]').click()
    }

    get userNameInput() {
        return cy.get('.u-column1 > .woocommerce-form > :nth-child(1) > [name="username"]')
    }

    get passwordInput() {
        return cy.get(':nth-child(2) > .password-input > [name="password"]')
    }
    
    get loginBtnClick() {
        return cy.get('[name="login"]').click()
    }

    get userValidAccountMessage() {
        return cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
    }

    get userInvalidAccountMessage() {
        return cy.get('.woocommerce-error > li > :nth-child(1)')
    }

    get userNameEmptyMessage() {
        return cy.get('.woocommerce-error > li')
    }

}

export default LoginPage;