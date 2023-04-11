describe('Sign In', () => {
  it('can sign in with demo user', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy="input-username"]').type('username');
    cy.get('[data-cy="input-password"]').type('pass');
    cy.get('[data-cy="button-Sign In"]').click();

    cy.url().should('eq', 'http://localhost:3000/app/discovery');
  });

  it('displays an error if username and password are not present', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy="button-Sign In"]').click();

    cy.get('[data-cy="sign-in-error-message"]').contains('Username and password are required.');
  });

  it('displays an error if username is not present', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy="input-password"]').type('pass');
    cy.get('[data-cy="button-Sign In"]').click();
    
    cy.get('[data-cy="sign-in-error-message"]').contains('Username is required.');
  });

  it('displays an error if password is not present', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy="input-username"]').type('username');
    cy.get('[data-cy="button-Sign In"]').click();
    
    cy.get('[data-cy="sign-in-error-message"]').contains('Password is required.');
  });

  it('displays an error if user does not exist', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy="input-username"]').type('username2');
    cy.get('[data-cy="input-password"]').type('pass');
    cy.get('[data-cy="button-Sign In"]').click();
    
    cy.get('[data-cy="sign-in-error-message"]').contains('User does not exist.');
  });

  it('displays an error if the password is incorrect', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy="input-username"]').type('username');
    cy.get('[data-cy="input-password"]').type('passs');
    cy.get('[data-cy="button-Sign In"]').click();
    
    cy.get('[data-cy="sign-in-error-message"]').contains('Incorrect password.');
  });
});