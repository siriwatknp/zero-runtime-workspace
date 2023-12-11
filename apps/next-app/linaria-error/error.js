'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.__linariaPreval = void 0;
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/toConsumableArray'),
);
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/esm/defineProperty'),
);
var _propTypes = _interopRequireDefault(require('prop-types'));
var _utils = require('@mui/utils');
var _NotchedOutline = _interopRequireDefault(require('./NotchedOutline'));
var _outlinedInputClasses = _interopRequireDefault(
  require('./outlinedInputClasses'),
);
var _InputBase = require('../InputBase/InputBase');
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          (0, _defineProperty2['default'])(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
} /* __next_internal_client_entry_do_not_use__ default auto */
function shouldForwardProp(prop) {
  return (
    prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as'
  );
}
var rootShouldForwardProp = function rootShouldForwardProp(prop) {
  return shouldForwardProp(prop) && prop !== 'classes';
};
var _exp = /*#__PURE__*/ function _exp() {
  return _InputBase.InputBaseRoot;
};
var _exp2 = /*#__PURE__*/ function _exp2() {
  return {
    shouldForwardProp: function shouldForwardProp(prop) {
      return rootShouldForwardProp(prop);
    },
    name: 'MuiOutlinedInput',
    slot: 'Root',
    overridesResolver: _InputBase.rootOverridesResolver,
  };
};
var _exp3 = /*#__PURE__*/ function _exp3() {
  return function (param) {
    var _ref2;
    var theme = param.theme;
    // const borderColor =
    //   theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
    return (
      (_ref2 = {
        position: 'relative',
        borderRadius: (theme.vars || theme).shape.borderRadius,
      }),
      (0, _defineProperty2['default'])(
        _ref2,
        '&:hover .'.concat(_outlinedInputClasses['default'].notchedOutline),
        {
          borderColor: (theme.vars || theme).palette.text.primary,
        },
      ),
      (0, _defineProperty2['default'])(
        _ref2,
        '@media (hover: none)',
        (0, _defineProperty2['default'])(
          {},
          '&:hover .'.concat(_outlinedInputClasses['default'].notchedOutline),
          {
            borderColor: theme.vars
              ? 'rgba('.concat(
                  theme.vars.palette.common.onBackgroundChannel,
                  ' / 0.23)',
                )
              : theme.palette.mode === 'light'
              ? 'rgba(0, 0, 0, 0.23)'
              : 'rgba(255, 255, 255, 0.23)',
          },
        ),
      ),
      (0, _defineProperty2['default'])(
        _ref2,
        '&.'
          .concat(_outlinedInputClasses['default'].focused, ' .')
          .concat(_outlinedInputClasses['default'].notchedOutline),
        {
          borderWidth: 2,
        },
      ),
      (0, _defineProperty2['default'])(
        _ref2,
        'variants',
        (0, _toConsumableArray2['default'])(
          ['primary', 'secondary', 'error', 'info', 'success', 'warning'].map(
            function (item) {
              return {
                props: {
                  color: item,
                },
                style: (0, _defineProperty2['default'])(
                  {},
                  '&.'
                    .concat(_outlinedInputClasses['default'].focused, ' .')
                    .concat(_outlinedInputClasses['default'].notchedOutline),
                  {
                    borderColor: (theme.vars || theme).palette[item].main,
                    borderWidth: 2,
                  },
                ),
              };
            },
          ),
        ),
      ),
      (0, _defineProperty2['default'])(
        _ref2,
        '&.'
          .concat(_outlinedInputClasses['default'].error, ' .')
          .concat(_outlinedInputClasses['default'].notchedOutline),
        {
          borderColor: (theme.vars || theme).palette.error.main,
        },
      ),
      (0, _defineProperty2['default'])(
        _ref2,
        '&.'
          .concat(_outlinedInputClasses['default'].disabled, ' .')
          .concat(_outlinedInputClasses['default'].notchedOutline),
        {
          borderColor: (theme.vars || theme).palette.action.disabled,
        },
      ),
      (0, _defineProperty2['default'])(
        _ref2,
        'padding',
        function padding(param) {
          var ownerState = param.ownerState;
          var paddingLeft = 0;
          if (ownerState.startAdornment) {
            paddingLeft = 14;
          }
          var paddingRight = 0;
          if (ownerState.endAdornment) {
            paddingRight = 14;
          }
          var paddingY = 0;
          if (ownerState.size === 'small') {
            paddingY = 8.5;
          }
          if (ownerState.multiline) {
            paddingY = 0;
          }
          return ''
            .concat(paddingY, 'px ')
            .concat(paddingRight, 'px ')
            .concat(paddingY, 'px ')
            .concat(paddingLeft, 'px');
        },
      ),
      _ref2
    );
  };
};
var _exp4 = /*#__PURE__*/ function _exp4() {
  return _NotchedOutline['default'];
};
var _exp5 = /*#__PURE__*/ function _exp5() {
  return {
    name: 'MuiOutlinedInput',
    slot: 'NotchedOutline',
    overridesResolver: function overridesResolver(props, styles) {
      return styles.notchedOutline;
    },
  };
};
var _exp6 = /*#__PURE__*/ function _exp6() {
  return function (param) {
    var theme = param.theme;
    var _theme_palette;
    var borderColor =
      ((_theme_palette = theme.palette) === null || _theme_palette === void 0
        ? void 0
        : _theme_palette.mode) === 'light'
        ? 'rgba(0, 0, 0, 0.23)'
        : 'rgba(255, 255, 255, 0.23)';
    return {
      borderColor: theme.vars
        ? 'rgba('.concat(
            theme.vars.palette.common.onBackgroundChannel,
            ' / 0.23)',
          )
        : borderColor,
    };
  };
};
var _exp7 = /*#__PURE__*/ function _exp7() {
  return _InputBase.InputBaseComponent;
};
var _exp8 = /*#__PURE__*/ function _exp8() {
  return {
    name: 'MuiOutlinedInput',
    slot: 'Input',
    overridesResolver: _InputBase.inputOverridesResolver,
  };
};
var _exp9 = /*#__PURE__*/ function _exp9() {
  return function (param) {
    var theme = param.theme;
    return _objectSpread(
      _objectSpread(
        _objectSpread(
          {},
          !theme.vars && {
            '&:-webkit-autofill': {
              WebkitBoxShadow:
                theme.palette.mode === 'light'
                  ? null
                  : '0 0 0 100px #266798 inset',
              WebkitTextFillColor:
                theme.palette.mode === 'light' ? null : '#fff',
              caretColor: theme.palette.mode === 'light' ? null : '#fff',
              borderRadius: 'inherit',
            },
          },
        ),
        theme.vars &&
          (0, _defineProperty2['default'])(
            {
              '&:-webkit-autofill': {
                borderRadius: 'inherit',
              },
            },
            theme.getColorSchemeSelector('dark'),
            {
              '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0 100px #266798 inset',
                WebkitTextFillColor: '#fff',
                caretColor: '#fff',
              },
            },
          ),
      ),
      {},
      {
        // TODO: The result is weird, need to investigate
        //        --o3vuzx2-0: var(--app-16-16-5px) 14px var(--app-16-16-5px) 14px;
        //        Found it! the value contain `.`, e.g. `16.5px`
        padding: function padding(param) {
          var ownerState = param.ownerState;
          var paddingY = 16.5;
          var paddingLeft = 14;
          var paddingRight = 14;
          if (ownerState.size === 'small') {
            paddingY = 8.5;
          }
          if (ownerState.multiline) {
            paddingLeft = 0;
            paddingRight = 0;
            paddingY = 0;
          }
          if (ownerState.startAdornment) {
            paddingLeft = 0;
          }
          if (ownerState.endAdornment) {
            paddingRight = 0;
          }
          return ''
            .concat(paddingY, 'px ')
            .concat(paddingRight, 'px ')
            .concat(paddingY, 'px ')
            .concat(paddingLeft, 'px');
        },
      },
    );
  };
};
// OutlinedInput.propTypes /* remove-proptypes */ = {
//   // ----------------------------- Warning --------------------------------
//   // | These PropTypes are generated from the TypeScript type definitions |
//   // |     To update them edit the d.ts file and run "yarn proptypes"     |
//   // ----------------------------------------------------------------------
//   /**
//    * This prop helps users to fill forms faster, especially on mobile devices.
//    * The name can be confusing, as it's more like an autofill.
//    * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
//    */
//   autoComplete: PropTypes.string,
//   /**
//    * If `true`, the `input` element is focused during the first mount.
//    */
//   autoFocus: PropTypes.bool,
//   /**
//    * Override or extend the styles applied to the component.
//    */
//   classes: PropTypes.object,
//   /**
//    * The color of the component.
//    * It supports both default and custom theme colors, which can be added as shown in the
//    * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
//    * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
//    */
//   color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([
//     PropTypes.oneOf(['primary', 'secondary']),
//     PropTypes.string,
//   ]),
//   /**
//    * The components used for each slot inside.
//    *
//    * This prop is an alias for the `slots` prop.
//    * It's recommended to use the `slots` prop instead.
//    *
//    * @default {}
//    */
//   components: PropTypes.shape({
//     Input: PropTypes.elementType,
//     Root: PropTypes.elementType,
//   }),
//   /**
//    * The default value. Use when the component is not controlled.
//    */
//   defaultValue: PropTypes.any,
//   /**
//    * If `true`, the component is disabled.
//    * The prop defaults to the value (`false`) inherited from the parent FormControl component.
//    */
//   disabled: PropTypes.bool,
//   /**
//    * End `InputAdornment` for this component.
//    */
//   endAdornment: PropTypes.node,
//   /**
//    * If `true`, the `input` will indicate an error.
//    * The prop defaults to the value (`false`) inherited from the parent FormControl component.
//    */
//   error: PropTypes.bool,
//   /**
//    * If `true`, the `input` will take up the full width of its container.
//    * @default false
//    */
//   fullWidth: PropTypes.bool,
//   /**
//    * The id of the `input` element.
//    */
//   id: PropTypes.string,
//   /**
//    * The component used for the `input` element.
//    * Either a string to use a HTML element or a component.
//    * @default 'input'
//    */
//   inputComponent: PropTypes.elementType,
//   /**
//    * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
//    * @default {}
//    */
//   inputProps: PropTypes.object,
//   /**
//    * Pass a ref to the `input` element.
//    */
//   inputRef: refType,
//   /**
//    * The label of the `input`. It is only used for layout. The actual labelling
//    * is handled by `InputLabel`.
//    */
//   label: PropTypes.node,
//   /**
//    * If `dense`, will adjust vertical spacing. This is normally obtained via context from
//    * FormControl.
//    * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
//    */
//   margin: PropTypes.oneOf(['dense', 'none']),
//   /**
//    * Maximum number of rows to display when multiline option is set to true.
//    */
//   maxRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   /**
//    * Minimum number of rows to display when multiline option is set to true.
//    */
//   minRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   /**
//    * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
//    * @default false
//    */
//   multiline: PropTypes.bool,
//   /**
//    * Name attribute of the `input` element.
//    */
//   name: PropTypes.string,
//   /**
//    * If `true`, the outline is notched to accommodate the label.
//    */
//   notched: PropTypes.bool,
//   /**
//    * Callback fired when the value is changed.
//    *
//    * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
//    * You can pull out the new value by accessing `event.target.value` (string).
//    */
//   onChange: PropTypes.func,
//   /**
//    * The short hint displayed in the `input` before the user enters a value.
//    */
//   placeholder: PropTypes.string,
//   /**
//    * It prevents the user from changing the value of the field
//    * (not from interacting with the field).
//    */
//   readOnly: PropTypes.bool,
//   /**
//    * If `true`, the `input` element is required.
//    * The prop defaults to the value (`false`) inherited from the parent FormControl component.
//    */
//   required: PropTypes.bool,
//   /**
//    * Number of rows to display when multiline option is set to true.
//    */
//   rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   /**
//    * The components used for each slot inside.
//    *
//    * This prop is an alias for the `components` prop, which will be deprecated in the future.
//    *
//    * @default {}
//    */
//   slots: PropTypes.shape({
//     input: PropTypes.elementType,
//     root: PropTypes.elementType,
//   }),
//   /**
//    * Start `InputAdornment` for this component.
//    */
//   startAdornment: PropTypes.node,
//   /**
//    * The system prop that allows defining system overrides as well as additional CSS styles.
//    */
//   sx: PropTypes.oneOfType([
//     PropTypes.arrayOf(
//       PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
//     ),
//     PropTypes.func,
//     PropTypes.object,
//   ]),
//   /**
//    * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
//    * @default 'text'
//    */
//   type: PropTypes.string,
//   /**
//    * The value of the `input` element, required for a controlled component.
//    */
//   value: PropTypes.any,
// };
// OutlinedInput.muiName = 'Input';
var _c;
// Wrapped in an IIFE to avoid polluting the global scope
(function () {
  var _a, _b;
  // Legacy CSS implementations will `eval` browser code in a Node.js context
  // to extract CSS. For backwards compatibility, we need to check we're in a
  // browser context before continuing.
  if (
    typeof self !== 'undefined' &&
    // AMP / No-JS mode does not inject these helpers:
    '$RefreshHelpers$' in self
  ) {
    // @ts-ignore __webpack_module__ is global
    var currentExports = __webpack_module__.exports;
    // @ts-ignore __webpack_module__ is global
    var prevSignature =
      (_b =
        (_a = __webpack_module__.hot.data) === null || _a === void 0
          ? void 0
          : _a.prevSignature) !== null && _b !== void 0
        ? _b
        : null;
    // This cannot happen in MainTemplate because the exports mismatch between
    // templating and execution.
    self.$RefreshHelpers$.registerExportsForReactRefresh(
      currentExports,
      __webpack_module__.id,
    );
    // A module can be accepted automatically based on its exports, e.g. when
    // it is a Refresh Boundary.
    if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
      // Save the previous exports signature on update so we can compare the boundary
      // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
      __webpack_module__.hot.dispose(function (data) {
        data.prevSignature =
          self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
      });
      // Unconditionally accept an update to this module, we'll check if it's
      // still a Refresh Boundary later.
      // @ts-ignore importMeta is replaced in the loader
      // This field is set when the previous version of this module was a
      // Refresh Boundary, letting us know we need to check for invalidation or
      // enqueue an update.
      if (prevSignature !== null) {
        // A boundary can become ineligible if its exports are incompatible
        // with the previous exports.
        //
        // For example, if you add/remove/change exports, we'll want to
        // re-execute the importing modules, and force those components to
        // re-render. Similarly, if you convert a class component to a
        // function, we want to invalidate the boundary.
        if (
          self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
            prevSignature,
            self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports),
          )
        ) {
          __webpack_module__.hot.invalidate();
        } else {
          self.$RefreshHelpers$.scheduleUpdate();
        }
      }
    } else {
      // Since we just executed the code for the module, it's possible that the
      // new exports made it ineligible for being a boundary.
      // We only care about the case when we were _previously_ a boundary,
      // because we already accepted this update (accidental side effect).
      var isNoLongerABoundary = prevSignature !== null;
      if (isNoLongerABoundary) {
        __webpack_module__.hot.invalidate();
      }
    }
  }
})();
var __linariaPreval = (exports.__linariaPreval = {
  _exp: _exp,
  _exp2: _exp2,
  _exp3: _exp3,
  _exp4: _exp4,
  _exp5: _exp5,
  _exp6: _exp6,
  _exp7: _exp7,
  _exp8: _exp8,
  _exp9: _exp9,
});
