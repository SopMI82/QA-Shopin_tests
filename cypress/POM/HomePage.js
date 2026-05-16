import config from '../fixtures/config.json'
import BasePage from "./BasePage";

class HomePage extends BasePage {
    
    get visitHomePage() {
        return this.goToUrl(config.baseUrl);
    } 
    
    get closeBtnDemoBanner() {
          return this.clickElement('.woocommerce-store-notice__dismiss-link');
    }

    get cookiesAccept() {
         return this.clickElement('.ct-cookies-accept-button');
    }
}

export default HomePage;