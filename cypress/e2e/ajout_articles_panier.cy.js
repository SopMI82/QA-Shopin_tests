describe("Se connecter en tant qu'utilisateur", () => {
    var username = 'sophie'
    var password = 'Omaima2026'

    beforeEach(() => {
        cy.visit('https://shop-in.ovh/');
        cy.get('.woocommerce-store-notice__dismiss-link').click();
        cy.get('.ct-cookies-accept-button').click();
        cy.get('a[aria-label="Login"]').click();
        cy.get('.u-column1 > .woocommerce-form > :nth-child(1) > [name="username"]').type(username);
        cy.get(':nth-child(2) > .password-input > [name="password"]').type(password);
        cy.get('[name="login"]').click();
        cy.get('.page-title').should('have.text', 'Mon compte');
    })

    it('Ajouter des articles dans le panier :', () => {

    })

})