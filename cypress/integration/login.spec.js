context('Login into app', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should be Welcome', () => {
        cy.get('[data-testid=input-email]')
            .type('eve.holt@reqres.in');

        cy.get('[data-testid=input-password]')
            .type('testpassword');

        cy.get('[data-testid=submit-login]').click();
        cy.get('[data-testid=test-title]').contains("Welcome");
    });
});
