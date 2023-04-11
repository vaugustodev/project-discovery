import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const StyledProfileSettings = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledErrorMsg = styled.p`
  height: 30px;
  margin-top: 0.5rem;
  width: 320px;
  color: ${theme.colors.error};
`;