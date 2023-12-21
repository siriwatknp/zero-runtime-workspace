'use client';
import * as React from 'react';
import clsx from 'clsx';
import { unstable_composeClasses as composeClasses } from '@mui/base/composeClasses';
import { alpha } from '@mui/system/colorManipulator';
import { shouldForwardProp } from '@mui/system/createStyled';
import { styled } from '@mui/zero-runtime';
import getOverlayAlpha from '@mui/material/styles/getOverlayAlpha';
import useThemeProps from '@mui/material/styles/useThemeProps';
import useTheme from '@mui/material/styles/useTheme';
import { getPaperUtilityClass } from './paperClasses';

export const rootShouldForwardProp = (prop) =>
  shouldForwardProp(prop) && prop !== 'classes';

const useUtilityClasses = (ownerState) => {
  const { square, elevation, variant, classes } = ownerState;

  const slots = {
    root: [
      'root',
      variant,
      !square && 'rounded',
      variant === 'elevation' && `elevation${elevation}`,
    ],
  };

  return composeClasses(slots, getPaperUtilityClass, classes);
};

const PaperRoot = styled('div', {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop),
  name: 'MuiPaper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      styles[ownerState.variant],
      !ownerState.square && styles.rounded,
      ownerState.variant === 'elevation' &&
        styles[`elevation${ownerState.elevation}`],
    ];
  },
})(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.primary,
  transition: theme.transitions.create('box-shadow'),
  variants: [
    {
      props: (ownerState) => !ownerState.square,
      style: {
        borderRadius: theme.shape.borderRadius,
      },
    },
    {
      props: (ownerState) => ownerState.variant === 'outlined',
      style: {
        border: `1px solid ${(theme.vars || theme).palette.divider}`,
      },
    },
    {
      props: (ownerState) => ownerState.variant === 'elevation',
      style: {
        boxShadow: ({ ownerState }) =>
          (theme.vars || theme).shadows[ownerState.elevation],
        ...(!theme.vars &&
          theme.palette.mode === 'dark' && {
            backgroundImage: ({ ownerState }) =>
              `linear-gradient(${alpha(
                '#fff',
                getOverlayAlpha(ownerState.elevation),
              )}, ${alpha('#fff', getOverlayAlpha(ownerState.elevation))})`,
          }),
        ...(theme.vars && {
          backgroundImage: ({ ownerState }) =>
            theme.vars.overlays?.[ownerState.elevation],
        }),
      },
    },
  ],
}));

const Paper = React.forwardRef(function Paper(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'MuiPaper' });

  const {
    className,
    component = 'div',
    elevation = 1,
    square = false,
    variant = 'elevation',
    ...other
  } = props;

  const ownerState = {
    ...props,
    component,
    elevation,
    square,
    variant,
  };

  const classes = useUtilityClasses(ownerState);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme();
    if (theme.shadows[elevation] === undefined) {
      console.error(
        [
          `MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`,
          `Please make sure that \`theme.shadows[${elevation}]\` is defined.`,
        ].join('\n'),
      );
    }
  }

  return (
    <PaperRoot
      as={component}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      ref={ref}
      {...other}
    />
  );
});

export default Paper;
