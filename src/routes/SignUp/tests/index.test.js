import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import SignUp from '../';

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => jest.fn(),
}));

jest.mock("../../../storage", () => ({
  ...(jest.requireActual("../../../storage")),
  getUser: (username) => username === 'inUse' ? true : false,
  getEmail: () => true,
}));

describe('SignUp', () => {
  it('renders properly', () => {
    render(<SignUp />);

    const signUp = screen.getByTestId('sign-up');
    expect(signUp).toBeInTheDocument();

    const signUpForm = screen.getByTestId('sign-up-form');
    expect(signUpForm).toBeInTheDocument();

    const signUpUsernameInput = screen.getByTestId('form-input-username');
    expect(signUpUsernameInput).toBeInTheDocument();

    const signUpPasswordInput = screen.getByTestId('form-input-password');
    expect(signUpPasswordInput).toBeInTheDocument();

    const signUpConfirmPasswordInput = screen.getByTestId('form-input-confirmPassword');
    expect(signUpConfirmPasswordInput).toBeInTheDocument();

    const signUpButton = screen.getByTestId('form-button-Sign Up');
    expect(signUpButton).toBeInTheDocument();
  });

  it('displays the correct error message if it tries to sign up and username, password, and cofirm password are not present', () => {
    render(<SignUp />);

    const signUpButton = screen.getByTestId('form-button-Sign Up');
    fireEvent.click(signUpButton);

    const signUpErrorMessage = screen.getByTestId('sign-up-error-message');
    expect(signUpErrorMessage).toBeInTheDocument();
    expect(signUpErrorMessage.textContent).toBe('Username, password, and confirm password are required.');
  });

  it('displays the correct error message if it tries to sign up and username and password are not present', () => {
    render(<SignUp />);

    const confirmPasswordInput = screen.getByTestId('form-input-input-confirmPassword');
    fireEvent.change(confirmPasswordInput, {target: {value: 'confirmPassword'}});

    const signUpButton = screen.getByTestId('form-button-Sign Up');
    fireEvent.click(signUpButton);

    const signUpErrorMessage = screen.getByTestId('sign-up-error-message');
    expect(signUpErrorMessage).toBeInTheDocument();
    expect(signUpErrorMessage.textContent).toBe('Username and password are required.');
  });

  it('displays the correct error message if it tries to sign up and username and confirm password are not present', () => {
    render(<SignUp />);

    const passwordInput = screen.getByTestId('form-input-input-password');
    fireEvent.change(passwordInput, {target: {value: 'password'}});

    const signUpButton = screen.getByTestId('form-button-Sign Up');
    fireEvent.click(signUpButton);

    const signUpErrorMessage = screen.getByTestId('sign-up-error-message');
    expect(signUpErrorMessage).toBeInTheDocument();
    expect(signUpErrorMessage.textContent).toBe('Username and confirm password are required.');
  });

  it('displays the correct error message if it tries to sign up and password and confirm password are not present', () => {
    render(<SignUp />);

    const usernameInput = screen.getByTestId('form-input-input-username');
    fireEvent.change(usernameInput, {target: {value: 'username'}});

    const signUpButton = screen.getByTestId('form-button-Sign Up');
    fireEvent.click(signUpButton);

    const signUpErrorMessage = screen.getByTestId('sign-up-error-message');
    expect(signUpErrorMessage).toBeInTheDocument();
    expect(signUpErrorMessage.textContent).toBe('Password and confirm password are required.');
  });

  it('displays the correct error message if it tries to sign up and username is not present', () => {
    render(<SignUp />);

    const passwordInput = screen.getByTestId('form-input-input-password');
    fireEvent.change(passwordInput, {target: {value: 'password'}});

    const confirmPasswordInput = screen.getByTestId('form-input-input-confirmPassword');
    fireEvent.change(confirmPasswordInput, {target: {value: 'confirmPassword'}})

    const signUpButton = screen.getByTestId('form-button-Sign Up');
    fireEvent.click(signUpButton);

    const signUpErrorMessage = screen.getByTestId('sign-up-error-message');
    expect(signUpErrorMessage).toBeInTheDocument();
    expect(signUpErrorMessage.textContent).toBe('Username is required.');
  });

  it('displays the correct error message if it tries to sign up and password is not present', () => {
    render(<SignUp />);

    const usernameInput = screen.getByTestId('form-input-input-username');
    fireEvent.change(usernameInput, {target: {value: 'username'}});

    const confirmPasswordInput = screen.getByTestId('form-input-input-confirmPassword');
    fireEvent.change(confirmPasswordInput, {target: {value: 'confirmPassword'}});

    const signUpButton = screen.getByTestId('form-button-Sign Up');
    fireEvent.click(signUpButton);

    const signUpErrorMessage = screen.getByTestId('sign-up-error-message');
    expect(signUpErrorMessage).toBeInTheDocument();
    expect(signUpErrorMessage.textContent).toBe('Password is required.');
  });

  it('displays the correct error message if it tries to sign up and confirm password is not present', () => {
    render(<SignUp />);

    const usernameInput = screen.getByTestId('form-input-input-username');
    fireEvent.change(usernameInput, {target: {value: 'username'}});

    const passwordInput = screen.getByTestId('form-input-input-password');
    fireEvent.change(passwordInput, {target: {value: 'password'}});

    const signUpButton = screen.getByTestId('form-button-Sign Up');
    fireEvent.click(signUpButton);

    const signUpErrorMessage = screen.getByTestId('sign-up-error-message');
    expect(signUpErrorMessage).toBeInTheDocument();
    expect(signUpErrorMessage.textContent).toBe('Confirm password is required.');
  });

  it('displays the correct error message if it tries to sign up and the password do not match', () => {
    render(<SignUp />);

    const usernameInput = screen.getByTestId('form-input-input-username');
    fireEvent.change(usernameInput, {target: {value: 'username'}});

    const passwordInput = screen.getByTestId('form-input-input-password');
    fireEvent.change(passwordInput, {target: {value: 'password'}});

    const confirmPasswordInput = screen.getByTestId('form-input-input-confirmPassword');
    fireEvent.change(confirmPasswordInput, {target: {value: 'differentPassword'}});

    const signUpButton = screen.getByTestId('form-button-Sign Up');
    fireEvent.click(signUpButton);

    const signUpErrorMessage = screen.getByTestId('sign-up-error-message');
    expect(signUpErrorMessage).toBeInTheDocument();
    expect(signUpErrorMessage.textContent).toBe('Passwords do not match.');
  });

  it('displays the correct error message if it tries to sign up and the username is already in use', () => {
    render(<SignUp />);

    const usernameInput = screen.getByTestId('form-input-input-username');
    fireEvent.change(usernameInput, {target: {value: 'inUse'}});

    const passwordInput = screen.getByTestId('form-input-input-password');
    fireEvent.change(passwordInput, {target: {value: 'password'}});

    const confirmPasswordInput = screen.getByTestId('form-input-input-confirmPassword');
    fireEvent.change(confirmPasswordInput, {target: {value: 'password'}});

    const signUpButton = screen.getByTestId('form-button-Sign Up');
    fireEvent.click(signUpButton);

    const signUpErrorMessage = screen.getByTestId('sign-up-error-message');
    expect(signUpErrorMessage).toBeInTheDocument();
    expect(signUpErrorMessage.textContent).toBe('Username already in use.');
  });

  it('displays the correct error message if it tries to sign up and the e-mail is already in use', () => {
    render(<SignUp />);

    const usernameInput = screen.getByTestId('form-input-input-username');
    fireEvent.change(usernameInput, {target: {value: 'username'}});

    const emailInput = screen.getByTestId('form-input-input-email');
    fireEvent.change(emailInput, {target: {value: 'email'}});

    const passwordInput = screen.getByTestId('form-input-input-password');
    fireEvent.change(passwordInput, {target: {value: 'password'}});

    const confirmPasswordInput = screen.getByTestId('form-input-input-confirmPassword');
    fireEvent.change(confirmPasswordInput, {target: {value: 'password'}});

    const signUpButton = screen.getByTestId('form-button-Sign Up');
    fireEvent.click(signUpButton);

    const signUpErrorMessage = screen.getByTestId('sign-up-error-message');
    expect(signUpErrorMessage).toBeInTheDocument();
    expect(signUpErrorMessage.textContent).toBe('E-mail already in use.');
  });

  it('displays the correct error message if it tries to sign up and could not fetch the user', () => {
    render(<SignUp />);

    const usernameInput = screen.getByTestId('form-input-input-username');
    fireEvent.change(usernameInput, {target: {value: 'username'}});

    const passwordInput = screen.getByTestId('form-input-input-password');
    fireEvent.change(passwordInput, {target: {value: 'password'}});

    const confirmPasswordInput = screen.getByTestId('form-input-input-confirmPassword');
    fireEvent.change(confirmPasswordInput, {target: {value: 'password'}});

    const signUpButton = screen.getByTestId('form-button-Sign Up');
    fireEvent.click(signUpButton);

    const signUpErrorMessage = screen.getByTestId('sign-up-error-message');
    expect(signUpErrorMessage).toBeInTheDocument();
    expect(signUpErrorMessage.textContent).toBe("Error fetching the new user. Cant't redirect.");
  });
});