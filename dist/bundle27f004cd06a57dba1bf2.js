/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/checkmark.svg */ "./src/assets/checkmark.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  color: #38332b;\n}\n\nbody {\n  background-color: #f4f4f4;\n  font-family: \"Roboto\", sans-serif;\n}\n\n#page-wrapper {\n  display: flex;\n  gap: 1rem;\n  margin: 20px;\n}\n\n#board-wrapper {\n  height: 600px;\n  width: 600px;\n  display: grid;\n  grid-template-areas: \"leftofboard board\" \". bottomofboard\";\n  grid-template-columns: 1fr 10fr;\n  grid-template-rows: 10fr 1fr;\n  margin-right: 10px;\n}\n\n#leftofboard {\n  display: grid;\n  grid-area: leftofboard;\n  grid-template-rows: repeat(8, 1fr);\n  align-items: center;\n  justify-items: center;\n}\n\n#bottomofboard {\n  display: grid;\n  grid-area: bottomofboard;\n  grid-template-columns: repeat(8, 1fr);\n  align-items: center;\n  justify-items: center;\n}\n\n.rownumber,\n.columnletter {\n  font-size: 1.3rem;\n  color: #38332b;\n}\n\n#board-container {\n  display: grid;\n  grid-area: board;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n  border: 1px solid #38332b;\n}\n\n.square {\n  border: 1px solid #38332b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.square.colored {\n  background-color: #38332b;\n}\n\n.knight {\n  object-fit: contain;\n  width: 100%;\n}\n\n#side-panel {\n  display: flex;\n  flex-direction: column;\n}\n\n.centerer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nh1 {\n  margin: 1rem;\n}\n\n.condition {\n  margin: 0.3rem;\n  display: flex;\n  gap: 0.3rem;\n  align-items: center;\n  font-size: 1.1rem;\n}\n\n.checkbox {\n  border: 1px solid #38332b;\n  height: 1.4rem;\n  width: 1.4rem;\n}\n\n.checked {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n}\n\n#traverse-button {\n  margin: 2rem;\n  padding: 1rem;\n  width: 50%;\n  font-size: 1.7rem;\n  border-radius: 5px;\n  border: none;\n  background-color: #38332b;\n  color: #f4f4f4;\n}\n\n#traverse-button.set {\n  background-color: #3C663E;\n}\n\n.output {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AASA;EACE,sBAAA;EACA,UAAA;EACA,SAAA;EACA,cAAA;AAPF;;AAUA;EACI,yBAdc;EAed,iCAAA;AAPJ;;AAUA;EACE,aAAA;EACA,SAAA;EACA,YAAA;AAPF;;AAUA;EACE,aAAA;EACA,YAAA;EACA,aAAA;EACA,0DACA;EAGA,+BAAA;EACA,4BAAA;EACA,kBAAA;AAVF;;AAaA;EACE,aAAA;EACA,sBAAA;EACA,kCAAA;EACA,mBAAA;EACA,qBAAA;AAVF;;AAaA;EACE,aAAA;EACA,wBAAA;EACA,qCAAA;EACA,mBAAA;EACA,qBAAA;AAVF;;AAaA;;EAEE,iBAAA;EACA,cAzDc;AA+ChB;;AAaA;EACE,aAAA;EACA,gBAAA;EACA,qCAAA;EACA,kCAAA;EACA,yBAAA;AAVF;;AAaA;EACE,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAVF;;AAaA;EACE,yBA5Ec;AAkEhB;;AAaA;EACE,mBAAA;EACA,WAAA;AAVF;;AAaA;EACE,aAAA;EACA,sBAAA;AAVF;;AAaA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AAVF;;AAaA;EACE,YAAA;AAVF;;AAaA;EACE,cAAA;EACA,aAAA;EACA,WAAA;EACA,mBAAA;EACA,iBAAA;AAVF;;AAaA;EACE,yBAAA;EACA,cAAA;EACA,aAAA;AAVF;;AAaA;EACE,yDAAA;EACA,wBAAA;AAVF;;AAaA;EACE,YAAA;EACA,aAAA;EACA,UAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,cAAA;AAVF;;AAaA;EACE,yBAhIY;AAsHd;;AAaA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;AAVF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n$primary-color: #38332b;\n$secondary-color: #f4f4f4;\n$third-color: #3C663E;\n$fourth-color: #B2EDA6;\n\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  color: #38332b;\n}\n\nbody {\n    background-color: $secondary-color;\n    font-family: 'Roboto', sans-serif;\n}\n\n#page-wrapper{\n  display: flex;\n  gap: 1rem;\n  margin:20px;\n}\n\n#board-wrapper{\n  height: 600px;\n  width: 600px;\n  display: grid;\n  grid-template-areas: \n  \"leftofboard board\"\n  \". bottomofboard\";\n\n  grid-template-columns: 1fr 10fr;\n  grid-template-rows: 10fr 1fr;\n  margin-right: 10px;\n}\n\n#leftofboard {\n  display: grid;\n  grid-area: leftofboard;\n  grid-template-rows: repeat(8, 1fr);\n  align-items: center;\n  justify-items: center;\n}\n\n#bottomofboard {\n  display: grid;\n  grid-area: bottomofboard;\n  grid-template-columns: repeat(8, 1fr);\n  align-items: center;\n  justify-items: center;\n}\n\n.rownumber,\n.columnletter{\n  font-size: 1.3rem;\n  color: $primary-color;\n}\n\n#board-container{\n  display: grid;\n  grid-area: board;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n  border: 1px solid $primary-color;\n}\n\n.square{\n  border: 1px solid $primary-color;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.square.colored{\n  background-color: $primary-color;\n}\n\n.knight{\n  object-fit: contain;\n  width: 100%;\n}\n\n#side-panel{\n  display: flex;\n  flex-direction: column;\n}\n\n.centerer{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nh1{\n  margin: 1rem;\n}\n\n.condition{\n  margin: .3rem;\n  display: flex;\n  gap: .3rem;\n  align-items: center;\n  font-size: 1.1rem;\n}\n\n.checkbox{\n  border: 1px solid $primary-color;\n  height: 1.4rem;\n  width: 1.4rem;\n}\n\n.checked{\n  background-image: url('../assets/checkmark.svg');\n  background-size: contain;\n}\n\n#traverse-button{\n  margin: 2rem;\n  padding: 1rem;\n  width: 50%;\n  font-size: 1.7rem;\n  border-radius: 5px;\n  border: none;\n  background-color: #38332b;\n  color: #f4f4f4;\n}\n\n#traverse-button.set{\n  background-color: $third-color;\n}\n\n.output{\n  display: flex;\n  flex-direction: column;\n  gap: .5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "board": () => (/* binding */ board)
/* harmony export */ });
function board() {
  function makeTiles() {
    let board = document.getElementById("board-container");
    for (let i = 1; i < 65; i++) {
      let square = document.createElement("div");
      square.setAttribute("data-x", `${_xCoord(i)}`);
      square.setAttribute("data-y", `${_yCoord(i)}`);
      square.setAttribute("data-coords", `${_xCoord(i)}-${_yCoord(i)}`)
      square.classList.add('square')
      //color tiles:
      if (_yCoord(i) % 2 === 0 && + _xCoord(i) % 2 === 0) {
        square.classList.add("colored");
      } else if (_yCoord(i) % 2 !== 0 && +_xCoord(i) % 2 !== 0) {
        square.classList.add("colored");
      }
        board.appendChild(square);
    }
  }
  makeTiles()

  function _xCoord(i) {
    let modulo = i % 8
    if (modulo !== 0) {
      return modulo
    } else return 8
  }
  
  function _yCoord(i){
    if (i < 9) return 8
    if (i < 17) return 7
    if (i < 25) return 6;
    if (i < 33) return 5;
    if (i < 41) return 4;
    if (i < 49) return 3;
    if (i < 57) return 2;
    if (i < 65) return 1;
  }
}

