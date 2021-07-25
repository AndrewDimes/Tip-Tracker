import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {

    --primary-color: #5a71f5;
    --primary-color-alt: #3d4ca5;
    --primary-color-dark: #1a1e2c;
    --tip-green: rgb(27, 220, 20);
    --money-rose: rgb(179, 0, 36);
    --background: #080a11;
}

* {
    margin: 0;
    box-sizing: 0;
    padding: 0;
}

body {
  background-color: #080a11;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}
`;
