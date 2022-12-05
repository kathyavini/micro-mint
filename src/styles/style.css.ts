import { style, styleVariants, globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const buttonBase = style({
  padding: '0.7rem 2rem',

  borderRadius: vars.borders.buttons,

  fontFamily: vars.fonts.body,
  fontSize: '1rem',
  fontWeight: 400,
  textTransform: 'uppercase',

  ':active': {
    filter: 'brightness(1.1)',
  },
});

export const button = styleVariants({
  primary: [
    buttonBase,
    {
      backgroundColor: 'transparent',
      border: `1px solid ${vars.colors.solid}`,
      color: vars.colors.text,

      ':hover': {
        color: vars.colors.accentTextMuted,
        border: `1px solid ${vars.colors.accentTextMuted}`,
      },
    },
  ],
  filled: [
    buttonBase,
    {
      backgroundColor: vars.colors.accentComponent,
      color: vars.colors.accentText,
      border: `1px solid ${vars.colors.accentComponent}`,

      ':hover': {
        backgroundColor: vars.colors.accentComponentHover,
        border: `1px solid ${vars.colors.accentComponentHover}`,
      },
    },
  ],
});

export const uploadButton = style({
  selectors: {
    '&::file-selector-button': {
      border: `1px solid ${vars.colors.accentComponent}`,
      padding: '0.5rem 0.7rem',
      borderRadius: vars.borders.md,

      fontFamily: vars.fonts.body,
      fontSize: '1rem',

      backgroundColor: vars.colors.accentComponent,
      color: vars.colors.black,
    },

    '&::file-selector-button:hover': {
      backgroundColor: vars.colors.accentComponentHover,
      border: `1px solid ${vars.colors.accentComponentHover}`,
    },
    '&::file-selector-button:active': {
      filter: 'brightness(1.1)',
    },
  },
});

export const themeToggle = style({
  padding: '.5em .5em',
  backgroundColor: vars.colors.accentComponent,
  borderRadius: vars.borders.md,
  color: vars.colors.accentText,
  border: 'none',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  ':hover': {
    backgroundColor: vars.colors.accentComponentHover,
  },

  ':active': {
    filter: 'brightness(1.1)',
  },
});

globalStyle(`${themeToggle} span`, {
  fontSize: vars.sizes.respL,
});

export const themeFocus = style({
  ':focus': {
    outline: `3px solid ${vars.colors.accentTextMuted}`,
  },
  ':focus-visible': {
    outline: `3px solid ${vars.colors.accentTextMuted}`,
  },
});
