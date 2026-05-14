import config from '../fixtures/config.json'

class LoginPage {    
    
    get loginPageBtn() {
        return cy.get('a[aria-label="Login"]')
    }

    get userNameInput() {
        return cy.get('.u-column1 > .woocommerce-form > :nth-child(1) > [name="username"]')
    }

    get passwordInput() {
        return cy.get(':nth-child(2) > .password-input > [name="password"]')
    }
    
    get loginBtn() {
        return cy.get('[name="login"]')
    }

    get userAccount() {
        return cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
    }

}

export default LoginPage;