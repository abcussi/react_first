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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/termsConditions.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/containers/TermsConditions/index.js":
/*!*************************************************!*\
  !*** ./src/containers/TermsConditions/index.js ***!
  \*************************************************/
/*! exports provided: TermsConditions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TermsConditions\", function() { return TermsConditions; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nfunction TermsConditions() {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  return __jsx(\"div\", {\n    style: {\n      textAlign: 'center',\n      padding: 15\n    },\n    className: \"jsx-1662570542\"\n  }, __jsx(\"h1\", {\n    className: \"jsx-1662570542\"\n  }, \"Lee atentamente los terminos y condiciones\"), __jsx(\"br\", {\n    className: \"jsx-1662570542\"\n  }), __jsx(\"p\", {\n    className: \"jsx-1662570542\"\n  }, \"los datos son expresamente empresariales, la mayoria de las busquedas seran guardadas como datos para una investigacion de mercado se requerira los permisos de microfono y video de ser necesarios toda la informacion sera proporcionada por google y sus aplicaciones asociadas\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: \"primary\",\n    onClick: () => router.push('/')\n  }, \" volver\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1662570542\"\n  }, [\"p.jsx-1662570542{text-align:center;}\"]));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9UZXJtc0NvbmRpdGlvbnMvaW5kZXguanM/N2JjNyJdLCJuYW1lcyI6WyJUZXJtc0NvbmRpdGlvbnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxlQUFULEdBQTJCO0FBQ2hDLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxTQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRSxRQUFiO0FBQXVCQyxhQUFPLEVBQUU7QUFBaEMsS0FBWjtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUEsa0RBREYsRUFFRTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQSwwUkFIRixFQUtFLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsU0FBYjtBQUF1QixXQUFPLEVBQUUsTUFBTUgsTUFBTSxDQUFDSSxJQUFQLENBQVksR0FBWjtBQUF0QyxlQUxGO0FBQUE7QUFBQSwrQ0FERjtBQWVEIiwiZmlsZSI6Ii4vc3JjL2NvbnRhaW5lcnMvVGVybXNDb25kaXRpb25zL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXJtc0NvbmRpdGlvbnMoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBwYWRkaW5nOiAxNSB9fT5cbiAgICAgIDxoMT5MZWUgYXRlbnRhbWVudGUgbG9zIHRlcm1pbm9zIHkgY29uZGljaW9uZXM8L2gxPlxuICAgICAgPGJyIC8+XG4gICAgICA8cD5sb3MgZGF0b3Mgc29uIGV4cHJlc2FtZW50ZSBlbXByZXNhcmlhbGVzLCBsYSBtYXlvcmlhIGRlIGxhcyBidXNxdWVkYXMgc2VyYW4gZ3VhcmRhZGFzIGNvbW8gZGF0b3MgcGFyYSB1bmEgaW52ZXN0aWdhY2lvbiBkZSBtZXJjYWRvIHNlIHJlcXVlcmlyYSBsb3MgcGVybWlzb3MgZGUgbWljcm9mb25vIHkgdmlkZW8gZGUgc2VyIG5lY2VzYXJpb3MgdG9kYSBsYSBpbmZvcm1hY2lvbiBzZXJhIHByb3BvcmNpb25hZGEgcG9yIGdvb2dsZSB5IHN1cyBhcGxpY2FjaW9uZXMgYXNvY2lhZGFzPC9wPlxuICAgICBcbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfT4gdm9sdmVyPC9CdXR0b24+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9IFxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/containers/TermsConditions/index.js\n");

/***/ }),

/***/ "./src/pages/termsConditions.js":
/*!**************************************!*\
  !*** ./src/pages/termsConditions.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _containers_TermsConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/TermsConditions */ \"./src/containers/TermsConditions/index.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst TermsConditionsPage = () => {\n  return __jsx(_containers_TermsConditions__WEBPACK_IMPORTED_MODULE_1__[\"TermsConditions\"], null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_containers_TermsConditions__WEBPACK_IMPORTED_MODULE_1__[\"TermsConditions\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdGVybXNDb25kaXRpb25zLmpzP2FlZjIiXSwibmFtZXMiOlsiVGVybXNDb25kaXRpb25zUGFnZSIsIlRlcm1zQ29uZGl0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsbUJBQW1CLEdBQUcsTUFBTTtBQUNoQyxTQUFPLE1BQUMsMkVBQUQsT0FBUDtBQUNELENBRkQ7O0FBSWVDLDBJQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Rlcm1zQ29uZGl0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlcm1zQ29uZGl0aW9ucyB9IGZyb20gJy4uL2NvbnRhaW5lcnMvVGVybXNDb25kaXRpb25zJ1xuXG5jb25zdCBUZXJtc0NvbmRpdGlvbnNQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gPFRlcm1zQ29uZGl0aW9ucyAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVybXNDb25kaXRpb25zOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/termsConditions.js\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });