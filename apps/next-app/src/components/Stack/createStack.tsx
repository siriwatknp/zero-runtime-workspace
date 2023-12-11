import * as React from 'react';
import clsx from 'clsx';
import {
  unstable_composeClasses as composeClasses,
  unstable_generateUtilityClass as generateUtilityClass,
} from '@mui/utils';
import { OverridableComponent } from '@mui/types';
import { styled } from '@mui/zero-runtime';
import { StackTypeMap } from './StackProps';

export function getSpacingValue(propValue: any, theme: any) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }
  // We should be able to use theme here
  const themeSpacing = theme?.vars?.spacing ?? 8;

  const abs = Math.abs(propValue);
  return `calc(${propValue < 0 ? `-${abs}` : abs} * ${themeSpacing}px)`;
}

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  };

  // @ts-ignore
  return composeClasses(
    slots,
    (slot) => generateUtilityClass('MuiStack', slot),
    {},
  );
};

/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */
function joinChildren(
  children: React.ReactNode,
  separator: React.ReactElement,
) {
  const childrenArray = React.Children.toArray(children).filter(Boolean);

  return childrenArray.reduce<React.ReactNode[]>((output, child, index) => {
    output.push(child);

    if (index < childrenArray.length - 1) {
      output.push(React.cloneElement(separator, { key: `separator-${index}` }));
    }

    return output;
  }, []);
}

