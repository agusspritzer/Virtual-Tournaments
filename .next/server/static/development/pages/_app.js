module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./components/Header/styled.js\");\nvar _jsxFileName = \"/mnt/c/Users/Gonza/Documents/Work/Personal/dev/Virtual-Tournaments/components/Header/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n{\n  /* importo el div que creo en styled*/\n}\n{\n  /* Este es el compoennte donde vos a poner el codigo delheader*/\n}\n{\n  /* la clase tiene tiene que llamarse igual a la carpeta que conitene todo, osea, header*/\n}\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    return __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__[\"ContenedorHeader\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }\n    }, __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__[\"Grilla\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 22\n      }\n    }, __jsx(\"a\", {\n      id: \"logo\",\n      href: \"#\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 25\n      }\n    }, \"Logito\"), __jsx(\"nav\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 30\n      }\n    }, __jsx(\"ul\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 34\n      }\n    }, __jsx(\"li\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 38\n      }\n    }, __jsx(\"a\", {\n      href: \"#\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 42\n      }\n    }, \"TORNEOS\"), __jsx(\"a\", {\n      href: \"#\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 42\n      }\n    }, \"CALENDARIO\"), __jsx(\"a\", {\n      href: \"#\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 42\n      }\n    }, \"AYUDA\"), __jsx(\"a\", {\n      href: \"#\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 42\n      }\n    }, \"EL PROYECTO\"))))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcz8zYTBjIl0sIm5hbWVzIjpbIkhlYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFBQztBQUF1QztBQUV4QztBQUFDO0FBQWlFO0FBRWxFO0FBQUM7QUFBMEY7O0FBQzNGLE1BQU1BLE1BQU4sU0FBcUJDLDRDQUFLLENBQUNDLFNBQTNCLENBQW9DO0FBQ2hDQyxRQUFNLEdBQUc7QUFDTCxXQUNJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVTLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVHO0FBQUcsUUFBRSxFQUFDLE1BQU47QUFBYSxVQUFJLEVBQUMsR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSCxFQU1RO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVJO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixFQUdJO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLEVBSUk7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLENBREosQ0FESixDQU5SLENBRlQsQ0FESjtBQTBCSDs7QUE1QitCOztBQStCckJILHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtDb250ZW5lZG9ySGVhZGVyLEdyaWxsYX0gZnJvbSAnLi9zdHlsZWQnO1xuXG57LyogaW1wb3J0byBlbCBkaXYgcXVlIGNyZW8gZW4gc3R5bGVkKi99XG5cbnsvKiBFc3RlIGVzIGVsIGNvbXBvZW5udGUgZG9uZGUgdm9zIGEgcG9uZXIgZWwgY29kaWdvIGRlbGhlYWRlciovfVxuXG57LyogbGEgY2xhc2UgdGllbmUgdGllbmUgcXVlIGxsYW1hcnNlIGlndWFsIGEgbGEgY2FycGV0YSBxdWUgY29uaXRlbmUgdG9kbywgb3NlYSwgaGVhZGVyKi99XG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgcmVuZGVyICgpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRlbmVkb3JIZWFkZXI+XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgPEdyaWxsYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJsb2dvXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5UT1JORU9TPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkNBTEVOREFSSU88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+QVlVREE8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RUwgUFJPWUVDVE88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICAgPC9HcmlsbGE+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NvbnRlbmVkb3JIZWFkZXI+XG5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/index.js\n");

/***/ }),

/***/ "./components/Header/styled.js":
/*!*************************************!*\
  !*** ./components/Header/styled.js ***!
  \*************************************/
