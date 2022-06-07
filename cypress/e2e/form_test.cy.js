describe('Testing the form.', () => {
    it('Submit the form and show error message', () => {
        cy.visit('/');

        /* cy.get('[data-cy="submit-button"]').
            click(); */
        cy.get('[data-cy="form"]').submit();

        // SELECT ALERT
        cy.get('[data-cy="alert"]').
            should('have.class', 'alert-danger').
            invoke('text').
            should('equal', 'Todos los campos son Obligatorios');
        
        cy.screenshot();
    });
});