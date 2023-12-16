'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/zero-runtime';
import { unstable_composeClasses as composeClasses } from '@mui/base/composeClasses';
import { shouldForwardProp } from '@mui/system/createStyled';
import { alpha } from '@mui/system/colorManipulator';
import useThemeProps from '@mui/material/styles/useThemeProps';
import { getDividerUtilityClass } from './dividerClasses';

export const rootShouldForwardProp = (prop) =>
  shouldForwardProp(prop) &&
  prop !== 'classes' &&
  prop !== 'focusVisibleClassName';

const useUtilityClasses = (ownerState) => {
  const {
    absolute,
    children,
    classes,
    flexItem,
    light,
    orientation,
    textAlign,
    variant,
  } = ownerState;

  const slots = {
    root: [
      'root',
      absolute && 'absolute',
      variant,
      light && 'light',
      orientation === 'vertical' && 'vertical',
      flexItem && 'flexItem',
      children && 'withChildren',
      children && orientation === 'vertical' && 'withChildrenVertical',
      textAlign === 'right' && orientation !== 'vertical' && 'textAlignRight',
      textAlign === 'left' && orientation !== 'vertical' && 'textAlignLeft',
    ],
    wrapper: ['wrapper', orientation === 'vertical' && 'wrapperVertical'],
  };

  return composeClasses(slots, getDividerUtilityClass, classes);
};

const DividerRoot = styled('div', {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop),
  name: 'MuiDivider',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.absolute && styles.absolute,
      styles[ownerState.variant],
      ownerState.light && styles.light,
      ownerState.orientation === 'vertical' && styles.vertical,
      ownerState.flexItem && styles.flexItem,
      ownerState.children && styles.withChildren,
      ownerState.children &&
        ownerState.orientation === 'vertical' &&
        styles.withChildrenVertical,
      ownerState.textAlign === 'right' &&
        ownerState.orientation !== 'vertical' &&
        styles.textAlignRight,
      ownerState.textAlign === 'left' &&
        ownerState.orientation !== 'vertical' &&
        styles.textAlignLeft,
    ];
  },
})(({ theme }) => ({
  margin: 0, // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: (theme.vars || theme).palette.divider,
  borderBottomWidth: 'thin',
  variants: [
    {
      props: (ownerState) => ownerState.absolute,
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
      },
    },
    {
      props: (ownerState) => ownerState.light,
      style: {
        borderColor: theme.vars
          ? `rgba(${theme.vars.palette.dividerChannel} / 0.08)`
          : alpha(theme.palette.divider, 0.08),
      },
    },
    {
      props: (ownerState) => ownerState.variant === 'inset',
      style: {
        marginLeft: 72,
      },
    },
    {
      props: (ownerState) =>
        ownerState.variant === 'middle' &&
        ownerState.orientation === 'horizontal',
      style: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      },
    },
    {
      props: (ownerState) =>
        ownerState.variant === 'middle' &&
        ownerState.orientation === 'vertical',
      style: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
    {
      props: (ownerState) => ownerState.orientation === 'vertical',
      style: {
        height: '100%',
        borderBottomWidth: 0,
        borderRightWidth: 'thin',
      },
    },
    {
      props: (ownerState) => ownerState.flexItem,
      style: {
        alignSelf: 'stretch',
        height: 'auto',
      },
    },
    {
      props: (ownerState) => ownerState.children,
      style: {
        display: 'flex',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        border: 0,
        '&::before, &::after': {
          content: '""',
          alignSelf: 'center',
        },
      },
    },
    {
      props: (ownerState) =>
        ownerState.children && ownerState.orientation !== 'vertical',
      style: {
        '&::before, &::after': {
          width: '100%',
          borderTop: `thin solid ${(theme.vars || theme).palette.divider}`,
        },
      },
    },
    {
      props: (ownerState) =>
        ownerState.children && ownerState.orientation === 'vertical',
      style: {
        flexDirection: 'column',
        '&::before, &::after': {
          height: '100%',
          borderLeft: `thin solid ${(theme.vars || theme).palette.divider}`,
        },
      },
    },
    {
      props: (ownerState) =>
        ownerState.textAlign === 'right' &&
        ownerState.orientation !== 'vertical',
      style: {
        '&::before': {
          width: '90%',
        },
        '&::after': {
          width: '10%',
        },
      },
    },
    {
      props: (ownerState) =>
        ownerState.textAlign === 'left' &&
        ownerState.orientation !== 'vertical',
      style: {
        '&::before': {
          width: '10%',
        },
        '&::after': {
          width: '90%',
        },
      },
    },
  ],
}));

const DividerWrapper = styled('span', {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop),
  name: 'MuiDivider',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.wrapper,
      ownerState.orientation === 'vertical' && styles.wrapperVertical,
    ];
  },
})(({ theme }) => ({
  display: 'inline-block',
  paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
  paddingRight: `calc(${theme.spacing(1)} * 1.2)`,
  variants: [
    {
      props: (ownerState) => ownerState.orientation === 'vertical',
      style: {
        paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
        paddingBottom: `calc(${theme.spacing(1)} * 1.2)`,
      },
    },
  ],
}));

/**
 * @type React.FC<any>
 */
const Button = React.forwardRef(function Button(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'MuiDivider' });
  const {
    absolute = false,
    children,
    className,
    component = children ? 'div' : 'hr',
    flexItem = false,
    light = false,
    orientation = 'horizontal',
    role = component !== 'hr' ? 'separator' : undefined,
    textAlign = 'center',
    variant = 'fullWidth',
    ...other
  } = props;

  const ownerState = {
    ...props,
    absolute,
    component,
    flexItem,
    light,
    orientation,
    role,
    textAlign,
    variant,
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <>
      <DividerRoot
        as={component}
        className={clsx(classes.root, className)}
        role={role}
        ref={ref}
        ownerState={ownerState}
        {...other}
      >
        {children ? (
          <DividerWrapper className={classes.wrapper} ownerState={ownerState}>
            {children}
          </DividerWrapper>
        ) : null}
      </DividerRoot>
    </>
  );
});

export default Button;
