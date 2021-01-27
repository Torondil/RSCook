import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#f8f9fa !important',
  fontColor: '#24292e !important',
  backgroundColor: '#007bff !important',
  buttonHover: '#0069d9 !important',
  fontDarkColor: '#ffc107 !important',
  mainImg: '#434852 !important',
};

export const darkTheme = {
  body: '#24292e !important',
  fontColor: '#b1bac4 !important',
  backgroundColor: '#45638e  !important',
  buttonHover: '#314d6c !important',
  fontDarkColor: '#EC8B83 !important',
  mainImg: '#D0675F !important',
};

export const GlobalStyles = createGlobalStyle`

  body, nav, .swiper-container, footer, .theme-container {
    background-color: ${(props) => props.theme.body};
  }

  a, span, .bio-info, .developers-title {
    color: ${(props) => props.theme.fontColor};
  }

  .theme-main {
    color: ${(props) => props.theme.mainImg};
  }

  .theme-button {
    background-color: ${(props) => props.theme.backgroundColor};
    border-color: ${(props) => props.theme.backgroundColor};
  }

  .theme-button:hover {
    background-color: ${(props) => props.theme.buttonHover};
    border-color: ${(props) => props.theme.buttonHover};
  }

  .text-warning {
    color: ${(props) => props.theme.fontDarkColor};
  }

`