/*! exports provided: ContenedorHeader, Grilla */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContenedorHeader\", function() { return ContenedorHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grilla\", function() { return Grilla; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n{\n  /* Aca traigo el styled para escribir el css*/\n}\n{\n  /* Este es el styled el codigo delheader*/\n}\nconst ContenedorHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"styled__ContenedorHeader\",\n  componentId: \"sc-1exs9w2-0\"\n})([\"*{padding:0;margin:0;}background-color:#272727;padding:1% 0 1% 0%;#logo{width:20%;}nav{width:50%;}nav ul li{display:flex;justify-content:space-between;}nav ul li a{text-decoration:none;color:#eeeeee;font-size:1em;font-weight:600;transition:all 0.2s ease 0s;}nav ul li a:hover{border-bottom:2px;border-bottom-color:#ea33bc;}\"]);\nconst Grilla = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"styled__Grilla\",\n  componentId: \"sc-1exs9w2-1\"\n})([\"*{padding:0;margin:0;}width:65%;margin:0 auto;background-color:grey;display:flex;justify-content:space-between;\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9zdHlsZWQuanM/NGQwOCJdLCJuYW1lcyI6WyJDb250ZW5lZG9ySGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiR3JpbGxhIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNFO0FBQ0Q7QUFFRDtBQUNFO0FBQ0Q7QUFFRCxNQUFNQSxnQkFBZ0IsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyVUFBdEI7QUFvQ0EsTUFBTUMsTUFBTSxHQUFHRix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVIQUFaIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIvc3R5bGVkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG57XG4gIC8qIEFjYSB0cmFpZ28gZWwgc3R5bGVkIHBhcmEgZXNjcmliaXIgZWwgY3NzKi9cbn1cblxue1xuICAvKiBFc3RlIGVzIGVsIHN0eWxlZCBlbCBjb2RpZ28gZGVsaGVhZGVyKi9cbn1cblxuY29uc3QgQ29udGVuZWRvckhlYWRlciA9IHN0eWxlZC5kaXZgXG4gICoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyNztcbiAgcGFkZGluZzogMSUgMCAxJSAwJTtcblxuICAjbG9nbyB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuXG4gIG5hdiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIG5hdiB1bCBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICBuYXYgdWwgbGkgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZWVlZWVlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcbiAgfVxuXG4gIG5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAycHg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2VhMzNiYztcbiAgfVxuYDtcblxuY29uc3QgR3JpbGxhID0gc3R5bGVkLmRpdmBcbiAgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICB3aWR0aDogNjUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuZXhwb3J0IHsgQ29udGVuZWRvckhlYWRlciwgR3JpbGxhIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/styled.js\n");

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./components/Header/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n// Export all your components here\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LmpzPzdiZTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnQgYWxsIHlvdXIgY29tcG9uZW50cyBoZXJlXG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyIH0gZnJvbSAnLi9IZWFkZXInO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/index.js\n");

/***/ }),

/***/ "./containers/Layout/index.js":
/*!************************************!*\
  !*** ./containers/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ \"./components/index.js\");\nvar _jsxFileName = \"/mnt/c/Users/Gonza/Documents/Work/Personal/dev/Virtual-Tournaments/containers/Layout/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Layout() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"Header\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0xheW91dC9pbmRleC5qcz9kYTU4Il0sIm5hbWVzIjpbIkxheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQy9CLFNBQ0UsbUVBQ0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQUtEIiwiZmlsZSI6Ii4vY29udGFpbmVycy9MYXlvdXQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdjb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/Layout/index.js\n");

/***/ }),

/***/ "./containers/index.js":
/*!*****************************!*\
  !*** ./containers/index.js ***!
  \*****************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ \"./containers/Layout/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Layout\", function() { return _Layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n// Export all your containers here\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL2luZGV4LmpzP2NhNzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL2NvbnRhaW5lcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnQgYWxsIHlvdXIgY29udGFpbmVycyBoZXJlXG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGF5b3V0IH0gZnJvbSAnLi9MYXlvdXQnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./containers/index.js\n");

/***/ }),

/***/ "./lib/GlobalStyle.js":
/*!****************************!*\
  !*** ./lib/GlobalStyle.js ***!
  \****************************/
