/// <reference types="cypress" />
// Importations des fichiers POM
import HomePage from "../POM/HomePage"
import ShopPage from "../POM/ShopPage"
import LoginPage from "../POM/LoginPage";

// Importations des données fixtures
import config from "../fixtures/config.json"

describe("Ajouter un produit au panier et vérifier le processus de paiement", () => {
    const homePage = new HomePage;
    const shopPage = new ShopPage;
    const loginPage = new LoginPage;

    beforeEach(() => {
        // Ouvrir le site Shop-In
        homePage.visitHomePage;
        // Fermer la notification de la boutique WooCommerce
        homePage.closeBtnDemoBanner;    
        // Accepter les cookies si la bannière est présente
        homePage.cookiesAccept; 
    })

    it("Ajouter un produit au panier et vérifier qu'il se trouve bien dans le panier", () => {
        shopPage.goToShoesCategory;
        shopPage.addProductToCart;
        shopPage.openCart;
        cy.reload();
        shopPage.verifyAddedProduct.should('contain', 'Nike Air Max Plus OG');
    });

    it("Enlever un article du panier", ()=> {
        shopPage.goToShoesCategory;
        shopPage.addProductToCart;
        shopPage.openCart;
        cy.reload();
        shopPage.clickBtnRemoveProductFromCart;
        shopPage.successfulRemoveFromCartMessage.should('contain', "Your cart is currently empty" )
    })
})