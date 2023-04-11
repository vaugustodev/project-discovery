describe('Discovery', () => {
  it('can toggle on and off a topic', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy="input-username"]').type('username');
    cy.get('[data-cy="input-password"]').type('pass');
    cy.get('[data-cy="button-Sign In"]').click();

    cy.get('[data-cy="toggle-vue"]').click();
    cy.get('[data-cy="topic-section-Vue"]').should('exist');

    cy.get('[data-cy="toggle-vue"]').click();
    cy.get('[data-cy="topic-section-Vue"]').should('not.exist');
  });

  it('can change sort option for a topic section', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy="input-username"]').type('username');
    cy.get('[data-cy="input-password"]').type('pass');
    cy.get('[data-cy="button-Sign In"]').click();

    cy.get('[data-cy="toggle-vue"]').click();

    cy.get('[data-cy="topic-section-select"]').select('forks');
    cy.get('[data-cy="topic-section-select"]').should('have.value', 'forks');
  });

  it('can bookmark and unbookmark a repository', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy="input-username"]').type('username');
    cy.get('[data-cy="input-password"]').type('pass');
    cy.get('[data-cy="button-Sign In"]').click();

    // Check that there are no bookmarks initially
    cy.get('[data-cy="no-bookmarks-div"]').should('exist');

    // Bookmark a repository
    cy.get('[data-cy="toggle-vue"]').click();
    cy.get('[data-cy="star-button"]').first().click();

    // Check that the no bookmarks div is not displayed
    cy.get('[data-cy="no-bookmarks-div"]').should('not.exist');

    // Unbookmark the repository
    cy.get('[data-cy="star-button"]').first().click();

    // Check that there are no bookmarks again
    cy.get('[data-cy="no-bookmarks-div"]').should('exist');
  });
});