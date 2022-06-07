describe('Delete a date.', () => {
    it('CREATING THE DATE.', () => {
        cy.visit('/');

        cy.get('[data-cy="pet-input"]').
            type('Nilo');

        cy.get('[data-cy="owner-input"]').
            type('Angel');
        
        cy.get('[data-cy="phone-input"]').
            type('1029293838');
        
        cy.get('[data-cy="date-input"]').
            type('2022-06-15');

        cy.get('[data-cy="hour-input"]').
            type('18:59');

        cy.get('[data-cy="symptoms-textarea"]').
            type('Tiens devomitar');
        
        cy.get('[data-cy="submit-button"]').
            click();

        cy.get('[data-cy="alert"]').
            invoke('text').
            should('equal', 'Se agregó correctamente');

        cy.get('[data-cy="alert"]').
            should('have.class', 'alert-success');
        
        cy.screenshot();
    });

    it('DELETE A DATE SUCCESSFULLY.', () => {
        cy.get('[data-cy="delete-button"]').click();

        cy.get('[data-cy="title-management"]').
            invoke('text').
            should('equal', 'No hay Citas, comienza creando una');

        cy.screenshot();
    });
});