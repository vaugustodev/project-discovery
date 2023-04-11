import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import ProfileSettings from '../';

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => jest.fn(),
  useLoaderData: () => ({
      currentUser: {
        username: 'username',
        email: 'email',
      },
    }),
}));

jest.mock("../../../storage", () => ({
  ...(jest.requireActual("../../../storage")),
  getUser: () => true,
  getEmail: () => true,
}));

describe('ProfileSettings', () => {
  it('renders properly', () => {
    render(<ProfileSettings />);

    const profileSettings = screen.getByTestId('profile-settings');
    expect(profileSettings).toBeInTheDocument();

    const profileSettingsForm = screen.getByTestId('profile-settings-form');
    expect(profileSettingsForm).toBeInTheDocument();

    const usernameInput = screen.getByTestId('form-input-username');
    expect(usernameInput).toBeInTheDocument();

    const emailInput = screen.getByTestId('form-input-email');
    expect(emailInput).toBeInTheDocument();

    const saveButton = screen.getByTestId('form-button-Save');
    expect(saveButton).toBeInTheDocument();
  });

  it('displays the correct error message if it tries to save and username is not present', () => {
    render(<ProfileSettings />);

    const usernameInput = screen.getByTestId('form-input-input-username');
    fireEvent.change(usernameInput, {target: {value: ''}})

    const saveButton = screen.getByTestId('form-button-Save');
    fireEvent.click(saveButton);

    const errorMessage = screen.getByTestId('profile-settings-error-msg');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe('Username is required.');
  });

  it('displays the correct error message if it tries to save and username exists', () => {
    render(<ProfileSettings />);

    const usernameInput = screen.getByTestId('form-input-input-username');
    fireEvent.change(usernameInput, {target: {value: 'username2'}})

    const saveButton = screen.getByTestId('form-button-Save');
    fireEvent.click(saveButton);

    const errorMessage = screen.getByTestId('profile-settings-error-msg');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe('Username already in use.');
  });

  it('displays the correct error message if it tries to save and e-mail exists', () => {
    render(<ProfileSettings />);

    const emailInput = screen.getByTestId('form-input-input-email');
    fireEvent.change(emailInput, {target: {value: 'email2'}})

    const saveButton = screen.getByTestId('form-button-Save');
    fireEvent.click(saveButton);

    const errorMessage = screen.getByTestId('profile-settings-error-msg');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe('E-mail already in use.');
  });
});