describe("Se connecter en tant qu'utilisateur", () => {
    // Pré-requis exécutés avant chaque test du fichier
    beforeEach(() => {
        // Ouvrir le site Shop-In
        cy.visit('https://shop-in.ovh/');

        // Fermer la notification de la boutique WooCommerce
        cy.get('.woocommerce-store-notice__dismiss-link').click();

        // Accepter les cookies si la bannière est présente
        cy.get('.ct-cookies-accept-button').click();
    })

    // Identifiants de test pour la connexion
    var username = 'sophie'
    var password = 'Omaima2026'

    it('Se connecter avec des identifiants valides :', () => {
        // Aller à la page de connexion
        cy.get('a[aria-label="Login"]').click();

        // Saisir le nom d'utilisateur
        cy.get('.u-column1 > .woocommerce-form > :nth-child(1) > [name="username"]').type(username);

        // Saisir le mot de passe
        cy.get(':nth-child(2) > .password-input > [name="password"]').type(password);

        // Envoyer le formulaire de connexion
        cy.get('[name="login"]').click();

        // Vérifier que la page de compte s'affiche après connexion
        cy.get('.page-title').should('have.text', 'Mon compte');
    })
})