board();

/***/ }),

/***/ "./src/chessNotation.js":
/*!******************************!*\
  !*** ./src/chessNotation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chessNotation": () => (/* binding */ chessNotation)
/* harmony export */ });
function chessNotation(coords) {
  let string = "";
  string += getLetter(coords[0]);
  string += coords[1];
  string += " "
  console.log(string)
  return string;
}

function getLetter(num) {
  switch (num) {
    case 1:
      return "A";
    case 2:
      return "B";
    case 3:
      return "C";
    case 4:
      return "D";
    case 5:
      return "E";
    case 6:
      return "F";
    case 7:
      return "G";
    case 8:
      return "H";
    default:
      return "Invalid input";
  }
}


/***/ }),

/***/ "./src/displayoutput.js":
/*!******************************!*\
  !*** ./src/displayoutput.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPath": () => (/* binding */ displayPath)
/* harmony export */ });
/* harmony import */ var _chessNotation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chessNotation */ "./src/chessNotation.js");


function displayPath(path) {
  let outputContainer = document.querySelector('.output')
  while (outputContainer.firstChild) {
    outputContainer.removeChild(outputContainer.firstChild)
  }
  path.forEach(element => {
    outputContainer.appendChild(makeSpan(element))
  });
}

function makeSpan(coords) {
  let span = document.createElement("span");
  span.textContent = (0,_chessNotation__WEBPACK_IMPORTED_MODULE_0__.chessNotation)(coords);
  return span
}




