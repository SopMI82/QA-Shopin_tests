describe("Se connecter en tant qu'utilisateur", () => {
    // Identifiants de l'utilisateur pour le scénario de connexion
    var username = 'sophie'
    var password = 'Omaima2026'

    // Avant chaque test, ouvrir le site, fermer les notifications et se connecter
    beforeEach(() => {
        cy.visit('https://shop-in.ovh/');

        // Fermer la bannière de notification WooCommerce
        cy.get('.woocommerce-store-notice__dismiss-link').click();

        // Accepter les cookies si la bannière apparaît
        cy.get('.ct-cookies-accept-button').click();

        // Aller à la page de connexion
        cy.get('a[aria-label="Login"]').click();

        // Saisir le nom d'utilisateur et le mot de passe
        cy.get('.u-column1 > .woocommerce-form > :nth-child(1) > [name="username"]').type(username);
        cy.get(':nth-child(2) > .password-input > [name="password"]').type(password);

        // Valider la connexion
        cy.get('[name="login"]').click();

        // Vérifier que la page de compte est affichée après connexion
        cy.get('.page-title').should('have.text', 'Mon compte');
    })

    it('Ajoute un article au panier après connexion réussie', () => {
        // Naviguer vers la catégorie ou la page de produits
        cy.get('#menu-item-1552 > .ct-menu-link').click({ force: true });

        // Ajouter le produit au panier depuis la carte produit
        cy.get('.post-1538 > .ct-woo-card-actions > .button').click({ force: true });

        // Ouvrir le panier pour vérifier l'article ajouté
        cy.get('.ct-cart-item').click({ multiple: true, force: true });

        // Vérifier que l'article ajouté correspond bien à celui attendu
        cy.get('.woocommerce-cart-form__cart-item > .product-name').should('contain', 'Nike Air Max Plus OG')
    })
})