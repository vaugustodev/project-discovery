import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import { discoveryRoute } from '../../../routes/Discovery';
import { profileSettingsRoute } from '../../../routes/ProfileSettings';
import { signInRoute } from '../../../routes/SignIn';
import Navbar from '../';

describe('Navbar', () => {
  it('renders properly', () => {
    render(<Navbar />);

    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();

    const navbarLeftSide = screen.getByTestId('navbar-left-side');
    expect(navbarLeftSide).toBeInTheDocument();

    const logoSvg = screen.getByTestId('logo-svg');
    expect(logoSvg).toBeInTheDocument();

    const discoveryAnchor = screen.getByTestId('discovery-anchor');
    expect(discoveryAnchor).toBeInTheDocument();
    expect(discoveryAnchor).toHaveAttribute('href', discoveryRoute);

    const navbarRightSide = screen.getByTestId('navbar-right-side');
    expect(navbarRightSide).toBeInTheDocument();

    const profileSettingsAnchor = screen.getByTestId('profile-settings-anchor');
    expect(profileSettingsAnchor).toBeInTheDocument();
    expect(profileSettingsAnchor).toHaveAttribute('href', profileSettingsRoute);

    const logOutAnchor = screen.getByTestId('logout-anchor');
    expect(logOutAnchor).toBeInTheDocument();
    expect(logOutAnchor).toHaveAttribute('href', signInRoute);
  });
});