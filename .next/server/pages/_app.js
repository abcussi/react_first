module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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

/***/ "./src/constants/ActionTypes.js":
/*!**************************************!*\
  !*** ./src/constants/ActionTypes.js ***!
  \**************************************/
/*! exports provided: USER_SINGUP_SUCCESS, USER_SINGUP, USER_SINGIN_SUCCESS, USER_SINGIN, UPDATE_USER_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_SINGUP_SUCCESS\", function() { return USER_SINGUP_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_SINGUP\", function() { return USER_SINGUP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_SINGIN_SUCCESS\", function() { return USER_SINGIN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_SINGIN\", function() { return USER_SINGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_USER_TYPE\", function() { return UPDATE_USER_TYPE; });\nconst USER_SINGUP_SUCCESS = 'USER_SINGUP_SUCCESS';\nconst USER_SINGUP = 'USER_SINGUP';\nconst USER_SINGIN_SUCCESS = 'USER_SINGIN_SUCCESS';\nconst USER_SINGIN = 'USER_SINGIN';\nconst UPDATE_USER_TYPE = 'UPDATE_USER_TYPE';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL0FjdGlvblR5cGVzLmpzP2FkN2IiXSwibmFtZXMiOlsiVVNFUl9TSU5HVVBfU1VDQ0VTUyIsIlVTRVJfU0lOR1VQIiwiVVNFUl9TSU5HSU5fU1VDQ0VTUyIsIlVTRVJfU0lOR0lOIiwiVVBEQVRFX1VTRVJfVFlQRSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCIiwiZmlsZSI6Ii4vc3JjL2NvbnN0YW50cy9BY3Rpb25UeXBlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBVU0VSX1NJTkdVUF9TVUNDRVNTID0gJ1VTRVJfU0lOR1VQX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFVTRVJfU0lOR1VQID0gJ1VTRVJfU0lOR1VQJztcbmV4cG9ydCBjb25zdCBVU0VSX1NJTkdJTl9TVUNDRVNTID0gJ1VTRVJfU0lOR0lOX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFVTRVJfU0lOR0lOID0gJ1VTRVJfU0lOR0lOJztcblxuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSX1RZUEUgPSAnVVBEQVRFX1VTRVJfVFlQRSc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants/ActionTypes.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_configure_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/configure-store */ \"./src/utils/configure-store.js\");\n/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/antd.less */ \"./styles/antd.less\");\n/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_antd_less__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/abcc/Documents/repos/react_first/src/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  const store = Object(_utils_configure_store__WEBPACK_IMPORTED_MODULE_2__[\"useStore\"])(pageProps.initialReduxState);\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: store,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  })), \";\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ1c2VTdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDMUMsUUFBTUMsS0FBSyxHQUFHQyx1RUFBUSxDQUFDRixTQUFTLENBQUNHLGlCQUFYLENBQXRCO0FBRUEsU0FDRSxNQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFRixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLE1BREY7QUFLRCxDQVJEOztBQVVlRixvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi91dGlscy9jb25maWd1cmUtc3RvcmUnO1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMvYW50ZC5sZXNzJztcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbiAgICA8L1Byb3ZpZGVyPlxuICApICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/redux/index.js":
/*!****************************!*\
  !*** ./src/redux/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createReducer; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/auth */ \"./src/redux/reducers/auth.js\");\n/* harmony import */ var _reducers_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/global */ \"./src/redux/reducers/global.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction createReducer(asynReducers = {}) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])(_objectSpread({\n    auth: _reducers_auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    global: _reducers_global__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, asynReducers));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvaW5kZXguanM/ZWM4ZiJdLCJuYW1lcyI6WyJjcmVhdGVSZWR1Y2VyIiwiYXN5blJlZHVjZXJzIiwiY29tYmluZVJlZHVjZXJzIiwiYXV0aCIsImdsb2JhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxDQUF1QkMsWUFBWSxHQUFHLEVBQXRDLEVBQTBDO0FBQ3ZELFNBQU9DLDZEQUFlO0FBQ3BCQyxnRUFEb0I7QUFFcEJDLG9FQUFNQTtBQUZjLEtBR2pCSCxZQUhpQixFQUF0QjtBQUtEIiwiZmlsZSI6Ii4vc3JjL3JlZHV4L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGF1dGggZnJvbSAnLi9yZWR1Y2Vycy9hdXRoJztcbmltcG9ydCBnbG9iYWwgZnJvbSAnLi9yZWR1Y2Vycy9nbG9iYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVSZWR1Y2VyKGFzeW5SZWR1Y2VycyA9IHt9KSB7XG4gIHJldHVybiBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGF1dGgsXG4gICAgZ2xvYmFsLFxuICAgIC4uLmFzeW5SZWR1Y2Vyc1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/index.js\n");

