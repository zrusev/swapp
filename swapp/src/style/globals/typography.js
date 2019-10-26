import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
  @import url('../fonts/SfDistantGalaxy-0l3d.ttf');

  :root {
    --font-size-body: 14px;
    --font-size-body-larger: 18px;
    --font-size-body-big: 20px;
    --font-size-body-huge: 24px; 

    --font-size-h1: 2.6em;
    --font-size-h2: 2.0em;
    --font-size-h3: 1.8em;
    --font-size-h4: 1.4em;
    --font-size-h5: 1.2em;
    --font-size-h6: 1em;
  }

  *, *:before, *:after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: var(--font-size-body, 14px)/1.5;
  }

  @media (min-width: 600px) {
    html { font-size: var(--font-size-body-larger, 18px) }
  }

  @media (min-width: 1024px) {
      html { font-size: var(--font-size-body-big, 20px) }
  }

  @media (min-width: 1600px) {
      html { font-size: var(--font-size-body-huge, 24px) }
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 1em;
    margin-bottom: 0.5em;
    font-weight: normal;
  }

  h1 { font-size: var(--font-size-h1, 2.6em); }
  h2 { font-size: var(--font-size-h2, 2.0em); }
  h3 { font-size: var(--font-size-h3, 1.8em); }
  h4 { font-size: var(--font-size-h4, 1.4em); }
  h5 { font-size: var(--font-size-h5, 1.2em); }
  h6 { font-size: var(--font-size-h6, 1em); }

  body {
    font-family: 'sf-distant-galaxy';
    background: ${({ theme: { background } }) => background};
    color: ${({ theme: { fontColor } }) => fontColor};
  }
`