/*! exports provided: GlobalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyles\", function() { return GlobalStyles; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/helpers */ \"./lib/utils/helpers.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./lib/constants/index.js\");\n\n\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  /* root vars */\n  :root {\n    --black: ${_constants__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].black.toCSS()};\n    --white: ${_constants__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].white.toCSS()};\n  }\n\n  /* Box sizing rules */\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  /* Remove default padding */\n  ul[class],\n  ol[class] {\n    padding: 0;\n  }\n\n  /* Remove default margin */\n  body,\n  h1,\n  h2,\n  h3,\n  h4,\n  p,\n  ul[class],\n  ol[class],\n  li,\n  figure,\n  figcaption,\n  blockquote,\n  dl,\n  dd {\n    margin: 0;\n  }\n\n  /* Set core body defaults */\n  body {\n    min-height: 100vh;\n    min-height: -webkit-fill-available;\n    scroll-behavior: smooth;\n    text-rendering: optimizeSpeed;\n    line-height: 1.5;\n    background-color: var(--white);\n    color: var(--white);\n    --safe-area-inset-bottom: env(safe-area-inset-bottom);\n  }\n\n  /* Remove list styles on ul, ol elements with a class attribute */\n  ul[class],\n  ol[class] {\n    list-style: none;\n  }\n\n  /* A elements that don't have a class get default styles */\n  a:not([class]) {\n    text-decoration-skip-ink: auto;\n  }\n\n  /* Make images easier to work with */\n  img {\n    max-width: 100%;\n    display: block;\n  }\n\n  /* Natural flow and rhythm in articles by default */\n  article > * + * {\n    margin-top: 1em;\n  }\n\n  /* Inherit fonts for inputs and buttons */\n  input,\n  button,\n  textarea,\n  select {\n    font: inherit;\n  }\n\n  .hackSpace {\n    width: 100%;\n    height: auto;\n    margin-top: 50px;\n  }\n\n  /* Remove all animations and transitions for people that prefer not to see them */\n  @media (prefers-reduced-motion: reduce) {\n    * {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n      scroll-behavior: auto !important;\n    }\n  }\n\n  html {\n  }\n\n  /* \n      Utilitary classes & Styles\n  */\n\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvR2xvYmFsU3R5bGUuanM/NjY5ZSJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkNvbG9ycyIsImJsYWNrIiwidG9DU1MiLCJ3aGl0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ08sTUFBTUEsWUFBWSxHQUFHQyxtRUFBa0I7OztlQUcvQkMsaURBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxLQUFiLEVBQXFCO2VBQ3JCRixpREFBTSxDQUFDRyxLQUFQLENBQWFELEtBQWIsRUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUo3QiIsImZpbGUiOiIuL2xpYi9HbG9iYWxTdHlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcHhUb1JlbSB9IGZyb20gJ3V0aWxzL2hlbHBlcnMnO1xuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAnY29uc3RhbnRzJztcbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgLyogcm9vdCB2YXJzICovXG4gIDpyb290IHtcbiAgICAtLWJsYWNrOiAke0NvbG9ycy5ibGFjay50b0NTUygpfTtcbiAgICAtLXdoaXRlOiAke0NvbG9ycy53aGl0ZS50b0NTUygpfTtcbiAgfVxuXG4gIC8qIEJveCBzaXppbmcgcnVsZXMgKi9cbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC8qIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgKi9cbiAgdWxbY2xhc3NdLFxuICBvbFtjbGFzc10ge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAvKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cbiAgYm9keSxcbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIHAsXG4gIHVsW2NsYXNzXSxcbiAgb2xbY2xhc3NdLFxuICBsaSxcbiAgZmlndXJlLFxuICBmaWdjYXB0aW9uLFxuICBibG9ja3F1b3RlLFxuICBkbCxcbiAgZGQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cbiAgYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWluLWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIC0tc2FmZS1hcmVhLWluc2V0LWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICB9XG5cbiAgLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgY2xhc3MgYXR0cmlidXRlICovXG4gIHVsW2NsYXNzXSxcbiAgb2xbY2xhc3NdIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG5cbiAgLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cbiAgYTpub3QoW2NsYXNzXSkge1xuICAgIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbiAgfVxuXG4gIC8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAvKiBOYXR1cmFsIGZsb3cgYW5kIHJoeXRobSBpbiBhcnRpY2xlcyBieSBkZWZhdWx0ICovXG4gIGFydGljbGUgPiAqICsgKiB7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICB9XG5cbiAgLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXG4gIGlucHV0LFxuICBidXR0b24sXG4gIHRleHRhcmVhLFxuICBzZWxlY3Qge1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gIH1cblxuICAuaGFja1NwYWNlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuXG4gIC8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucyBhbmQgdHJhbnNpdGlvbnMgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cbiAgQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgICAqIHtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIGh0bWwge1xuICB9XG5cbiAgLyogXG4gICAgICBVdGlsaXRhcnkgY2xhc3NlcyAmIFN0eWxlc1xuICAqL1xuXG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/GlobalStyle.js\n");

/***/ }),

/***/ "./lib/constants/colors.js":
/*!*********************************!*\
  !*** ./lib/constants/colors.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Color = __webpack_require__(/*! color-js */ \"color-js\");\n\nconst Colors = {\n  black: Color('#000000'),\n  white: Color('#ffffff')\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Colors);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29uc3RhbnRzL2NvbG9ycy5qcz9kYTc5Il0sIm5hbWVzIjpbIkNvbG9yIiwicmVxdWlyZSIsIkNvbG9ycyIsImJsYWNrIiwid2hpdGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDBCQUFELENBQXJCOztBQUVBLE1BQU1DLE1BQU0sR0FBRztBQUNiQyxPQUFLLEVBQUVILEtBQUssQ0FBQyxTQUFELENBREM7QUFFYkksT0FBSyxFQUFFSixLQUFLLENBQUMsU0FBRDtBQUZDLENBQWY7QUFLZUUscUVBQWYiLCJmaWxlIjoiLi9saWIvY29uc3RhbnRzL2NvbG9ycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvbG9yID0gcmVxdWlyZSgnY29sb3ItanMnKTtcblxuY29uc3QgQ29sb3JzID0ge1xuICBibGFjazogQ29sb3IoJyMwMDAwMDAnKSxcbiAgd2hpdGU6IENvbG9yKCcjZmZmZmZmJyksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/constants/colors.js\n");