/***/ }),

/***/ "./src/knight.js":
/*!***********************!*\
  !*** ./src/knight.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentPosition": () => (/* binding */ currentPosition),
/* harmony export */   "currentTarget": () => (/* binding */ currentTarget),
/* harmony export */   "knight": () => (/* binding */ knight)
/* harmony export */ });
/* harmony import */ var _assets_knight_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/knight.svg */ "./src/assets/knight.svg");
/* harmony import */ var _assets_flagpole_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/flagpole.svg */ "./src/assets/flagpole.svg");



//place the knight on the board, make it draggable and allow target square selection
function knight(coords) {
  let target = document.querySelector(`[data-coords="${coords}"]`);
  let knight = knightImg()
  target.appendChild(knight);
  draggableKnight(knight);
  targetsClickable()
}
knight("4-5");

function currentPosition() {
  let knight = document.querySelector('.knight')
  let position = knight.parentElement
  let x = +position.getAttribute('data-x')
  let y = +position.getAttribute('data-y')
  return [x, y]
}

function currentTarget() {
  let flagpole = document.querySelector('.flagpole')
  let position = flagpole.parentElement
  let x = +position.getAttribute("data-x");
  let y = +position.getAttribute("data-y");
  return [x, y];
}

function emptySquares() {
  return Array.from(document.querySelectorAll(".square:not(:has(img))"));
}

function draggableKnight(img) {
  img.addEventListener("mousedown", startDragging, { once: true });
}

function startDragging() {
  document.body.style.cursor = "grabbing";
  document.getElementById('knightcheck').classList.remove('checked')
  let otherSquares = emptySquares();
  otherSquares.forEach((square) =>
    square.addEventListener("mouseup", dropKnight)
  );
}

function dropKnight() {
  document.querySelector(".knight").remove();
  document.getElementById("knightcheck").classList.add("checked");
  let coords = this.getAttribute("data-coords");
  knight(coords);
  document.body.style.cursor = "pointer";
  let otherSquares = emptySquares();
  otherSquares.forEach((square) => {
    square.removeEventListener("mouseup", dropKnight);
  });
}

function targetsClickable() {
  let otherSquares = emptySquares();
  otherSquares.forEach((square) => {
    square.addEventListener("click", setTargetSquare);
  });
}

function setTargetSquare() {
  let oldFlag = document.querySelector('.flagpole')
  if(oldFlag) oldFlag.remove()
  let flag = flagpoleImg();
  this.appendChild(flag);
  document.getElementById("flagcheck").classList.add("checked");
  boardSet();
}

function knightImg() {
  let img = document.createElement("img");
  img.src = _assets_knight_svg__WEBPACK_IMPORTED_MODULE_0__;
  img.classList.add("knight");
  img.setAttribute("draggable", "false");
  return img;
}

function flagpoleImg() {
  let img = document.createElement("img")
  img.src = _assets_flagpole_svg__WEBPACK_IMPORTED_MODULE_1__
  img.classList.add("flagpole")
  img.setAttribute("draggable", "false")
  return img
}

function boardSet() {
  if (document.querySelector('.knight') && document.querySelector('.flagpole')) {
  document.getElementById("traverse-button").classList.add('set');
  } else {
    document.getElementById("traverse-button").classList.remove("set");
  }
}



/***/ }),

/***/ "./src/knightpath.js":
/*!***************************!*\
  !*** ./src/knightpath.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "knightPath": () => (/* binding */ knightPath)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");
/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight */ "./src/knight.js");



let start = (0,_node__WEBPACK_IMPORTED_MODULE_0__.Node)([4, 5]);
let finish = [8, 6];

