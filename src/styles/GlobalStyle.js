import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';
import { BREAKPOINTS } from '../components/ReposCarousel';

const GlobalStyle = createGlobalStyle`
  ${theme};

  * {
    border: 0;
    margin: 0;
    padding: 0;
  }

  html {
    min-height: 100%;
    width: 100%;
    font-size: 16px;
    line-height: 1.5;
    background-color: ${theme.colors.background};
    color: ${theme.colors.paragraph};
    font-family: Helvetica, Arial, sans-serif;
  }

  body {
    width: 100%;
    height: 100vh;
  }

  #root {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  // react-multi-carousel customizations
  .react-multi-carousel-list {
    height: 170px;
    padding: 1rem 2rem;
  }

  .react-multiple-carousel__arrow--left {
    left: 0;
  }

  .react-multiple-carousel__arrow--right {
    right: 0;
  }

  // Centralize the carousel item in the
  // smaller screen size.
  @media only screen and (max-width: ${BREAKPOINTS[0]}px) {
    .react-multi-carousel-list {
      padding: 1rem 0;
    }

    .react-multi-carousel-list > ul > li {
      display: flex;
      justify-content: center;
    }
  }
`;

export default GlobalStyle;