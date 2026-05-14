/// <reference types="cypress" />
// Importations des fichiers POM
import HomePage from "../POM/HomePage"
import LoginPage from "../POM/LoginPage";

// Importations des données fixtures
import config from "../fixtures/config.json"

describe("Se connecter en tant qu'utilisateur", () => {
    //describe permet de rgrouper les test d'une suite de test liés à une fonctionnalité
    const homePage = new HomePage;
    const loginPage = new LoginPage;

    // Pré-requis exécutés avant chaque test du fichier
    beforeEach(() => {
        // Ouvrir le site Shop-In
        homePage.visitHomePage;

        // Fermer la notification de la boutique WooCommerce
        homePage.closeBtnDemoBanner.click();

        // Accepter les cookies si la bannière est présente
        homePage.cookiesAccept.click();
    })

    // Identifiants de test pour la connexion
    //var username = 'sophie'
    //var password = 'Omaima2026'

    it('Se connecter avec des identifiants valides Cas Passant:', () => {
        // Aller à la page de connexion
        //cy.get('a[aria-label="Login"]').click();
        loginPage.loginPageBtn.click();

        // Saisir le nom d'utilisateur
        //cy.get('.u-column1 > .woocommerce-form > :nth-child(1) > [name="username"]').type(username);
        loginPage.userNameInput.type(config.validUsername);

        // Saisir le mot de passe
        //cy.get(':nth-child(2) > .password-input > [name="password"]').type(password);
        loginPage.passwordInput.type(config.validPassword)

        // Envoyer le formulaire de connexion
        //cy.get('[name="login"]').click();
        loginPage.loginBtn.click()
        // Vérifier que la page de compte s'affiche après connexion
        //cy.get('.page-title').should('have.text', 'Mon compte');
        loginPage.userAccount.should('contain.text', config.validUsername)
    })
})