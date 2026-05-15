import config from '../fixtures/config.json'
import products from '../fixtures/productsCSSSelectors.json';

class ShopPage {  

    get goToShoesCategory() {
        // Naviguer vers la catégorie ou la page de produits
        return cy.get('#menu-item-1552 > .ct-menu-link').click({ force: true });
    }

    // get addProductToCart() {
        // Ajouter le produit au panier depuis la carte produit
      //  return cy.get('.post-1538 > .ct-woo-card-actions > .button').click({ force: true });
    // }

    addProductToCart(productName) {
        // Ajouter le produit au panier depuis la carte produit
        // Utiliser le nom du produit pour trouver le sélecteur correspondant dans le fichier JSON
        // producs[productName] doit correspondre à une clé dans le fichier productsCSSSelectors.json 
             return cy.get(products[productName])
        .click({ force: true });
}

    get openCart() {
        // Ouvrir le panier pour vérifier l'article ajouté
        return cy.visit('https://shop-in.ovh/cart/')
    }   
    
    get verifyAddedProduct() {
        // Vérifier que l'article ajouté correspond bien à celui attendu
        return cy.get('.woocommerce-cart-form__cart-item > .product-name').should('contain', 'Nike Air Max Plus OG')
    }
}

export default ShopPage;