describe('Profile Settings', () => {
  it('can change username and e-mail', () => {
    cy.visit('http://localhost:3000/sign-up');

    cy.get('[data-cy="input-username"]').type('username2');
    cy.get('[data-cy="input-email"]').type('user@name2.com');
    cy.get('[data-cy="input-password"]').type('123');
    cy.get('[data-cy="input-confirmPassword"]').type('123');
    cy.get('[data-cy="button-Sign Up"]').click();

    cy.get('[data-cy="profile-settings-anchor"]').click();
    cy.get('[data-cy="input-username"]').clear();
    cy.get('[data-cy="input-username"]').type('username3');
    cy.get('[data-cy="input-email"]').clear();
    cy.get('[data-cy="input-email"]').type('user@name3.com');
    cy.get('[data-cy="button-Save"]').click();

    cy.get('[data-cy="profile-settings-anchor"]').click();
    cy.get('[data-cy="input-username"]').should('have.value', 'username3');
    cy.get('[data-cy="input-email"]').should('have.value', 'user@name3.com');
  });

  it('displays an error if username is not present', () => {
    cy.visit('http://localhost:3000/sign-up');

    cy.get('[data-cy="input-username"]').type('username2');
    cy.get('[data-cy="input-email"]').type('user@name2.com');
    cy.get('[data-cy="input-password"]').type('123');
    cy.get('[data-cy="input-confirmPassword"]').type('123');
    cy.get('[data-cy="button-Sign Up"]').click();

    cy.get('[data-cy="profile-settings-anchor"]').click();
    cy.get('[data-cy="input-username"]').clear();
    cy.get('[data-cy="button-Save"]').click();

    cy.get('[data-cy="profile-settings-error-msg"]').contains('Username is required.');
  });
});