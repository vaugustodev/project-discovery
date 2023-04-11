import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const StyledSignIn = styled.div`
  width: 100%;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledErrorMsg = styled.p`
  height: 30px;
  margin-top: 0.5rem;
  color: ${theme.colors.error};
`;

export const StyledSignUpAnchorDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
`;

export const StyledSignUpAnchor = styled.a`
  margin-left: 0.5rem;
  color: ${theme.colors.headline};
`;