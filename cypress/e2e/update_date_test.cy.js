describe('Update a date.', () => {
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

    it('UPDATING THE DATE SUCCESSFULLY.', () => {
        cy.get('[data-cy="update-button"]').click();

        cy.screenshot();

        cy.get('[data-cy="pet-input"]').
            clear().
            type('Mila');

        cy.get('[data-cy="owner-input"]').
            clear().
            type('Ángel');

        cy.get('[data-cy="phone-input"]').
            clear().
            type('1234567890');

        cy.get('[data-cy="date-input"]').
            clear().
            type('2022-06-14');

        cy.get('[data-cy="hour-input"]').
            clear().
            type('19:00');

        cy.get('[data-cy="symptoms-textarea"]').
            clear().
            type('Tiene ganas de vomitar');

        cy.screenshot();

        cy.get('[data-cy="submit-button"]').click();

        cy.get('[data-cy="alert"]').
            invoke('text').
            should('equal', 'Guardado Correctamente');

        cy.get('[data-cy="alert"]').
            should('have.class', 'alert-success');
        
        cy.screenshot();
    });
});