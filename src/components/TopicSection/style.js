import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const StyledSelectDiv = styled.div`
  margin-top: 1rem;
  display: ${props => props.alignVertically ? "block" : "flex"};
  align-items: ${props => props.alignVertically ? "" : "center"};
  gap: 0.5rem;
`;

export const StyledSelect = styled.select`
  border-radius: 2px;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.headline};
  height: 23px;
  padding: 0.2rem;
  margin: ${props => props.alignVertically ? "1em 0 1em 0" : "0"};
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;

export const StyledReposStatus = styled.div`
  height: 202px;
  box-sizing: border-box;
  padding-top: 1rem;
`;