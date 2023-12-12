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

const isPrimitiveValue = (value: any) => {
  return typeof value === 'string' || typeof value === 'number';
};

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

const getValueByBreakpoint = (
  value: any,
  breakpoint: string,
  considerPlainValue = false,
) => {
  if (Array.isArray(value)) {
    return value[breakpoints.indexOf(breakpoint)];
  }
  if (typeof value === 'object') {
    return value[breakpoint];
  }
  return considerPlainValue ? value : undefined;
};

const StackRoot = styled('div')(({ theme }: any) => {
  return {
    display: 'flex',

    '--_flex-direction': ({ ownerState }: any) => {
      if (typeof ownerState.direction === 'string') return ownerState.direction;
      // default value
      return undefined;
    },
    '--_flex-gap': ({ ownerState }: any) => {
      if (!ownerState.useFlexGap) {
        return undefined;
      }
      const propValue = ownerState.spacing;
      if (typeof propValue === 'number' || typeof propValue === 'string') {
        return getSpacingValue(propValue, theme);
      }
      return undefined;
    },

    [theme.breakpoints.up('xs')]: {
      '--_flex-direction-xs': ({ ownerState }: any) => {
        return getValueByBreakpoint(ownerState.direction, 'xs');
      },
      '--_flex-gap-xs': ({ ownerState }: any) => {
        if (!ownerState.useFlexGap) {
          return undefined;
        }
        let propValue = getValueByBreakpoint(ownerState.spacing, 'xs');
        if (typeof propValue === 'number' || typeof propValue === 'string') {
          return getSpacingValue(propValue, theme);
        }
        return undefined;
      },
    },
    [theme.breakpoints.up('sm')]: {
      '--_flex-direction-sm': ({ ownerState }: any) => {
        return getValueByBreakpoint(ownerState.direction, 'sm');
      },
      '--_flex-gap-sm': ({ ownerState }: any) => {
        if (!ownerState.useFlexGap) {
          return undefined;
        }
        let propValue = getValueByBreakpoint(ownerState.spacing, 'sm');

        if (typeof propValue === 'number' || typeof propValue === 'string') {
          return getSpacingValue(propValue, theme);
        }
        return undefined;
      },
    },
    [theme.breakpoints.up('md')]: {
      '--_flex-direction-md': ({ ownerState }: any) => {
        return getValueByBreakpoint(ownerState.direction, 'md');
      },
      '--_flex-gap-md': ({ ownerState }: any) => {
        if (!ownerState.useFlexGap) {
          return undefined;
        }
        let propValue = getValueByBreakpoint(ownerState.spacing, 'md');

        if (typeof propValue === 'number' || typeof propValue === 'string') {
          return getSpacingValue(propValue, theme);
        }
        return undefined;
      },
    },
    [theme.breakpoints.up('lg')]: {
      '--_flex-direction-lg': ({ ownerState }: any) => {
        return getValueByBreakpoint(ownerState.direction, 'lg');
      },
      '--_flex-gap-lg': ({ ownerState }: any) => {
        if (!ownerState.useFlexGap) {
          return undefined;
        }
        let propValue = getValueByBreakpoint(ownerState.spacing, 'lg');

        if (typeof propValue === 'number' || typeof propValue === 'string') {
          return getSpacingValue(propValue, theme);
        }
        return undefined;
      },
    },
    [theme.breakpoints.up('xl')]: {
      '--_flex-direction-xl': ({ ownerState }: any) => {
        return getValueByBreakpoint(ownerState.direction, 'xl');
      },
      '--_flex-gap-xl': ({ ownerState }: any) => {
        if (!ownerState.useFlexGap) {
          return undefined;
        }
        let propValue = getValueByBreakpoint(ownerState.spacing, 'xl');

        if (typeof propValue === 'number' || typeof propValue === 'string') {
          return getSpacingValue(propValue, theme);
        }
        return undefined;
      },
    },
    flexDirection:
      'var(--_flex-direction-xl, var(--_flex-direction-lg, var(--_flex-direction-md, var(--_flex-direction-sm, var(--_flex-direction-xs, var(--_flex-direction))))))',
    gap: 'var(--_flex-gap-xl, var(--_flex-gap-lg, var(--_flex-gap-md, var(--_flex-gap-sm, var(--_flex-gap-xs, var(--_flex-gap))))))',

    variants: [
      {
        props: (props: any) => props.useFlexGap === false,
        style: {
          '& > :not(style):not(style)': {
            margin: 0,
          },

          '--_child-margin-left': ({ ownerState }: any) => {
            const propValue = ownerState.spacing;

            if (
              typeof ownerState.direction === 'string' &&
              ownerState.direction === 'row' &&
              isPrimitiveValue(ownerState.spacing)
            ) {
              return getSpacingValue(propValue, theme);
            }
          },
          '--_child-margin-right': ({ ownerState }: any) => {
            const propValue = ownerState.spacing;

            if (
              typeof ownerState.direction === 'string' &&
              ownerState.direction === 'row-reverse' &&
              isPrimitiveValue(ownerState.spacing)
            ) {
              return getSpacingValue(propValue, theme);
            }
          },

          '--_child-margin-top': ({ ownerState }: any) => {
            const propValue = ownerState.spacing;

            if (
              typeof ownerState.direction === 'string' &&
              ownerState.direction === 'column' &&
              isPrimitiveValue(ownerState.spacing)
            ) {
              return getSpacingValue(propValue, theme);
            }
          },

          '--_child-margin-bottom': ({ ownerState }: any) => {
            const propValue = ownerState.spacing;

            if (
              typeof ownerState.direction === 'string' &&
              ownerState.direction === 'column-reverse' &&
              isPrimitiveValue(ownerState.spacing)
            ) {
              return getSpacingValue(propValue, theme);
            }
          },

          [theme.breakpoints.up('xs')]: {
            '--_child-margin-left-xs': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'xs');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'xs',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'row'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'row') {
                return 0;
              }
              return undefined;
            },
            '--_child-margin-right-xs': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'xs');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'xs',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'row-reverse'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'row-reverse') {
                return 0;
              }
              return undefined;
            },
            '--_child-margin-top-xs': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'xs');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'xs',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'column'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'column') {
                return 0;
              }
              return undefined;
            },
            '--_child-margin-bottom-xs': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'xs');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'xs',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'column-reverse'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'column-reverse') {
                return 0;
              }
              return undefined;
            },
          },
          [theme.breakpoints.up('sm')]: {
            '--_child-margin-left-sm': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'sm');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'sm',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'row'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'row') {
                return 0;
              }
              return undefined;
            },
            '--_child-margin-right-sm': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'sm');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'sm',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'row-reverse'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'row-reverse') {
                return 0;
              }
              return undefined;
            },
            '--_child-margin-top-sm': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'sm');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'sm',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'column'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'column') {
                return 0;
              }
              return undefined;
            },
            '--_child-margin-bottom-sm': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'sm');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'sm',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'column-reverse'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'column-reverse') {
                return 0;
              }
              return undefined;
            },
          },
          [theme.breakpoints.up('md')]: {
            '--_child-margin-left-md': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'md');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'md',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'row'
              ) {
                return getSpacingValue(propValue, theme);
              }
              // reset the value
              if (directionValue !== 'row') {
                return 0;
              }
              return undefined;
            },
            '--_child-margin-right-md': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'md');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'md',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'row-reverse'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'row-reverse') {
                return 0;
              }
              return undefined;
            },
            '--_child-margin-top-md': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'md');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'md',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'column'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'column') {
                return 0;
              }
              return undefined;
            },
            '--_child-margin-bottom-md': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'md');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'md',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'column-reverse'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'column-reverse') {
                return 0;
              }
              return undefined;
            },
          },
          [theme.breakpoints.up('lg')]: {
            '--_child-margin-left-lg': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'lg');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'lg',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'row'
              ) {
                return getSpacingValue(propValue, theme);
              }
              // reset the value
              if (directionValue !== 'row') {
                return 0;
              }
              return undefined;
            },
            '--_child-margin-right-lg': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'lg');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'lg',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'row-reverse'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'row-reverse') {
                return 0;
              }
              return undefined;
            },
            '--_child-margin-top-lg': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'lg');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'lg',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'column'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'column') {
                return 0;
              }
              return undefined;
            },
            '--_child-margin-bottom-lg': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'lg');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'lg',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'column-reverse'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'column-reverse') {
                return 0;
              }
              return undefined;
            },
          },
          [theme.breakpoints.up('xl')]: {
            '--_child-margin-left-xl': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'xl');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'xl',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'row'
              ) {
                return getSpacingValue(propValue, theme);
              }
              // reset the value
              if (directionValue !== 'row') {
                return 0;
              }
              return undefined;
            },
            '--_child-margin-right-xl': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'xl');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'xl',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'row-reverse'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'row-reverse') {
                return 0;
              }
              return undefined;
            },
            '--_child-margin-top-xl': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'xl');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'xl',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'column'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'column') {
                return 0;
              }
              return undefined;
            },
            '--_child-margin-bottom-xl': ({ ownerState }: any) => {
              let propValue = getValueByBreakpoint(ownerState.spacing, 'xl');
              let directionValue = getValueByBreakpoint(
                ownerState.direction,
                'xl',
                true,
              );

              if (
                (typeof propValue === 'number' ||
                  typeof propValue === 'string') &&
                directionValue === 'column-reverse'
              ) {
                return getSpacingValue(propValue, theme);
              }

              // reset the value
              if (directionValue !== 'column-reverse') {
                return 0;
              }
              return undefined;
            },
          },

          '& > :not(style) ~ :not(style)': {
            marginLeft:
              'var(--_child-margin-left-xl, var(--_child-margin-left-lg, var(--_child-margin-left-md, var(--_child-margin-left-sm, var(--_child-margin-left-xs, var(--_child-margin-left))))))',
            marginRight:
              'var(--_child-margin-right-xl, var(--_child-margin-right-lg, var(--_child-margin-right-md, var(--_child-margin-right-sm, var(--_child-margin-right-xs, var(--_child-margin-right))))))',
            marginTop:
              'var(--_child-margin-top-xl, var(--_child-margin-top-lg, var(--_child-margin-top-md, var(--_child-margin-top-sm, var(--_child-margin-top-xs, var(--_child-margin-top))))))',
            marginBottom:
              'var(--_child-margin-bottom-xl, var(--_child-margin-bottom-lg, var(--_child-margin-bottom-md, var(--_child-margin-bottom-sm, var(--_child-margin-bottom-xs, var(--_child-margin-bottom))))))',
          },
        },
      },
    ],

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
    useFlexGap = false,
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
