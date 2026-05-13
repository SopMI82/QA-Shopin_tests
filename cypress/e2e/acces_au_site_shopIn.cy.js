describe('premier test Cypress site shop-in', () => { //=la fonctionalité à tester
    it('ouvre la page d accueil du site Shop-in', () => { //=le scenario de test
        cy.visit('https://shop-in.ovh/') //=le site a tester
        cy.title().should('not.be.empty') //= une condition a verifier
        //objectif : verifier que cypress accède au site à tester dans un premier temps.
    })
})