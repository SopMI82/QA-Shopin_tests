import config from '../fixtures/config.json'

class LoginPage {    
    
    get loginPageBtnClick() {
        return cy.get('a[aria-label="Login"]').click()
    }

    get userNameInput() {
        return cy.get('.u-column1 > .woocommerce-form > :nth-child(1) > [name="username"]').type(config.validUsername)
    }

    get passwordInput() {
        return cy.get(':nth-child(2) > .password-input > [name="password"]').type(config.validPassword)
    }
    
    get loginBtnClick() {
        return cy.get('[name="login"]').click()
    }

    get userAccount() {
        return cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
    }

}

export default LoginPage;