/***/ }),

/***/ "./lib/constants/index.js":
/*!********************************!*\
  !*** ./lib/constants/index.js ***!
  \********************************/
/*! exports provided: Colors, media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./lib/constants/colors.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Colors\", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media */ \"./lib/constants/media.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"media\", function() { return _media__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29uc3RhbnRzL2luZGV4LmpzPzU2NzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL2xpYi9jb25zdGFudHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIENvbG9ycyB9IGZyb20gJy4vY29sb3JzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWVkaWEgfSBmcm9tICcuL21lZGlhJztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/constants/index.js\n");

/***/ }),

/***/ "./lib/constants/media.js":
/*!********************************!*\
  !*** ./lib/constants/media.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  smallDevice: '(min-width: 36em)',\n  mediumDevice: '(min-width: 48em)',\n  largeDevice: '(min-width: 62em)',\n  fullHDevice: '(min-width: 90em)'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY29uc3RhbnRzL21lZGlhLmpzPzVlZmYiXSwibmFtZXMiOlsic21hbGxEZXZpY2UiLCJtZWRpdW1EZXZpY2UiLCJsYXJnZURldmljZSIsImZ1bGxIRGV2aWNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlO0FBQ2JBLGFBQVcsRUFBRSxtQkFEQTtBQUViQyxjQUFZLEVBQUUsbUJBRkQ7QUFHYkMsYUFBVyxFQUFFLG1CQUhBO0FBSWJDLGFBQVcsRUFBRTtBQUpBLENBQWYiLCJmaWxlIjoiLi9saWIvY29uc3RhbnRzL21lZGlhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBzbWFsbERldmljZTogJyhtaW4td2lkdGg6IDM2ZW0pJyxcbiAgbWVkaXVtRGV2aWNlOiAnKG1pbi13aWR0aDogNDhlbSknLFxuICBsYXJnZURldmljZTogJyhtaW4td2lkdGg6IDYyZW0pJyxcbiAgZnVsbEhEZXZpY2U6ICcobWluLXdpZHRoOiA5MGVtKScsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/constants/media.js\n");

/***/ }),

/***/ "./lib/utils/helpers.js":
/*!******************************!*\
  !*** ./lib/utils/helpers.js ***!
  \******************************/
/*! exports provided: pxToRem, getCurrentYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pxToRem\", function() { return pxToRem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentYear\", function() { return getCurrentYear; });\n/**\n * pxToRem\n * @param value: Int\n */\nconst pxToRem = value => `${value / 16}rem`;\nconst getCurrentYear = () => new Date().getFullYear();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMvaGVscGVycy5qcz9kNjljIl0sIm5hbWVzIjpbInB4VG9SZW0iLCJ2YWx1ZSIsImdldEN1cnJlbnRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUlPLE1BQU1BLE9BQU8sR0FBSUMsS0FBRCxJQUFZLEdBQUVBLEtBQUssR0FBRyxFQUFHLEtBQXpDO0FBRUEsTUFBTUMsY0FBYyxHQUFHLE1BQU0sSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQTdCIiwiZmlsZSI6Ii4vbGliL3V0aWxzL2hlbHBlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHB4VG9SZW1cbiAqIEBwYXJhbSB2YWx1ZTogSW50XG4gKi9cbmV4cG9ydCBjb25zdCBweFRvUmVtID0gKHZhbHVlKSA9PiBgJHt2YWx1ZSAvIDE2fXJlbWA7XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50WWVhciA9ICgpID0+IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/utils/helpers.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers */ \"./containers/index.js\");\n/* harmony import */ var _lib_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/GlobalStyle */ \"./lib/GlobalStyle.js\");\nvar _jsxFileName = \"/mnt/c/Users/Gonza/Documents/Work/Personal/dev/Virtual-Tournaments/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, \"My site\")), __jsx(_containers__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }))), __jsx(_lib_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__[\"GlobalStyles\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQURGLEVBSUUsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBSkYsRUFPRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGO0FBV0Q7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnY29udGFpbmVycyc7XG5pbXBvcnQgeyBHbG9iYWxTdHlsZXMgfSBmcm9tICdsaWIvR2xvYmFsU3R5bGUnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NeSBzaXRlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "color-js":
/*!***************************!*\
  !*** external "color-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"color-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvci1qc1wiP2FkYjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiY29sb3ItanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvci1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///color-js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });