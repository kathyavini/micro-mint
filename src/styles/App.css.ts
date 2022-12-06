import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars, breakpoints } from '../styles/theme.css';
import { stack, row } from '../styles/recipes.css';

globalStyle('#app', {
  width: '100vw',
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  position: 'relative',
  overflowX: 'hidden',
});

export const container = style([
  stack({ gap: 'xs' }),
  {
    width: '90vw',
    marginBlock: '5vh',
    '@media': {
      [`screen and (max-width: ${breakpoints.md})`]: {
        gap: '0',
      },
    },
  },
]);

export const pageTitle = style({
  color: vars.colors.accentText,
  fontSize: vars.sizes.respL,
  fontWeight: 400,
});

export const sectionTitle = style({
  color: vars.colors.accentText,
  fontSize: vars.vw.vw4,
  fontWeight: 700,

  '@media': {
    [`screen and (max-width: ${breakpoints.md})`]: {
      fontSize: vars.vw.vw5,
    },
  },
});

export const mainText = style({
  fontSize: vars.vw.vw5,
  fontWeight: 500,
  color: vars.colors.text,
});

export const contentText = style({
  fontSize: vars.vw.vw8,
  color: vars.colors.text,
  fontWeight: 400,
  fontFamily: vars.fonts.heading,
});

export const textMuted = style({
  fontSize: vars.vw.vw7,
  fontWeight: 400,
  color: vars.colors.textMuted,
});

export const boldMuted = style({
  fontSize: vars.vw.vw4,
  fontFamily: vars.fonts.heading,
  fontWeight: 400,
  color: vars.colors.textMuted,

  '@media': {
    [`screen and (max-width: ${breakpoints.md})`]: {
      fontSize: vars.vw.vw5,
    },
  },
});

export const boldMutedColor = style({
  fontSize: vars.vw.vw5,
  fontWeight: 600,
  color: vars.colors.accentTextMuted,
});

export const italicMutedColor = style({
  fontSize: vars.vw.vw5,
  fontWeight: 400,
  color: vars.colors.accentTextMuted,

  fontStyle: 'italic',
});

export const italicMutedSmall = style({
  fontSize: vars.vw.vw7,
  fontWeight: 400,
  color: vars.colors.textMuted,

  fontStyle: 'italic',
});

export const results = style([
  row({ gap: 'md', justify: 'between' }),
  {
    maxWidth: '100%',
    '@media': {
      [`screen and (max-width: ${breakpoints.md})`]: {
        padding: '0',
        gap: '0',
      },
    },
  },
]);

globalStyle(`${results} p`, {
  color: vars.colors.text,
  '@media': {
    [`screen and (max-width: ${breakpoints.md})`]: {
      padding: '0rem',
    },
  },
});

export const filteredResults = style([
  row({ gap: 'md', justify: 'between' }),
  {
    backgroundColor: vars.colors.accentBackground,
    padding: '1rem',
    maxWidth: '100%',
    '@media': {
      [`screen and (max-width: ${breakpoints.md})`]: {
        padding: '0',
        gap: '0',
      },
    },
  },
]);

globalStyle(`${filteredResults} p`, {
  color: vars.colors.accentTextMuted,
  '@media': {
    [`screen and (max-width: ${breakpoints.md})`]: {
      padding: '0rem',
    },
  },
});

export const total = style([
  row({ justify: 'end', gap: 'sm' }),
  {
    '@media': {
      [`screen and (max-width: ${breakpoints.md})`]: {
        fontSize: vars.vw.vw4,
      },
    },
  },
]);

export const collapseToggle = style({
  padding: '.5em .5em',
  border: 'none',
  background: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.colors.textMuted,
  fontSize: '2rem',

  /* This transition is same as https://www.radix-ui.com/docs/primitives/components/navigation-menu */
  transition: 'transform 250ms ease',
  ':active': {
    filter: 'brightness(1.1)',
  },
  selectors: {
    '&[data-state="open"]': {
      transform: 'rotate(-180deg)',
    },
  },
});
