import config from '../fixtures/config.json'

class HomePage {
    
    get visitHomePage() {
        return cy.visit(config.baseUrl);
    }    
    
    get closeBtnDemoBanner() {
        return cy.get('.woocommerce-store-notice__dismiss-link')
    }

    get cookiesAccept() {
        return cy.get('.ct-cookies-accept-button', { timeout: 10000 })
    }
}

export default HomePage;