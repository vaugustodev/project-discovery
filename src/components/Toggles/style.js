import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const StyledToggles = styled.div`
  margin: 1rem 0 2rem 0;
`;

export const StyledToggleButton = styled.button`
  background-color: ${props => (props.toggleOn ? theme.colors.accent : theme.colors.headline)};
  box-sizing: border-box;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0.5rem 0.5rem 0 0;
  border-radius: 15px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;