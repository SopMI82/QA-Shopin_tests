import config from '../fixtures/config.json'
import BasePage from "./BasePage";

class HomePage extends BasePage {
    
    get visitHomePage() {
         return cy.visit("/");
           
    }    
    
    get closeBtnDemoBanner() {
        return this.clickElement('.woocommerce-store-notice__dismiss-link');
       // return cy.get('.woocommerce-store-notice__dismiss-link').click()
    }

    get cookiesAccept() {
         return this.clickElement('.ct-cookies-accept-button');
       // return cy.get('.ct-cookies-accept-button', { timeout: 10000 }).click()
    }
}

export default HomePage;