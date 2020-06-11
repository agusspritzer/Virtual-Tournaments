import { createGlobalStyle } from 'styled-components';
import { pxToRem } from 'utils/helpers';
import { Colors } from 'constants';
export const GlobalStyles = createGlobalStyle`
  /* root vars */
  :root {
    --black: ${Colors.black.toCSS()};
    --white: ${Colors.white.toCSS()};
    --background: ${Colors.background.toCSS()};

    

    --f-maison:"Maison Neue Extended", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --f-octosquares:"TTOctosquares", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    background-color: var(--background);
    color: var(--white);
    --safe-area-inset-bottom: env(safe-area-inset-bottom);
    font-family: var(--f-maison);
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Natural flow and rhythm in articles by default */
  article > * + * {
    margin-top: 1em;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  .hackSpace {
    width: 100%;
    height: auto;
    margin-top: 50px;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  html {
  }

  /* 
      Utilitary classes & Styles
  */


/**
* Font declaration
 */

 @font-face {
    font-family: 'Maison Neue Extended';
    src: url('/fonts/MaisonNeue-ExtendedDemiBold.woff2') format('woff2'),
        url('/fonts/MaisonNeue-ExtendedDemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Maison Neue Extended';
    src: url('/fonts/MaisonNeue-ExtendedLight.woff2') format('woff2'),
        url('/fonts/MaisonNeue-ExtendedLight.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'TTOctosquares';
    src: url('/fonts/TTOctosquares-Medium.woff2') format('woff2'),
        url('/fonts/TTOctosquares-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'TTOctosquares';
    src: url('/fonts/TTOctosquares-Bold.woff2') format('woff2'),
        url('/fonts/TTOctosquares-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'TTOctosquares';
    src: url('/fonts/TTOctosquares-Light.woff2') format('woff2'),
        url('/fonts/TTOctosquares-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Maison Neue Extended';
    src: url('/fonts/MaisonNeue-ExtendedBold.woff2') format('woff2'),
        url('/fonts/MaisonNeue-ExtendedBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'TTOctosquares';
    src: url('/fonts/TTOctosquares-Black.woff2') format('woff2'),
        url('/fonts/TTOctosquares-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Maison Neue Extended';
    src: url('/fonts/MaisonNeue-ExtendedExtraBold.woff2') format('woff2'),
        url('/fonts/MaisonNeue-ExtendedExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Maison Neue Extended';
    src: url('/fonts/MaisonNeue-ExtendedBlack.woff2') format('woff2'),
        url('/fonts/MaisonNeue-ExtendedBlack.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Maison Neue Extended';
    src: url('/fonts/MaisonNeue-ExtendedMedium.woff2') format('woff2'),
        url('/fonts/MaisonNeue-ExtendedMedium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Maison Neue Extended';
    src: url('/fonts/MaisonNeue-ExtendedBook.woff2') format('woff2'),
        url('/fonts/MaisonNeue-ExtendedBook.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}


`;
