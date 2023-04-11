import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import SignIn from '../';

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => jest.fn(),
}));

jest.mock("../../../storage", () => ({
  ...(jest.requireActual("../../../storage")),
  getUser: () => false,
}));

describe('SignIn', () => {
  it('renders properly', () => {
    render(<SignIn />);

    const signIn = screen.getByTestId('sign-in');
    expect(signIn).toBeInTheDocument();

    const signInForm = screen.getByTestId('sign-in-form');
    expect(signInForm).toBeInTheDocument();

    const signInUsernameInput = screen.getByTestId('form-input-username');
    expect(signInUsernameInput).toBeInTheDocument();

    const signInPasswordInput = screen.getByTestId('form-input-password');
    expect(signInPasswordInput).toBeInTheDocument();

    const signInButton = screen.getByTestId('form-button-Sign In');
    expect(signInButton).toBeInTheDocument();

    const signUpAnchorDiv = screen.getByTestId('sign-up-anchor-div');
    expect(signUpAnchorDiv).toBeInTheDocument();

    const signUpParagraph = screen.getByTestId('sign-up-paragraph');
    expect(signUpParagraph).toBeInTheDocument();

    const signUpAnchor = screen.getByTestId('sign-up-anchor');
    expect(signUpAnchor).toBeInTheDocument();
  });

  it('displays the correct error message if it tries to sign in and username and password are not present', () => {
    render(<SignIn />);

    const signInButton = screen.getByTestId('form-button-Sign In');
    fireEvent.click(signInButton);

    const signInErrorMessage = screen.getByTestId('sign-in-error-message');
    expect(signInErrorMessage).toBeInTheDocument();
    expect(signInErrorMessage.textContent).toBe('Username and password are required.');
  });

  it('displays the correct error message if it tries to sign in and username is not present', () => {
    render(<SignIn />);

    const passwordInput = screen.getByTestId('form-input-input-password');
    fireEvent.change(passwordInput, {target: {value: 'password'}})

    const signInButton = screen.getByTestId('form-button-Sign In');
    fireEvent.click(signInButton);

    const signInErrorMessage = screen.getByTestId('sign-in-error-message');
    expect(signInErrorMessage).toBeInTheDocument();
    expect(signInErrorMessage.textContent).toBe('Username is required.');
  });

  it('displays the correct error message if it tries to sign in and password is not present', () => {
    render(<SignIn />);

    const usernameInput = screen.getByTestId('form-input-input-username');
    fireEvent.change(usernameInput, {target: {value: 'username'}})

    const signInButton = screen.getByTestId('form-button-Sign In');
    fireEvent.click(signInButton);

    const signInErrorMessage = screen.getByTestId('sign-in-error-message');
    expect(signInErrorMessage).toBeInTheDocument();
    expect(signInErrorMessage.textContent).toBe('Password is required.');
  });

  it('displays the correct error message if it tries to sign in and user does not exist', () => {
    render(<SignIn />);

    const usernameInput = screen.getByTestId('form-input-input-username');
    fireEvent.change(usernameInput, {target: {value: 'username'}})

    const passwordInput = screen.getByTestId('form-input-input-password');
    fireEvent.change(passwordInput, {target: {value: 'password'}})

    const signInButton = screen.getByTestId('form-button-Sign In');
    fireEvent.click(signInButton);

    const signInErrorMessage = screen.getByTestId('sign-in-error-message');
    expect(signInErrorMessage).toBeInTheDocument();
    expect(signInErrorMessage.textContent).toBe('User does not exist.');
  });
});