const StackRoot = styled('div')(({ theme }: any) => {
  return {
    display: 'flex',

    '--_flex-direction': ({ ownerState }: any) => {
      if (typeof ownerState.direction === 'string') return ownerState.direction;
      // default value
      return undefined;
    },
    '--_flex-gap': ({ ownerState }: any) => {
      const propValue = ownerState.spacing;
      if (typeof propValue === 'number' || typeof propValue === 'string') {
        return getSpacingValue(propValue, theme);
      }
      return undefined;
    },

    [theme.breakpoints.up('xs')]: {
      '--_flex-direction-xs': ({ ownerState }: any) => {
        if (Array.isArray(ownerState.direction)) return ownerState.direction[0];
        if (typeof ownerState.direction === 'object')
          return ownerState.direction.xs;
        return undefined;
      },
      '--_flex-gap-xs': ({ ownerState }: any) => {
        let propValue = null;

        if (Array.isArray(ownerState.spacing)) {
          propValue = ownerState.spacing[0];
        }
        if (typeof ownerState.spacing === 'object') {
          propValue = ownerState.spacing.xs;
        }
        if (typeof propValue === 'number' || typeof propValue === 'string') {
          return getSpacingValue(propValue, theme);
        }
        return undefined;
      },
    },
    [theme.breakpoints.up('sm')]: {
      '--_flex-direction-sm': ({ ownerState }: any) => {
        if (
          Array.isArray(ownerState.direction) &&
          ownerState.direction.length > 1
        )
          return ownerState.direction[1];
        if (typeof ownerState.direction === 'object')
          return ownerState.direction.sm;
        return undefined;
      },
      '--_flex-gap-sm': ({ ownerState }: any) => {
        let propValue = null;

        if (
          Array.isArray(ownerState.spacing) &&
          ownerState.spacing.length > 1
        ) {
          propValue = ownerState.spacing[1];
        }
        if (typeof ownerState.spacing === 'object') {
          propValue = ownerState.spacing.sm;
        }

        if (typeof propValue === 'number' || typeof propValue === 'string') {
          return getSpacingValue(propValue, theme);
        }
        return undefined;
      },
    },
    [theme.breakpoints.up('md')]: {
      '--_flex-direction-md': ({ ownerState }: any) => {
        if (
          Array.isArray(ownerState.direction) &&
          ownerState.direction.length > 2
        )
          return ownerState.direction[2];
        if (typeof ownerState.direction === 'object')
          return ownerState.direction.md;
        return undefined;
      },
      '--_flex-gap-md': ({ ownerState }: any) => {
        let propValue = null;

        if (
          Array.isArray(ownerState.spacing) &&
          ownerState.spacing.length > 2
        ) {
          propValue = ownerState.spacing[2];
        }
        if (typeof ownerState.spacing === 'object') {
          propValue = ownerState.spacing.md;
        }

        if (typeof propValue === 'number' || typeof propValue === 'string') {
          return getSpacingValue(propValue, theme);
        }
        return undefined;
      },
    },
    [theme.breakpoints.up('lg')]: {
      '--_flex-direction-lg': ({ ownerState }: any) => {
        if (
          Array.isArray(ownerState.direction) &&
          ownerState.direction.length > 3
        )
          return ownerState.direction[3];
        if (typeof ownerState.direction === 'object')
          return ownerState.direction.lg;
        return undefined;
      },
      '--_flex-gap-lg': ({ ownerState }: any) => {
        let propValue = null;

        if (
          Array.isArray(ownerState.spacing) &&
          ownerState.spacing.length > 3
        ) {
          propValue = ownerState.spacing[3];
        }
        if (typeof ownerState.spacing === 'object') {
          propValue = ownerState.spacing.lg;
        }

        if (typeof propValue === 'number' || typeof propValue === 'string') {
          return getSpacingValue(propValue, theme);
        }
        return undefined;
      },
    },
    [theme.breakpoints.up('xl')]: {
      '--_flex-direction-xl': ({ ownerState }: any) => {
        if (
          Array.isArray(ownerState.direction) &&
          ownerState.direction.length > 4
        )
          return ownerState.direction[4];
        if (typeof ownerState.direction === 'object')
          return ownerState.direction.xl;
        return undefined;
      },
      '--_flex-gap-xl': ({ ownerState }: any) => {
        let propValue = null;

        if (
          Array.isArray(ownerState.spacing) &&
          ownerState.spacing.length > 4
        ) {
          propValue = ownerState.spacing[4];
        }
        if (typeof ownerState.spacing === 'object') {
          propValue = ownerState.spacing.xl;
        }

        if (typeof propValue === 'number' || typeof propValue === 'string') {
          return getSpacingValue(propValue, theme);
        }
        return undefined;
      },
    },
    flexDirection:
      'var(--_flex-direction-xl, var(--_flex-direction-lg, var(--_flex-direction-md, var(--_flex-direction-sm, var(--_flex-direction-xs, var(--_flex-direction))))))',
    gap: 'var(--_flex-gap-xl, var(--_flex-gap-lg, var(--_flex-gap-md, var(--_flex-gap-sm, var(--_flex-gap-xs, var(--_flex-gap))))))',

    // TODO: handle props.spacing whe useFlexGap is false
    // '& > :not(style):not(style)': {
    //   margin: 0,
    // },

    // '--_child-margin-left': ({ ownerState }: any) => {
    //   if (typeof ownerState.direction === 'string' && ownerState.direction === 'row' && typeof ownerState.spacing === 'number') return ownerState.spacing;
    //   // default value
    //   return 'column';
    // },

    // plus handle all breakpoints and combination with direction :mind-explode: :D
  } as any;
});

const Stack = React.forwardRef(function Stack(inProps: any, ref) {
  // const themeProps = useThemeProps(inProps);
  // const props: any = extendSxProp(themeProps); // `color` type conflicts with html color attribute.
  const props = inProps;
  const {
    component = 'div',
    direction = 'column',
    spacing = 0,
    divider,
    children,
    className,
    // TODO: Change this to false by default
    useFlexGap = true,
    ...other
  } = props;
  const ownerState = {
    direction,
    spacing,
    useFlexGap,
  };
  const classes = useUtilityClasses();
  return (
    // @ts-ignore
    <StackRoot
      as={component}
      ownerState={ownerState}
      ref={ref}
      className={clsx(classes.root, className)}
      {...other}
    >
      {divider
        ? joinChildren(children, divider as React.ReactElement)
        : children}
    </StackRoot>
  );
}) as OverridableComponent<StackTypeMap>;

export default Stack;
