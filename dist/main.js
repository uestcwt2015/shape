/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/basic/point.js":
/*!****************************!*\
  !*** ./src/basic/point.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* \n * @file point.js\n */\n\nclass Point {\n  constructor(xPos, yPos) {\n    this.x = xPos;\n    this.y = yPos;\n  }\n\n  setXPos(newVal) {\n    this.x = newVal;\n  }\n\n  setYPos(newVal) {\n    this.y = newVal;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Point);\n\n//# sourceURL=webpack:///./src/basic/point.js?");

/***/ }),

/***/ "./src/basic/shape.js":
/*!****************************!*\
  !*** ./src/basic/shape.js ***!
  \****************************/
/*! exports provided: line, rect, circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"line\", function() { return line; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rect\", function() { return rect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"circle\", function() { return circle; });\n/** \n * @file shape.js\n*/\n\n\n/* \n  options: {\n    startPos: Point,\n    endPos: Point,\n    lineWidth: int\n    lineColor: string,\n  }  \n*/\nfunction line(ctx, opts) {\n  const { startPos,  endPos, lineWidth=1, lineColor=\"#000\" } = opts;\n  \n  // move to begin\n  ctx.beginPath();\n  ctx.moveTo(startPos.x, startPos.y);\n\n  // draw line\n  ctx.lineWidth = lineWidth;\n  ctx.strokeStyle = lineColor;\n  ctx.lineTo(endPos.x, endPos.y);\n  ctx.stroke();\n\n  ctx.endPath();\n};\n\n/* \n  options: {\n    startPos: Point,\n    endPos: Point,\n    lineWidth: int,\n    isFill: bool,\n    lineColor: string,\n    fillColor: string\n  }  \n*/\nfunction rect(ctx, opts) {\n  const { startPos,  endPos, lineWidth=1, isFill=false, lineColor=\"#000\", fillColor=\"#fff\" } = opts;\n\n  ctx.lineWidth = lineWidth;\n  \n  // calculate width and height\n  let width = endPos.x - startPos.x;\n  let height = endPos.y - startPos.y;\n\n  // draw rect\n  if (isFill) {\n    ctx.fillStyle = fillColor;\n    ctx.fillRect(startPos.x, startPos.y, width, height);\n  } else {\n    ctx.strokeStyle = lineColor;\n    ctx.strokeRect(startPos.x, startPos.y, width, height);\n    console.log(startPos, lineWidth, lineColor);\n  }\n}\n\n/* \n  options: {\n    center: Point,\n    radius: int,\n    startAngle: rad,\n    endAngle: rad,\n    anticlockwise: bool,\n    lineWidth: int,\n    isFill: bool,\n    lineColor: string,\n    fillColor: string\n  }  \n*/\n\nfunction circle(ctx, opts) {\n  const { center,  radius, startAngle=0, endAngle=2*Math.PI, anticlockwise=true, lineWidth=1, isFill=false, lineColor=\"#000\", fillColor=\"#fff\" } = opts;\n\n  ctx.lineWidth = lineWidth;\n\n  // draw circle\n  ctx.arc(center.x, center.y, radius, startAngle, endAngle, anticlockwise);\n\n  // fill or stroke\n  if (isFill) {\n    ctx.fillStyle = fillColor;\n    ctx.fill();\n  } else {\n    ctx.strokeStyle = lineColor;\n    ctx.stroke();\n  }\n}\n\n//# sourceURL=webpack:///./src/basic/shape.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _basic_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic/shape */ \"./src/basic/shape.js\");\n/* harmony import */ var _basic_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/point */ \"./src/basic/point.js\");\n/** \n * @file index.js\n */\n\n\n\n\nconst canvas = document.getElementById(\"canvas\");\nconsole.log(canvas);\n\nfunction init(el) {\n  addEventToCanvas(el, \"rect\");\n}\n\nfunction addEventToCanvas(el, type) {\n  let startPoint = null;\n  let endPoint = null;\n\n  const ctx = el.getContext(\"2d\");\n\n  el.addEventListener(\"mousedown\", e => {\n    startPoint = new _basic_point__WEBPACK_IMPORTED_MODULE_1__[\"default\"](e.x, e.y);\n  });\n\n  el.addEventListener(\"mousemove\", e => {\n    if (!startPoint) return;\n    _basic_shape__WEBPACK_IMPORTED_MODULE_0__[type](ctx, {\n      startPos: startPoint, \n      endPos: {\n        x: e.x,\n        y: e.y\n      }\n    });\n  });\n\n  el.addEventListener(\"mouseup\", e => {\n    endPoint = new _basic_point__WEBPACK_IMPORTED_MODULE_1__[\"default\"](e.x, e.y);\n    console.log(startPoint, endPoint);\n    _basic_shape__WEBPACK_IMPORTED_MODULE_0__[type](ctx, {\n      startPos: startPoint, \n      endPos: endPoint\n    });\n    startPoint = null;\n    endPoint = null;\n  });\n}\n\ninit(canvas);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });