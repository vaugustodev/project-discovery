import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const StyledFormButton = styled.button`
  width 100%;
  height: 40px;
  margin-top: 2rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.headline};
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;