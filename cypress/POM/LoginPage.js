import config from '../fixtures/config.json'
import BasePage from "./BasePage";

class LoginPage extends BasePage {    
    
    get loginPageBtnClick() {
          return this.clickElement('a[aria-label="Login"]');
    }

    get userNameInput() {
         return this.getElement('.u-column1 > .woocommerce-form > :nth-child(1) > [name="username"]');
    }

    get passwordInput() {
         return this.getElement(':nth-child(2) > .password-input > [name="password"]');
    }
    
    get loginBtnClick() {
                return this.clickElement('[name="login"]');
    }

    get userValidAccountMessage() {
        return this.getElement('.woocommerce-MyAccount-content > :nth-child(2)');
    }

    get userInvalidAccountMessage() {
         return this.getElement('.woocommerce-error > li > :nth-child(1)');
    }

    get userNameEmptyMessage() {
        return this.getElement('.woocommerce-error > li');
    }

}

export default LoginPage;