import { discoveryRoute } from '../../routes/Discovery';
import { profileSettingsRoute } from '../../routes/ProfileSettings';
import { signInRoute } from '../../routes/SignIn';
import LogoSvg from '../LogoSvg';
import {
  StyledNav,
  StyledNavLeftSide,
  StyledNavRightSide,
  StyledAnchor,
} from './style';

const Navbar = () => {
  return (
    <StyledNav data-testid='navbar'>
      <StyledNavLeftSide data-testid='navbar-left-side'>
        <LogoSvg data-testid='logo-svg' />
        <StyledAnchor
          data-testid='discovery-anchor'
          href={discoveryRoute}
        >
          Discovery
        </StyledAnchor>
      </StyledNavLeftSide>
      <StyledNavRightSide data-testid='navbar-right-side'>
        <StyledAnchor
          data-cy='profile-settings-anchor'
          data-testid='profile-settings-anchor'
          href={profileSettingsRoute}
        >
          Username
        </StyledAnchor>
        <StyledAnchor
          data-testid='logout-anchor'
          href={signInRoute}
        >
            Logout
        </StyledAnchor>
      </StyledNavRightSide>
    </StyledNav>
  );
};

export default Navbar;