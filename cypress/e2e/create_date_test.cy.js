describe('Creating dates.', () => {
    it('CREATE A SUCCESSFUL DATE.', () => {
        cy.visit('/');

        cy.get('[data-cy="pet-input"]').
            type('Mila');

        cy.get('[data-cy="owner-input"]').
            type('Ángel');

        cy.get('[data-cy="phone-input"]').
            type('0192837465');

        cy.get('[data-cy="date-input"]').
            type('2022-06-15');

        cy.get('[data-cy="hour-input"]').
            type('18:40');

        cy.get('[data-cy="symptoms-textarea"]').
            type('Tiene ganas de vomitar.');

        cy.get('[data-cy="submit-button"]').click();

        cy.screenshot();

        // cy.get('[data-cy="form"]').submit();

        cy.get('[data-cy="alert"]').
            invoke('text').
            should('equal', 'Se agregó correctamente');

        cy.get('[data-cy="alert"]').
            should('have.class', 'alert-success');

        cy.screenshot();
    });
});