/***/ }),

/***/ "./src/redux/reducers/auth.js":
/*!************************************!*\
  !*** ./src/redux/reducers/auth.js ***!
  \************************************/
/*! exports provided: INIT_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INIT_STATE\", function() { return INIT_STATE; });\n/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ \"./src/constants/ActionTypes.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst INIT_STATE = {\n  dataUser: {},\n  tokenUser: null\n};\n\nconst auth = (state = INIT_STATE, {\n  type,\n  payload\n}) => {\n  switch (type) {\n    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"USER_SINGIN_SUCCESS\"]:\n      {\n        const {\n          tokenUser,\n          dataUser\n        } = payload;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          tokenUser,\n          dataUser: _objectSpread({}, dataUser)\n        });\n      }\n\n    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"USER_SINGUP_SUCCESS\"]:\n      {\n        return _objectSpread({}, state);\n      }\n\n    default:\n      return _objectSpread({}, state);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aC5qcz9lMjJiIl0sIm5hbWVzIjpbIklOSVRfU1RBVEUiLCJkYXRhVXNlciIsInRva2VuVXNlciIsImF1dGgiLCJzdGF0ZSIsInR5cGUiLCJwYXlsb2FkIiwiVVNFUl9TSU5HSU5fU1VDQ0VTUyIsIlVTRVJfU0lOR1VQX1NVQ0NFU1MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBTU8sTUFBTUEsVUFBVSxHQUFHO0FBQ3hCQyxVQUFRLEVBQUUsRUFEYztBQUV4QkMsV0FBUyxFQUFFO0FBRmEsQ0FBbkI7O0FBS1AsTUFBTUMsSUFBSSxHQUFHLENBQUNDLEtBQUssR0FBR0osVUFBVCxFQUFxQjtBQUFFSyxNQUFGO0FBQVFDO0FBQVIsQ0FBckIsS0FBMkM7QUFDdEQsVUFBUUQsSUFBUjtBQUNFLFNBQUtFLDBFQUFMO0FBQTBCO0FBQ3hCLGNBQU07QUFBRUwsbUJBQUY7QUFBYUQ7QUFBYixZQUEwQkssT0FBaEM7QUFFQSwrQ0FBWUYsS0FBWjtBQUFtQkYsbUJBQW5CO0FBQThCRCxrQkFBUSxvQkFBT0EsUUFBUDtBQUF0QztBQUNEOztBQUNELFNBQUtPLDBFQUFMO0FBQTBCO0FBQ3hCLGlDQUFZSixLQUFaO0FBQ0Q7O0FBQ0Q7QUFDRSwrQkFBWUEsS0FBWjtBQVZKO0FBWUQsQ0FiRDs7QUFlZUQsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFVTRVJfU0lOR0lOX1NVQ0NFU1MsXG4gIFVTRVJfU0lOR1VQX1NVQ0NFU1Ncbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzJztcblxuXG5leHBvcnQgY29uc3QgSU5JVF9TVEFURSA9IHtcbiAgZGF0YVVzZXI6IHt9LFxuICB0b2tlblVzZXI6IG51bGwsXG59XG5cbmNvbnN0IGF1dGggPSAoc3RhdGUgPSBJTklUX1NUQVRFLCB7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFVTRVJfU0lOR0lOX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHsgdG9rZW5Vc2VyLCBkYXRhVXNlciB9ID0gcGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRva2VuVXNlciwgZGF0YVVzZXI6IHsgLi4uZGF0YVVzZXIgfSB9O1xuICAgIH1cbiAgICBjYXNlIFVTRVJfU0lOR1VQX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGg7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/reducers/auth.js\n");

/***/ }),

