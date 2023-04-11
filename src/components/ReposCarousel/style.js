import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const StyledRepoCard = styled.div`
  position: relative;
  width: 232px;
  margin: ${props => props.isSmallerDevice ? '0' : '0 4rem 0 0'};

  &:hover > button {
    transform: translate(0.7em, -0.25em) scale(1.1);
    transition-duration: 0.3s;
  }

  &:hover > a {
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${theme.colors.headline};
  display: flex;
  justify-content: center;
  transition-duration: 0.3s;
`;

export const StyledInfoDiv = styled.div`
  background-color: ${theme.colors.secondary};
  padding: 1rem;
  border-radius: 5px;
  height: 130px;
  width: 200px;
`;

export const StyledIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledNameDiv = styled.div`
  display: flex;
  gap: 0.2rem;
  font-size: 0.8rem;
`;

export const StyledNameSpan = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  color: ${theme.colors.accent};
`;

export const StyledUserDiv = styled.div`
  display: flex;
  gap: 0.2rem;
  font-size: 0.8rem;
`;

export const StyledOwnerSpan = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.8rem;
`;

export const StyledStarButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  z-index: 5;
  cursor: pointer;
  transition-duration: 0.3s;
`;