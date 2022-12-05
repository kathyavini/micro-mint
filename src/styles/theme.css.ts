import {
  createTheme,
  createThemeContract,
  createGlobalTheme,
} from '@vanilla-extract/css';

import { mint, mintDark, sage, sageDark } from '@radix-ui/colors';

const root = createGlobalTheme(':root', {
  fonts: {
    // heading: 'Karla, sans-serif',
    body: '"Open Sans", sans-serif',
    heading: 'Cabin, sans-serif',
  },
  sizes: {
    respS: 'clamp(0.8rem, 0.7rem + 4vw, 1.7rem)',
    respM: 'clamp(1.3rem, 0.9rem + 2vw, 2rem)',
    respL: 'clamp(2rem, 1rem + 4vw, 4rem)',
    respXL: 'clamp(3rem, 2rem + 4vw, 5rem)',
  },
  borders: {
    sm: '3px',
    md: '6px',
    images: '0px',
    buttons: '6px',
  },
  vw: {
    // replace rem with vw for pdf printing
    vw1: '2.5rem',
    vw2: '2rem',
    vw3: '1.8rem',
    vw4: '1.6rem',
    vw5: '1.2rem',
    vw6: '1rem',
    vw7: '0.8rem',
    vw8: '0.7rem',
  },
});

export const breakpoints = {
  sm: '650px',
  md: '860px',
};

const colors = createThemeContract({
  white: '', //
  black: '',
  text: '',
  textMuted: '',
  background: '',
  backgroundSubtle: '',
  component: '',
  componentHover: '',
  componentSelect: '',
  borders: '',
  bordersHover: '',
  solid: '',
  solidHover: '',
  accentSolid: '',
  accentSolidHover: '',
  accentBackground: '',
  accentComponent: '',
  accentComponentHover: '',
  accentComponentSelected: '',
  accentBorders: '',
  accentBordersHover: '',
  accentText: '',
  accentTextMuted: '',
});

export const lightTheme = createTheme(colors, {
  white: '#ffffff',
  black: '#000000',

  background: sage.sage1,
  backgroundSubtle: sage.sage2,

  component: sage.sage3,
  componentHover: sage.sage4,
  componentSelect: sage.sage5,

  borders: sage.sage7,
  bordersHover: sage.sage8,

  solid: sage.sage9,
  solidHover: sage.sage10,

  text: sage.sage12,
  textMuted: sage.sage11,

  accentBackground: mint.mint2,

  accentComponent: mint.mint4,
  accentComponentHover: mint.mint5,
  accentComponentSelected: mint.mint6,

  accentBorders: mint.mint7,
  accentBordersHover: mint.mint8,

  accentSolid: mint.mint9,
  accentSolidHover: mint.mint10,

  accentText: mint.mint12,
  accentTextMuted: mint.mint11,
});

export const darkTheme = createTheme(colors, {
  white: '#000000', // sorry
  black: '#ffffff',

  background: sageDark.sage1,
  backgroundSubtle: sageDark.sage2,

  component: sageDark.sage3,
  componentHover: sageDark.sage4,
  componentSelect: sageDark.sage5,

  borders: sageDark.sage7,
  bordersHover: sageDark.sage8,

  solid: sageDark.sage9,
  solidHover: sageDark.sage10,

  text: sageDark.sage12,
  textMuted: sageDark.sage11,

  accentBackground: mintDark.mint2,

  accentComponent: mintDark.mint4,
  accentComponentHover: mintDark.mint5,
  accentComponentSelected: mintDark.mint6,

  accentBorders: mintDark.mint7,
  accentBordersHover: mintDark.mint8,

  accentSolid: mintDark.mint9,
  accentSolidHover: mintDark.mint10,

  accentText: mintDark.mint12,
  accentTextMuted: mintDark.mint11,
});

export const vars = { ...root, colors };