/***/ "./src/redux/reducers/global.js":
/*!**************************************!*\
  !*** ./src/redux/reducers/global.js ***!
  \**************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/ActionTypes */ \"./src/constants/ActionTypes.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  userTypes: []\n};\n\nconst global = (state = initialState, {\n  type,\n  payload\n}) => {\n  switch (type) {\n    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__[\"UPDATE_USER_TYPE\"]:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          userTypes: [...payload]\n        });\n      }\n\n    default:\n      return _objectSpread({}, state);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (global);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvZ2xvYmFsLmpzPzQxMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlclR5cGVzIiwiZ2xvYmFsIiwic3RhdGUiLCJ0eXBlIiwicGF5bG9hZCIsIlVQREFURV9VU0VSX1RZUEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBS08sTUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxXQUFTLEVBQUU7QUFEZSxDQUFyQjs7QUFJUCxNQUFNQyxNQUFNLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHSCxZQUFULEVBQXVCO0FBQUVJLE1BQUY7QUFBUUM7QUFBUixDQUF2QixLQUE2QztBQUMxRCxVQUFRRCxJQUFSO0FBQ0UsU0FBS0UsdUVBQUw7QUFBdUI7QUFDckIsK0NBQVlILEtBQVo7QUFBbUJGLG1CQUFTLEVBQUUsQ0FBQyxHQUFHSSxPQUFKO0FBQTlCO0FBQ0Q7O0FBQ0Q7QUFDRSwrQkFBWUYsS0FBWjtBQUxKO0FBT0QsQ0FSRDs7QUFVZUQscUVBQWYiLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlcnMvZ2xvYmFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVVBEQVRFX1VTRVJfVFlQRVxufSBmcm9tICcuLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xuXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXJUeXBlczogW11cbn1cblxuY29uc3QgZ2xvYmFsID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFVQREFURV9VU0VSX1RZUEU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyVHlwZXM6IFsuLi5wYXlsb2FkXSB9O1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnbG9iYWw7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/reducers/global.js\n");

/***/ }),

/***/ "./src/utils/configure-store.js":
/*!**************************************!*\
  !*** ./src/utils/configure-store.js ***!
  \**************************************/
/*! exports provided: useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return useStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux */ \"./src/redux/index.js\");\n\n\nfunction useStore(initialState = {}) {\n  const composeEnhancers =  false ? undefined : redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(Object(_redux__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), initialState, redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29uZmlndXJlLXN0b3JlLmpzPzljNDkiXSwibmFtZXMiOlsidXNlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjb21wb3NlRW5oYW5jZXJzIiwid2luZG93IiwiY29tcG9zZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjcmVhdGVSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVPLFNBQVNBLFFBQVQsQ0FBa0JDLFlBQVksR0FBRyxFQUFqQyxFQUFxQztBQUMxQyxRQUFNQyxnQkFBZ0IsR0FDcEIsU0FDSUMsU0FESixHQUlJQyw2Q0FMTjtBQU9BLFFBQU1DLEtBQUssR0FBR0MseURBQVcsQ0FBQ0Msc0RBQWEsRUFBZCxFQUFrQk4sWUFBbEIsRUFBZ0NHLDZDQUFoQyxDQUF6QjtBQUdBLFNBQU9DLEtBQVA7QUFDRCIsImZpbGUiOiIuL3NyYy91dGlscy9jb25maWd1cmUtc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGNyZWF0ZVJlZHVjZXIgZnJvbSAnLi4vcmVkdXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlID0ge30pIHtcbiAgY29uc3QgY29tcG9zZUVuaGFuY2VycyA9XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fXG4gICAgICA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18oe1xuICAgICAgICBzaG91bGRIb3RSZWxvYWQ6IGZhbHNlLFxuICAgICAgfSlcbiAgICAgIDogY29tcG9zZTtcblxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGNyZWF0ZVJlZHVjZXIoKSwgaW5pdGlhbFN0YXRlLCBjb21wb3NlKTtcblxuXG4gIHJldHVybiBzdG9yZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/configure-store.js\n");

/***/ }),

/***/ "./styles/antd.less":
/*!**************************!*\
  !*** ./styles/antd.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9hbnRkLmxlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/antd.less\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ })

/******/ });