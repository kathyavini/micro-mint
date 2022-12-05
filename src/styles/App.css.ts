import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';
import { stack, row } from '../styles/recipes.css';

globalStyle('h1', {
  fontSize: vars.vw.vw1,
});

globalStyle('h2', {
  fontSize: vars.vw.vw2,
});

globalStyle('h3', {
  fontSize: vars.vw.vw3,
});

globalStyle('p, li, a', {
  fontSize: vars.vw.vw6,
});

export const appContainer = style([
  {
    width: '100vw',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    position: 'relative',
    overflowX: 'hidden',
  },
]);

export const page = style([
  stack({ gap: 'xs' }),
  {
    width: '90vw',
    marginBlock: '5vh',
  },
]);

export const infoText = style({
  marginTop: '-0.7rem',
});

export const corner = style({
  alignSelf: 'flex-end',
  marginTop: '2vh',
});

export const headingRow = style({
  width: '100%',
  display: 'flex',
  flexFlow: 'row-reverse wrap',
  justifyContent: 'space-between',
});

globalStyle(`${headingRow} button`, {
  alignSelf: 'flex-start',
});

globalStyle(`${headingRow} h1`, {
  width: '100%',
});

export const pageTitle = style({
  color: vars.colors.accentText,
  fontSize: vars.sizes.respL,
  fontWeight: 400,
});

export const sectionTitle = style({
  color: vars.colors.accentText,
  fontSize: vars.vw.vw4,
  fontWeight: 700,
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

globalStyle('ul', {
  paddingLeft: vars.vw.vw6,
});

globalStyle('li', {
  // listStyleType: 'circle',
});

globalStyle('li::marker', {
  color: vars.colors.accentTextMuted,
});

export const results = style([
  row({ gap: 'md', justify: 'between' }),
  {
    backgroundColor: vars.colors.accentBackground,
    padding: '1rem',
    maxWidth: '100%',
  },
]);

globalStyle(`${results} p`, {
  color: vars.colors.accentTextMuted,
  wordBreak: 'break-all',
});
