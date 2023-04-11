import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const StyledNav = styled.nav`
  height: 50px;
  background-color: ${theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem;
`;

export const StyledNavLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledNavRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledAnchor = styled.a`
  color: ${theme.colors.headline};
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }
`;