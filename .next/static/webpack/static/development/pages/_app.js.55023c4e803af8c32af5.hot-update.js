webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/GlobalStyle.js":
/*!****************************!*\
  !*** ./lib/GlobalStyle.js ***!
  \****************************/
/*! exports provided: GlobalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyles\", function() { return GlobalStyles; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/helpers */ \"./lib/utils/helpers.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./lib/constants/index.js\");\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  /* root vars */\\n  :root {\\n    --black: \", \";\\n    --white: \", \";\\n  }\\n\\n  /* Box sizing rules */\\n  *,\\n  *::before,\\n  *::after {\\n    box-sizing: border-box;\\n  }\\n\\n  /* Remove default padding */\\n  ul[class],\\n  ol[class] {\\n    padding: 0;\\n  }\\n\\n  /* Remove default margin */\\n  body,\\n  h1,\\n  h2,\\n  h3,\\n  h4,\\n  p,\\n  ul[class],\\n  ol[class],\\n  li,\\n  figure,\\n  figcaption,\\n  blockquote,\\n  dl,\\n  dd {\\n    margin: 0;\\n  }\\n\\n  /* Set core body defaults */\\n  body {\\n    min-height: 100vh;\\n    min-height: -webkit-fill-available;\\n    scroll-behavior: smooth;\\n    text-rendering: optimizeSpeed;\\n    line-height: 1.5;\\n    background-color: var(--white);\\n    color: var(--white);\\n    --safe-area-inset-bottom: env(safe-area-inset-bottom);\\n  }\\n\\n  /* Remove list styles on ul, ol elements with a class attribute */\\n  ul[class],\\n  ol[class] {\\n    list-style: none;\\n  }\\n\\n  /* A elements that don't have a class get default styles */\\n  a:not([class]) {\\n    text-decoration-skip-ink: auto;\\n  }\\n\\n  /* Make images easier to work with */\\n  img {\\n    max-width: 100%;\\n    display: block;\\n  }\\n\\n  /* Natural flow and rhythm in articles by default */\\n  article > * + * {\\n    margin-top: 1em;\\n  }\\n\\n  /* Inherit fonts for inputs and buttons */\\n  input,\\n  button,\\n  textarea,\\n  select {\\n    font: inherit;\\n  }\\n\\n  .hackSpace {\\n    width: 100%;\\n    height: auto;\\n    margin-top: 50px;\\n  }\\n\\n  /* Remove all animations and transitions for people that prefer not to see them */\\n  @media (prefers-reduced-motion: reduce) {\\n    * {\\n      animation-duration: 0.01ms !important;\\n      animation-iteration-count: 1 !important;\\n      transition-duration: 0.01ms !important;\\n      scroll-behavior: auto !important;\\n    }\\n  }\\n\\n  html {\\n  }\\n\\n  /* \\n      Utilitary classes & Styles\\n  */\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject(), _constants__WEBPACK_IMPORTED_MODULE_3__[\"Colors\"].black.toCSS(), _constants__WEBPACK_IMPORTED_MODULE_3__[\"Colors\"].white.toCSS());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvR2xvYmFsU3R5bGUuanM/NjY5ZSJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkNvbG9ycyIsImJsYWNrIiwidG9DU1MiLCJ3aGl0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsWUFBWSxHQUFHQywyRUFBSCxvQkFHVkMsaURBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxLQUFiLEVBSFUsRUFJVkYsaURBQU0sQ0FBQ0csS0FBUCxDQUFhRCxLQUFiLEVBSlUsQ0FBbEIiLCJmaWxlIjoiLi9saWIvR2xvYmFsU3R5bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHB4VG9SZW0gfSBmcm9tICd1dGlscy9oZWxwZXJzJztcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gJ2NvbnN0YW50cyc7XG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIC8qIHJvb3QgdmFycyAqL1xuICA6cm9vdCB7XG4gICAgLS1ibGFjazogJHtDb2xvcnMuYmxhY2sudG9DU1MoKX07XG4gICAgLS13aGl0ZTogJHtDb2xvcnMud2hpdGUudG9DU1MoKX07XG4gIH1cblxuICAvKiBCb3ggc2l6aW5nIHJ1bGVzICovXG4gICosXG4gICo6OmJlZm9yZSxcbiAgKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAvKiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nICovXG4gIHVsW2NsYXNzXSxcbiAgb2xbY2xhc3NdIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG4gIGJvZHksXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBwLFxuICB1bFtjbGFzc10sXG4gIG9sW2NsYXNzXSxcbiAgbGksXG4gIGZpZ3VyZSxcbiAgZmlnY2FwdGlvbixcbiAgYmxvY2txdW90ZSxcbiAgZGwsXG4gIGRkIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAvKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXG4gIGJvZHkge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLXNhZmUtYXJlYS1pbnNldC1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgfVxuXG4gIC8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGNsYXNzIGF0dHJpYnV0ZSAqL1xuICB1bFtjbGFzc10sXG4gIG9sW2NsYXNzXSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIC8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXG4gIGE6bm90KFtjbGFzc10pIHtcbiAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG4gIH1cblxuICAvKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLyogTmF0dXJhbCBmbG93IGFuZCByaHl0aG0gaW4gYXJ0aWNsZXMgYnkgZGVmYXVsdCAqL1xuICBhcnRpY2xlID4gKiArICoge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuXG4gIC8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xuICBpbnB1dCxcbiAgYnV0dG9uLFxuICB0ZXh0YXJlYSxcbiAgc2VsZWN0IHtcbiAgICBmb250OiBpbmhlcml0O1xuICB9XG5cbiAgLmhhY2tTcGFjZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cblxuICAvKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMgYW5kIHRyYW5zaXRpb25zIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXG4gIEBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICAgKiB7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICBodG1sIHtcbiAgfVxuXG4gIC8qIFxuICAgICAgVXRpbGl0YXJ5IGNsYXNzZXMgJiBTdHlsZXNcbiAgKi9cblxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/GlobalStyle.js\n");

/***/ })

})