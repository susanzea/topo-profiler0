/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@google/earthengine/build/browser.js":
/*!***********************************************************!*\
  !*** ./node_modules/@google/earthengine/build/browser.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var ee = __webpack_require__(/*! @google/earthengine */ \"./node_modules/@google/earthengine/build/browser.js\");\n\nvar privateKey = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './privatekey.json'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // Initialize client library and run analysis.\n\n\nvar runAnalysis = function runAnalysis() {\n  ee.initialize(null, null, function () {// ... run analysis ...\n  }, function (e) {\n    console.error('Initialization error: ' + e);\n  });\n}; // Authenticate using a service account.\n\n\nee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function (e) {\n  console.error('Authentication error: ' + e);\n});\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var body = document.querySelector(\"body\"); // debugger\n\n  console.log(ee);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLGdGQUFELENBQWhCOztBQUNBLElBQUlDLFVBQVUsR0FBR0QsbUJBQU8sQ0FBQyxnSkFBRCxDQUF4QixDLENBRUE7OztBQUNBLElBQUlFLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVk7QUFDMUJILEVBQUFBLEVBQUUsQ0FBQ0ksVUFBSCxDQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsWUFBWSxDQUNsQztBQUNILEdBRkQsRUFFRyxVQUFVQyxDQUFWLEVBQWE7QUFDWkMsSUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsMkJBQTJCRixDQUF6QztBQUNILEdBSkQ7QUFLSCxDQU5ELEMsQ0FRQTs7O0FBQ0FMLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyx5QkFBUixDQUFrQ1AsVUFBbEMsRUFBOENDLFdBQTlDLEVBQTJELFVBQVVFLENBQVYsRUFBYTtBQUNwRUMsRUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsMkJBQTJCRixDQUF6QztBQUNILENBRkQ7QUFJQUssUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixNQUF2QixDQUFiLENBRGdELENBRWhEOztBQUNBUCxFQUFBQSxPQUFPLENBQUNRLEdBQVIsQ0FBWWQsRUFBWjtBQUNILENBSkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BvX3Byb2ZpbGVyX3Byb2ovLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZWUgPSByZXF1aXJlKCdAZ29vZ2xlL2VhcnRoZW5naW5lJyk7XG52YXIgcHJpdmF0ZUtleSA9IHJlcXVpcmUoJy4vcHJpdmF0ZWtleS5qc29uJyk7XG5cbi8vIEluaXRpYWxpemUgY2xpZW50IGxpYnJhcnkgYW5kIHJ1biBhbmFseXNpcy5cbnZhciBydW5BbmFseXNpcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBlZS5pbml0aWFsaXplKG51bGwsIG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gLi4uIHJ1biBhbmFseXNpcyAuLi5cbiAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdJbml0aWFsaXphdGlvbiBlcnJvcjogJyArIGUpO1xuICAgIH0pO1xufTtcblxuLy8gQXV0aGVudGljYXRlIHVzaW5nIGEgc2VydmljZSBhY2NvdW50LlxuZWUuZGF0YS5hdXRoZW50aWNhdGVWaWFQcml2YXRlS2V5KHByaXZhdGVLZXksIHJ1bkFuYWx5c2lzLCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0F1dGhlbnRpY2F0aW9uIGVycm9yOiAnICsgZSk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgIC8vIGRlYnVnZ2VyXG4gICAgY29uc29sZS5sb2coZWUpXG59KTtcblxuXG5cblxuIl0sIm5hbWVzIjpbImVlIiwicmVxdWlyZSIsInByaXZhdGVLZXkiLCJydW5BbmFseXNpcyIsImluaXRpYWxpemUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGF0YSIsImF1dGhlbnRpY2F0ZVZpYVByaXZhdGVLZXkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BvX3Byb2ZpbGVyX3Byb2ovLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;