function knightPath(root, target) {
  let queue = [root];
  enqueueMovesOf(root);

  function enqueueMovesOf(root) {
    let moves = root.moves;
    let movesNodes = moves.map((move) => (0,_node__WEBPACK_IMPORTED_MODULE_0__.Node)(move));
    movesNodes.forEach((node) => {
      node.prev = root;
      queue.push(node);
    });
  }

  while (queue.length > 0) {
    let first = queue.shift();
    if (isTarget(first)) {
      return path(first);
    }
    enqueueMovesOf(first);
  }

  function isTarget(move) {
    if (move.x === target[0] && move.y === target[1]) {
      return true;
    } else {
      return false;
    }
  }

  function path(node, pathCoords = []) {
    pathCoords.push(node.coords);
    if (!node.prev) {
      return pathCoords.reverse();
    }
    return path(node.prev, pathCoords);
  }
}



/***/ }),

/***/ "./src/moves.js":
/*!**********************!*\
  !*** ./src/moves.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "movesFrom": () => (/* binding */ movesFrom)
/* harmony export */ });
function movesFrom(x, y) {
  let movesArray = []
  movesArray = movesArray.concat(moveNorth(x, y))
  movesArray = movesArray.concat(moveEast(x, y))
  movesArray = movesArray.concat(moveSouth(x, y))
  movesArray = movesArray.concat(moveWest(x, y))
  return movesArray.filter(value => value !== undefined)
}

function moveNorth(x, y) {
  if (y + 2 > 8) return;
  let mv = [];
  if (!(x - 1 < 1)) {
    mv.push([x - 1, y + 2]);
  }
  if (!(x + 1 > 8)) {
    mv.push([x + 1, y + 2]);
  }
  return mv;
}

function moveEast(x, y) {
  if (x + 2 > 8) return;
  let mv = [];
  if (!(y + 1 > 8)) {
    mv.push([x + 2, y + 1]);
  }
  if (!(y - 1 < 1)) {
    mv.push([x + 2, y - 1]);
  }
  return mv;
}

function moveSouth(x, y) {
  if (y - 2 < 1) return;
  let mv = [];
  if (!(x - 1 < 1)) {
    mv.push([x - 1, y - 2]);
  }
  if (!(x + 1 > 8)) {
    mv.push([x + 1, y - 2]);
  }
  return mv;
}

function moveWest(x, y) {
  if (x - 2 < 1) return;
  let mv = [];
  if (!(y + 1 > 8)) {
    mv.push([x - 2, y + 1]);
  }
  if (!(y - 1 < 1)) {
    mv.push([x - 2, y - 1]);
  }
  return mv;
}

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node)
/* harmony export */ });
/* harmony import */ var _moves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moves */ "./src/moves.js");


function Node(coords) {
  let x = +coords[0]
  let y = +coords[1]
  let moves = (0,_moves__WEBPACK_IMPORTED_MODULE_0__.movesFrom)(x, y)
  return {
    x,
    y,
    moves,
    coords: [x, y],
    coordString: `${x}-${y} `
  };
}

/***/ }),

/***/ "./src/assets/checkmark.svg":
/*!**********************************!*\
  !*** ./src/assets/checkmark.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "checkmark.svg";

/***/ }),

/***/ "./src/assets/flagpole.svg":
/*!*********************************!*\
  !*** ./src/assets/flagpole.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "flagpole.svg";

/***/ }),

/***/ "./src/assets/knight.svg":
/*!*******************************!*\
  !*** ./src/assets/knight.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "knight.svg";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knight */ "./src/knight.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node */ "./src/node.js");
/* harmony import */ var _knightpath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./knightpath */ "./src/knightpath.js");
/* harmony import */ var _displayoutput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayoutput */ "./src/displayoutput.js");








function armTraverseButton() {
  let btn = document.getElementById("traverse-button");
  btn.addEventListener("click", execute);
}
armTraverseButton()

function ready(btn) {
  if (document.getElementById("traverse-button").classList.contains("set")) {
    return true;
  }
  return false;
}

function execute() {
  if (!ready()) return;
  let start = (0,_node__WEBPACK_IMPORTED_MODULE_3__.Node)((0,_knight__WEBPACK_IMPORTED_MODULE_2__.currentPosition)());
  let end = (0,_knight__WEBPACK_IMPORTED_MODULE_2__.currentTarget)();
  let path = (0,_knightpath__WEBPACK_IMPORTED_MODULE_4__.knightPath)(start, end);
  (0,_displayoutput__WEBPACK_IMPORTED_MODULE_5__.displayPath)(path)
}

})();

/******/ })()
;
//# sourceMappingURL=bundle27f004cd06a57dba1bf2.js.map