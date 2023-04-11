import { Outlet } from "react-router-dom";

import Navbar from '../../components/Navbar';
import { StyledOutletDiv } from './style';

export var appRoute = '/app';

const App = () => {
  return (
    <>
      <Navbar data-testid='app-navbar' />
      <StyledOutletDiv data-testid='app-outlet-div'>
        <Outlet />
      </StyledOutletDiv>
    </>
  );
};

export default App;