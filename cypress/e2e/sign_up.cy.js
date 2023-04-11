describe('Sign Up', () => {
  it('can sign up properly with a new user', () => {
    cy.visit('http://localhost:3000/sign-up');

    cy.get('[data-cy="input-username"]').type('username2');
    cy.get('[data-cy="input-email"]').type('user@name2.com');
    cy.get('[data-cy="input-password"]').type('123');
    cy.get('[data-cy="input-confirmPassword"]').type('123');
    cy.get('[data-cy="button-Sign Up"]').click();

    cy.url().should('eq', 'http://localhost:3000/app/discovery');
  });

  it('displays an error if username, password, and confirm password are not present', () => {
    cy.visit('http://localhost:3000/sign-up');

    cy.get('[data-cy="button-Sign Up"]').click();

    cy.get('[data-cy="sign-up-error-message"]').contains('Username, password, and confirm password are required.');
  });

  it('displays an error if username and password are not present', () => {
    cy.visit('http://localhost:3000/sign-up');

    cy.get('[data-cy="input-confirmPassword"]').type('123');
    cy.get('[data-cy="button-Sign Up"]').click();

    cy.get('[data-cy="sign-up-error-message"]').contains('Username and password are required.');
  });

  it('displays an error if username and confirm password are not present', () => {
    cy.visit('http://localhost:3000/sign-up');

    cy.get('[data-cy="input-password"]').type('123');
    cy.get('[data-cy="button-Sign Up"]').click();

    cy.get('[data-cy="sign-up-error-message"]').contains('Username and confirm password are required.');
  });

  it('displays an error if password and confirm password are not present', () => {
    cy.visit('http://localhost:3000/sign-up');

    cy.get('[data-cy="input-username"]').type('username2');
    cy.get('[data-cy="button-Sign Up"]').click();

    cy.get('[data-cy="sign-up-error-message"]').contains('Password and confirm password are required.');
  });

  it('displays an error if username is not present', () => {
    cy.visit('http://localhost:3000/sign-up');

    cy.get('[data-cy="input-email"]').type('user@name2.com');
    cy.get('[data-cy="input-password"]').type('123');
    cy.get('[data-cy="input-confirmPassword"]').type('123');
    cy.get('[data-cy="button-Sign Up"]').click();

    cy.get('[data-cy="sign-up-error-message"]').contains('Username is required.');
  });

  it('displays an error if password is not present', () => {
    cy.visit('http://localhost:3000/sign-up');

    cy.get('[data-cy="input-username"]').type('username2');
    cy.get('[data-cy="input-email"]').type('user@name2.com');
    cy.get('[data-cy="input-confirmPassword"]').type('123');
    cy.get('[data-cy="button-Sign Up"]').click();

    cy.get('[data-cy="sign-up-error-message"]').contains('Password is required.');
  });

  it('displays an error if confirmPassword is not present', () => {
    cy.visit('http://localhost:3000/sign-up');

    cy.get('[data-cy="input-username"]').type('username2');
    cy.get('[data-cy="input-email"]').type('user@name2.com');
    cy.get('[data-cy="input-password"]').type('123');
    cy.get('[data-cy="button-Sign Up"]').click();

    cy.get('[data-cy="sign-up-error-message"]').contains('Confirm password is required.');
  });

  it('displays an error if password does not match', () => {
    cy.visit('http://localhost:3000/sign-up');

    cy.get('[data-cy="input-username"]').type('username2');
    cy.get('[data-cy="input-email"]').type('user@name2.com');
    cy.get('[data-cy="input-password"]').type('123');
    cy.get('[data-cy="input-confirmPassword"]').type('1234');
    cy.get('[data-cy="button-Sign Up"]').click();

    cy.get('[data-cy="sign-up-error-message"]').contains('Passwords do not match.');
  });
});