/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/background.jpeg */ "./assets/background.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.header {\r\n    height: 60px;\r\n    width: 100vw;\r\n    display: flex;\r\n    background-color: yellow;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 15px;\r\n}\r\n\r\n.header>button {\r\n    height: 50px;\r\n    width: 100px;\r\n}\r\n\r\n.home {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 70vw;\r\n    background-color: rgb(11, 11, 11, 0.7);\r\n    height: fit-content;\r\n    margin-top: 20px;\r\n    gap: 15px;\r\n    color: rgb(8, 7, 7);\r\n    gap: 30px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.home > img{\r\n    width: 350px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.about {\r\n    display: flex;\r\n    border: 4px solid green;\r\n    border-radius: 5px;\r\n    width: 35%;\r\n    height: 150px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    background-color: gold;\r\n}\r\n\r\n.about>div {\r\n    width: 90%;\r\n    margin: auto;\r\n    font-size: 20px;\r\n}\r\n\r\n.about>div:nth-child(2) {\r\n    margin-left: 40px;\r\n    font-weight: 800;\r\n    font-size: 25px;\r\n}\r\n\r\n.openingHoursContainer {\r\n    width: 35%;\r\n    height: 250px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    border: 4px solid green;\r\n    background-color: gold;\r\n}\r\n\r\n.openingHours {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.openingHoursContainer>div:first-child {\r\n    margin-left: 10px;\r\n    font-weight: 800;\r\n    font-size: 25px;\r\n}\r\n\r\n.location {\r\n    width: 35%;\r\n    height: 130px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    border: 4px solid green;\r\n    background-color: gold;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.location>div:nth-child(1) {\r\n    margin-left: 10px;\r\n    width: 90%;\r\n    font-weight: 800;\r\n    font-size: 25px;\r\n}\r\n\r\n.location>div:nth-child(2) {\r\n    margin-left: 20px;\r\n    font-size: 20px;\r\n    width: 95%;\r\n}\r\n\r\n.footer {\r\n    height: 60px;\r\n    width: 100vw;\r\n    display: flex;\r\n    background-color: yellow;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    gap: 15px;\r\n}\r\n\r\n.menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 70vw;\r\n    background-color: rgb(11, 11, 11, 0.7);\r\n    height: fit-content;\r\n    margin-top: 20px;\r\n    color: rgb(8, 7, 7);\r\n    gap: 30px;\r\n}\r\n\r\n.menu>div:first-child {\r\n    width: 80%;\r\n    height: 50px;\r\n    background-color: yellow;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 45px;\r\n    margin-top: 10px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.menuSection {\r\n    width: 100%;\r\n    height: 50px;\r\n    background-color: yellow;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n}\r\n\r\n.menuList {\r\n    display: flex;\r\n    border: 15px solid green;\r\n    border-radius: 25px;\r\n    width: 80%;\r\n    height: 500px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    background-color: gold;\r\n    margin-bottom: 10px;\r\n    margin-top: 45px;\r\n}\r\n\r\n.menuList>div {\r\n    width: 90%;\r\n    margin-left: 10px;\r\n}\r\n\r\n.menuList>div:first-child {\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n}\r\n\r\n.menuList>div:nth-child(2) {\r\n    width: 90%;\r\n    align-self: center;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n}\r\n\r\n.menuList>div:nth-child(3) {\r\n    width: 90%;\r\n    align-self: center;\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n}\r\n\r\n.menuList>img:nth-child(4) {\r\n    align-self: flex-end;\r\n    width: 200px;\r\n    border: 1px solid orange;\r\n    margin-right: 10px;\r\n}\r\n\r\n.contactUs {\r\n    width: 70%;\r\n    height: fit-content;\r\n    background-color: rgb(0, 0, 0, 0.7);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 15px;\r\n}\r\n\r\n.contacts {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 15px;\r\n    width: 100%;\r\n}\r\n\r\n.contacts>div>div {\r\n    margin-left: 15px;\r\n}\r\n\r\n.contactUs>div:first-child {\r\n    width: 65%;\r\n    height: 50px;\r\n    background-color: yellow;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n    margin-top: 15px;\r\n    border-radius: 12px;\r\n}\r\n\r\n.contacts>div>div:first-child {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 90%;\r\n    margin-top: 10px;\r\n    position: relative;\r\n    top: 15px;\r\n}\r\n\r\n.contacts>div>div>img {\r\n    width: 120px;\r\n}\r\n\r\n.contacts>div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    height: fit-content;\r\n    background-color: gold;\r\n    height: 180px;\r\n    justify-content: space-around;\r\n    border: 10px solid green;\r\n    border-radius: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.contacts>div>div:first-child>div:first-child {\r\n    font-size: 26px;\r\n    font-weight: 800;\r\n}\r\n\r\n.contacts>div>div:nth-child(2) {\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    position: relative;\r\n    bottom: 20px;\r\n    left: 35px;\r\n}\r\n\r\n@media(min-width: 800px) and (max-width:1200px) {\r\n    .about {\r\n        width: 55%;\r\n    }\r\n\r\n    .openingHoursContainer {\r\n        width: 55%;\r\n    }\r\n\r\n    .location {\r\n        width: 55%;\r\n    }\r\n\r\n    .contacts>div {\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n@media(min-width: 500px) and (max-width:800px) {\r\n    .about {\r\n        width: 80%;\r\n    }\r\n\r\n    .openingHoursContainer {\r\n        width: 80%;\r\n    }\r\n\r\n    .location {\r\n        width: 80%;\r\n    }\r\n\r\n    .contacts>div {\r\n        width: 75%;\r\n    }\r\n}\r\n\r\n@media(max-width:500px) {\r\n    .about {\r\n        width: 100%;\r\n        height: 180px;\r\n    }\r\n\r\n    .openingHoursContainer {\r\n        width: 100%;\r\n        height: 300px;\r\n    }\r\n\r\n    .location {\r\n        width: 100%;\r\n        height: 160px;\r\n    }\r\n\r\n    .home {\r\n        width: 90vw;\r\n    }\r\n\r\n    .pic {\r\n        width: 250px;\r\n    }\r\n\r\n    .contacts>div {\r\n        width: 90%;\r\n    }\r\n\r\n    .contacts>div>div:first-child {\r\n        width: 100%;\r\n        position: relative;\r\n        top: 5px;\r\n    }\r\n\r\n    .contacts>div>div:nth-child(2) {\r\n        bottom: 2px;\r\n        left: 5px;\r\n    }\r\n\r\n    .contacts>div>div>img {\r\n        width: 100px;\r\n        position: relative;\r\n        right: 20px;\r\n    }\r\n\r\n    .contacts>div>div:first-child>div:first-child {\r\n        font-size: 20px;\r\n        font-weight: 800;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    background: url(\"/assets/background.jpeg\");\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.header {\r\n    height: 60px;\r\n    width: 100vw;\r\n    display: flex;\r\n    background-color: yellow;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 15px;\r\n}\r\n\r\n.header>button {\r\n    height: 50px;\r\n    width: 100px;\r\n}\r\n\r\n.home {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 70vw;\r\n    background-color: rgb(11, 11, 11, 0.7);\r\n    height: fit-content;\r\n    margin-top: 20px;\r\n    gap: 15px;\r\n    color: rgb(8, 7, 7);\r\n    gap: 30px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.home > img{\r\n    width: 350px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.about {\r\n    display: flex;\r\n    border: 4px solid green;\r\n    border-radius: 5px;\r\n    width: 35%;\r\n    height: 150px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    background-color: gold;\r\n}\r\n\r\n.about>div {\r\n    width: 90%;\r\n    margin: auto;\r\n    font-size: 20px;\r\n}\r\n\r\n.about>div:nth-child(2) {\r\n    margin-left: 40px;\r\n    font-weight: 800;\r\n    font-size: 25px;\r\n}\r\n\r\n.openingHoursContainer {\r\n    width: 35%;\r\n    height: 250px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    border: 4px solid green;\r\n    background-color: gold;\r\n}\r\n\r\n.openingHours {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.openingHoursContainer>div:first-child {\r\n    margin-left: 10px;\r\n    font-weight: 800;\r\n    font-size: 25px;\r\n}\r\n\r\n.location {\r\n    width: 35%;\r\n    height: 130px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    border: 4px solid green;\r\n    background-color: gold;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.location>div:nth-child(1) {\r\n    margin-left: 10px;\r\n    width: 90%;\r\n    font-weight: 800;\r\n    font-size: 25px;\r\n}\r\n\r\n.location>div:nth-child(2) {\r\n    margin-left: 20px;\r\n    font-size: 20px;\r\n    width: 95%;\r\n}\r\n\r\n.footer {\r\n    height: 60px;\r\n    width: 100vw;\r\n    display: flex;\r\n    background-color: yellow;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    gap: 15px;\r\n}\r\n\r\n.menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 70vw;\r\n    background-color: rgb(11, 11, 11, 0.7);\r\n    height: fit-content;\r\n    margin-top: 20px;\r\n    color: rgb(8, 7, 7);\r\n    gap: 30px;\r\n}\r\n\r\n.menu>div:first-child {\r\n    width: 80%;\r\n    height: 50px;\r\n    background-color: yellow;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 45px;\r\n    margin-top: 10px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.menuSection {\r\n    width: 100%;\r\n    height: 50px;\r\n    background-color: yellow;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n}\r\n\r\n.menuList {\r\n    display: flex;\r\n    border: 15px solid green;\r\n    border-radius: 25px;\r\n    width: 80%;\r\n    height: 500px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    background-color: gold;\r\n    margin-bottom: 10px;\r\n    margin-top: 45px;\r\n}\r\n\r\n.menuList>div {\r\n    width: 90%;\r\n    margin-left: 10px;\r\n}\r\n\r\n.menuList>div:first-child {\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n}\r\n\r\n.menuList>div:nth-child(2) {\r\n    width: 90%;\r\n    align-self: center;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n}\r\n\r\n.menuList>div:nth-child(3) {\r\n    width: 90%;\r\n    align-self: center;\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n}\r\n\r\n.menuList>img:nth-child(4) {\r\n    align-self: flex-end;\r\n    width: 200px;\r\n    border: 1px solid orange;\r\n    margin-right: 10px;\r\n}\r\n\r\n.contactUs {\r\n    width: 70%;\r\n    height: fit-content;\r\n    background-color: rgb(0, 0, 0, 0.7);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 15px;\r\n}\r\n\r\n.contacts {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 15px;\r\n    width: 100%;\r\n}\r\n\r\n.contacts>div>div {\r\n    margin-left: 15px;\r\n}\r\n\r\n.contactUs>div:first-child {\r\n    width: 65%;\r\n    height: 50px;\r\n    background-color: yellow;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n    margin-top: 15px;\r\n    border-radius: 12px;\r\n}\r\n\r\n.contacts>div>div:first-child {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 90%;\r\n    margin-top: 10px;\r\n    position: relative;\r\n    top: 15px;\r\n}\r\n\r\n.contacts>div>div>img {\r\n    width: 120px;\r\n}\r\n\r\n.contacts>div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    height: fit-content;\r\n    background-color: gold;\r\n    height: 180px;\r\n    justify-content: space-around;\r\n    border: 10px solid green;\r\n    border-radius: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.contacts>div>div:first-child>div:first-child {\r\n    font-size: 26px;\r\n    font-weight: 800;\r\n}\r\n\r\n.contacts>div>div:nth-child(2) {\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    position: relative;\r\n    bottom: 20px;\r\n    left: 35px;\r\n}\r\n\r\n@media(min-width: 800px) and (max-width:1200px) {\r\n    .about {\r\n        width: 55%;\r\n    }\r\n\r\n    .openingHoursContainer {\r\n        width: 55%;\r\n    }\r\n\r\n    .location {\r\n        width: 55%;\r\n    }\r\n\r\n    .contacts>div {\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n@media(min-width: 500px) and (max-width:800px) {\r\n    .about {\r\n        width: 80%;\r\n    }\r\n\r\n    .openingHoursContainer {\r\n        width: 80%;\r\n    }\r\n\r\n    .location {\r\n        width: 80%;\r\n    }\r\n\r\n    .contacts>div {\r\n        width: 75%;\r\n    }\r\n}\r\n\r\n@media(max-width:500px) {\r\n    .about {\r\n        width: 100%;\r\n        height: 180px;\r\n    }\r\n\r\n    .openingHoursContainer {\r\n        width: 100%;\r\n        height: 300px;\r\n    }\r\n\r\n    .location {\r\n        width: 100%;\r\n        height: 160px;\r\n    }\r\n\r\n    .home {\r\n        width: 90vw;\r\n    }\r\n\r\n    .pic {\r\n        width: 250px;\r\n    }\r\n\r\n    .contacts>div {\r\n        width: 90%;\r\n    }\r\n\r\n    .contacts>div>div:first-child {\r\n        width: 100%;\r\n        position: relative;\r\n        top: 5px;\r\n    }\r\n\r\n    .contacts>div>div:nth-child(2) {\r\n        bottom: 2px;\r\n        left: 5px;\r\n    }\r\n\r\n    .contacts>div>div>img {\r\n        width: 100px;\r\n        position: relative;\r\n        right: 20px;\r\n    }\r\n\r\n    .contacts>div>div:first-child>div:first-child {\r\n        font-size: 20px;\r\n        font-weight: 800;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");



const SpongeBob = (function (contactCardContainer, contactCard, ContactName,contactImage ,contactInfo, contactProfession, contactPhoneNumber, contactEmail) {
    contactCardContainer = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    contactCard = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    ContactName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'SpongeBob');
    contactImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)('/assets/spongeBob.jpeg', 'a pic of spongeBob');
    contactInfo = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    contactProfession = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Chef');
    contactPhoneNumber = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '+73-456-01');
    contactEmail = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'SpongeBob@milky.io');
    appendChildren(contactCardContainer, contactCard, ContactName,contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail);
    return contactCardContainer
})()

const plankTon = (function (contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail){
    contactCardContainer = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    contactCard = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    ContactName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Plankton');
    contactImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)('/assets/spongeBob.jpeg', 'a pic of plankton');
    contactInfo = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    contactProfession = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Villian');
    contactPhoneNumber = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '+73-472-22');
    contactEmail = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'plankton07@milky.io');
    appendChildren(contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail);
    return contactCardContainer
})()

const mrKrabs = (function (contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail) {
    contactCardContainer = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    contactCard = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    ContactName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Mr Krabs');
    contactImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)('/assets/mrKrabs.png', 'a pic of mr Krabs');
    contactInfo = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    contactProfession = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'CEO');
    contactPhoneNumber = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '+73-271-83');
    contactEmail = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'krabbyMula@milky.io');
    appendChildren(contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail);
    return contactCardContainer
})()

const contact = (function(){
    let contactUs = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('contactUs');
    let ContactUsText = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','Contact Us');
    let contactsContainer = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('contacts');
    contactUs.appendChild(ContactUsText);
    contactUs.appendChild(contactsContainer);
    contactsContainer.appendChild(SpongeBob);
    contactsContainer.appendChild(plankTon)
    contactsContainer.appendChild(mrKrabs)
    return contactUs
})()

function appendChildren(contactCardContainer,contactCard,ContactName,contactImage,contactInfo,contactProfession,contactPhoneNumber,contactEmail){
    contactCardContainer.appendChild(contactCard);
    contactCardContainer.appendChild(contactInfo);
    contactCard.appendChild(ContactName);
    contactCard.appendChild(contactImage);
    contactInfo.appendChild(contactProfession);
    contactInfo.appendChild(contactPhoneNumber);
    contactInfo.appendChild(contactEmail);
}

/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "factoryBtn": () => (/* binding */ factoryBtn),
/* harmony export */   "factoryDiv": () => (/* binding */ factoryDiv),
/* harmony export */   "factoryImage": () => (/* binding */ factoryImage)
/* harmony export */ });
// general factory function created here
function factoryDiv(className, text) {
    const createtag = document.createElement('div');
    createtag.setAttribute('class', className);
    createtag.textContent = text
    return createtag
}

function factoryImage(src, alt) {
    const createtag = document.createElement('img');
    createtag.setAttribute('src', src)
    createtag.setAttribute('alt', alt)
    return createtag
}

function factoryBtn(className,text){
    const createtag = document.createElement('button');
    createtag.setAttribute('class', className);
    createtag.textContent = text
    return createtag
}



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");


const footer = (function(){
  const footerContainer = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('footer');
  const footer1 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','Hive mind');
  const footer2 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'The odin project');
  const footer3 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Hive Restaurant');
  footerContainer.appendChild(footer1);
  footerContainer.appendChild(footer2);
  footerContainer.appendChild(footer3);
  return footerContainer
})()

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");



let header = (function header() {
    const headerDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('header','');
    const button1 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryBtn)('homeBtn', 'Home');
    const button2 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryBtn)('menuBtn', 'Menu');
    const button3 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryBtn)('contactBtn', 'Contact');
    headerDiv.appendChild(button1);
    headerDiv.appendChild(button2);
    headerDiv.appendChild(button3);
    return headerDiv
})()



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _assets_Therestaurant_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/Therestaurant.jpeg */ "./assets/Therestaurant.jpeg");



const homePage = (function(){
    const home = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('home');
    const restaurantImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_Therestaurant_jpeg__WEBPACK_IMPORTED_MODULE_1__,'image of a restaurant');
    const aboutDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('about');
    const remarks = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)("", "Hive's Restaurant is the best in the whole milky way,whenever you come visiting and you need a place to taste the best food, you know where to come!");
    const remarksAuthor = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','Patrick Star');
    const openingHoursContainer = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)("openingHoursContainer");
    const hoursText = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','Hours');
    const openingHours = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('openingHours');
    const openingHoursDiv1 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','Sunday: 8am - 8pm');
    const openingHoursDiv2 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Monday: 6am - 6pm');
    const openingHoursDiv3 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Tuesday: 6am - 6pm');
    const openingHoursDiv4 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Wednesday:6am - 6pm');
    const openingHoursDiv5 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Thursday:6am - 10pm');
    const openingHoursDiv6 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Friday: 6am - 10pm');
    const openingHoursDiv7 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Saturday: 8am - 10pm');
    const location = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('location');
    const locationDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','Location');
    const address = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','edinburg,planet v13k,northern hemisphere,milky way.');
    // append the created elements to the parent element
    home.appendChild(restaurantImage);
    home.appendChild(aboutDiv);
    home.appendChild(openingHoursContainer);
    home.appendChild(location);
    aboutDiv.appendChild(remarks);
    aboutDiv.appendChild(remarksAuthor);
    openingHoursContainer.appendChild(hoursText);
    openingHoursContainer.appendChild(openingHours);
    openingHours.appendChild(openingHoursDiv1);
    openingHours.appendChild(openingHoursDiv2);
    openingHours.appendChild(openingHoursDiv3);
    openingHours.appendChild(openingHoursDiv4);
    openingHours.appendChild(openingHoursDiv5);
    openingHours.appendChild(openingHoursDiv6);
    openingHours.appendChild(openingHoursDiv7);
    location.appendChild(locationDiv);
    location.appendChild(address);
    return home;
})()




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuSection": () => (/* binding */ menuSection)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");



const superCoke = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Super coke');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'A galactic drink with insane sugar rush!,A gulp is usually enough');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$1.99');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)('/assets/cocacola.jpeg', 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage);
    return menuList
})()

const coffee = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Coffee');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Programmers favourites!, best taken early in the morning.');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$2.50');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)('/assets/coffee.jpeg', 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()

const energyDrink = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Energy Drink');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Are you feeling tired lately?,a medium sized cup increases your energy by 240%!');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$3.50');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)('/assets/energyDrink.jpeg', 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const orangeDrink = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'orange Drink');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Designed to quench your thirst,100% natural also! ');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$3.00');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)('/assets/orangeDrink.jpeg', 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const iceCream = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Ice cream');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Need to run an errand and distract your kids?Buy them Hives ice cream!');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$0.99');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)('/assets/iceCream.jpeg', 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const angryBurger = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Angry Burger');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Super mean burger,every bite changes your mood');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$7.99');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)('/assets/angryBurger.jpeg', 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const happyBurger = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Happy Burger');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Having a bad day?,This would make you happier just a little bit');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$7.99');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)('/assets/happyBurger.jpeg', 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const fries = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Fries');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Craving for a crunchy meal,This is the perfect deal.');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$10.00');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)('/assets/fries.jpeg', 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const fruitSalad = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Friut Salad');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'All natural,packed with enormous amount of vitamins.');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$9.99');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)('/assets/fruit salad.jpeg', 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const rice = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Rice');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Our most ordered food.Its no secret this would fill your tummy!');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$6.99');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)('/assets/rice.jpeg', 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const spaghetti = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Spaghetti');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'A spicy meal,very yummy,very tasty.');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$8.00');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)('/assets/spaghetti.jpeg', 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const bread = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Bread');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'A loaf of bread,soft and tender,best taken with your favourite spread');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$4.00');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)('/assets/bread.jpeg', 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()

const menuSection = (function(){
    const menu = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menu');
    const menuDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','Menu');
    const food = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('beverages');
    const menuSection1 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuSection','Beverages');
    menu.appendChild(menuDiv);
    menu.appendChild(food);
    food.appendChild(menuSection1);
    //append individual food section
    food.appendChild(superCoke);
    food.appendChild(coffee)
    food.appendChild(energyDrink)
    food.appendChild(orangeDrink)
    const menuSection2 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuSection', 'Sides');
    food.appendChild(menuSection2)
    food.appendChild(iceCream)
    food.appendChild(angryBurger)
    food.appendChild(happyBurger)
    food.appendChild(fruitSalad)
    const menuSection3 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuSection', 'Main');
    food.appendChild(menuSection3)
    food.appendChild(fries)
    food.appendChild(rice)
    food.appendChild(spaghetti)
    food.appendChild(bread)

    return menu
})()
function appendChildren(menuList,menuName,menuDescription,menuPrice,menuImage){
    menuList.appendChild(menuName);
    menuList.appendChild(menuDescription);
    menuList.appendChild(menuPrice);
    menuList.appendChild(menuImage);
}


/***/ }),

/***/ "./assets/Therestaurant.jpeg":
/*!***********************************!*\
  !*** ./assets/Therestaurant.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc40294d1de81886912d.jpeg";

/***/ }),

/***/ "./assets/background.jpeg":
/*!********************************!*\
  !*** ./assets/background.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84ef8761e16be53321ed.jpeg";

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
/******/ 			"index": 0
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/footer.js");







let renderPage = (function(){
  let content = document.createElement('div');
  content.setAttribute('id', 'content');
  document.body.appendChild(content);
  content.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.header);
  content.appendChild(_home__WEBPACK_IMPORTED_MODULE_2__.homePage);
  // homePage.remove();
  // content.appendChild(menuSection);
  // menuSection.remove();
  // content.appendChild(contact);
  content.appendChild(_footer__WEBPACK_IMPORTED_MODULE_5__.footer);
})()

const homeBtn = document.querySelector('.homeBtn');
const menuBtn = document.querySelector('.menuBtn');
const contactBtn = document.querySelector('.contactBtn');
const content = document.querySelector('#content')
homeBtn.addEventListener("click",()=>{
  resetDom()
  content.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.header)
  content.appendChild(_home__WEBPACK_IMPORTED_MODULE_2__.homePage);
  content.appendChild(_footer__WEBPACK_IMPORTED_MODULE_5__.footer);
})
menuBtn.addEventListener("click",()=>{
  resetDom()
  content.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.header)
  content.appendChild(_menu__WEBPACK_IMPORTED_MODULE_3__.menuSection);
  content.appendChild(_footer__WEBPACK_IMPORTED_MODULE_5__.footer);
})
contactBtn.addEventListener("click",()=>{
  resetDom()
  content.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.header)
  content.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_4__.contact);
  content.appendChild(_footer__WEBPACK_IMPORTED_MODULE_5__.footer);
})

function resetDom(){
  _header__WEBPACK_IMPORTED_MODULE_1__.header.remove();
  _home__WEBPACK_IMPORTED_MODULE_2__.homePage.remove();
  _menu__WEBPACK_IMPORTED_MODULE_3__.menuSection.remove();
  _contact_js__WEBPACK_IMPORTED_MODULE_4__.contact.remove()
  _footer__WEBPACK_IMPORTED_MODULE_5__.footer.remove()
}




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUss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O0FBQ0Esc0JBQXNCLDJDQUFNO0FBQzVCLHNCQUFzQiwyQ0FBUTtBQUM5QixzQkFBc0IsMkNBQU07QUFDNUIsQ0FBQztBQUNEO0FBQ0E7QUFDQSxzQkFBc0IsMkNBQU07QUFDNUIsc0JBQXNCLDhDQUFXO0FBQ2pDLHNCQUFzQiwyQ0FBTTtBQUM1QixDQUFDO0FBQ0Q7QUFDQTtBQUNBLHNCQUFzQiwyQ0FBTTtBQUM1QixzQkFBc0IsZ0RBQU87QUFDN0Isc0JBQXNCLDJDQUFNO0FBQzVCLENBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBRSxrREFBYTtBQUNmLEVBQUUsa0RBQWU7QUFDakIsRUFBRSxxREFBa0I7QUFDcEIsRUFBRSx1REFBYztBQUNoQixFQUFFLGtEQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9hc3NldHMvYmFja2dyb3VuZC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXI+YnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ob21lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA3MHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDExLCAxMSwgMC43KTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBjb2xvcjogcmdiKDgsIDcsIDcpO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob21lID4gaW1ne1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGdyZWVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQ+ZGl2IHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dD5kaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW5pbmdIb3Vyc0NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW5pbmdIb3VycyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW5pbmdIb3Vyc0NvbnRhaW5lcj5kaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb24ge1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBoZWlnaHQ6IDEzMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uPmRpdjpudGgtY2hpbGQoMSkge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb24+ZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNzB2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAxMSwgMTEsIDAuNyk7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoOCwgNywgNyk7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnU+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDQ1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51U2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVMaXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVMaXN0PmRpdiB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUxpc3Q+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUxpc3Q+ZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUxpc3Q+ZGl2Om50aC1jaGlsZCgzKSB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUxpc3Q+aW1nOm50aC1jaGlsZCg0KSB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdFVzIHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cz5kaXY+ZGl2IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0VXM+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgd2lkdGg6IDY1JTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cz5kaXY+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzPmRpdj5kaXY+aW1nIHtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHM+ZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXHJcXG4gICAgaGVpZ2h0OiAxODBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCBncmVlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzPmRpdj5kaXY6Zmlyc3QtY2hpbGQ+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHM+ZGl2PmRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm90dG9tOiAyMHB4O1xcclxcbiAgICBsZWZ0OiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWluLXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6MTIwMHB4KSB7XFxyXFxuICAgIC5hYm91dCB7XFxyXFxuICAgICAgICB3aWR0aDogNTUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5vcGVuaW5nSG91cnNDb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDU1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubG9jYXRpb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDU1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdHM+ZGl2IHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOjgwMHB4KSB7XFxyXFxuICAgIC5hYm91dCB7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5vcGVuaW5nSG91cnNDb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubG9jYXRpb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdHM+ZGl2IHtcXHJcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDo1MDBweCkge1xcclxcbiAgICAuYWJvdXQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5vcGVuaW5nSG91cnNDb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sb2NhdGlvbiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhvbWUge1xcclxcbiAgICAgICAgd2lkdGg6IDkwdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBpYyB7XFxyXFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RzPmRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0cz5kaXY+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgdG9wOiA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RzPmRpdj5kaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgIGJvdHRvbTogMnB4O1xcclxcbiAgICAgICAgbGVmdDogNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0cz5kaXY+ZGl2PmltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICByaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdHM+ZGl2PmRpdjpmaXJzdC1jaGlsZD5kaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbURBQTBDO0lBQzFDLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFFBQVE7SUFDWjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIvYXNzZXRzL2JhY2tncm91bmQuanBlZ1xcXCIpO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyPmJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNzB2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAxMSwgMTEsIDAuNyk7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgY29sb3I6IHJnYig4LCA3LCA3KTtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSA+IGltZ3tcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0PmRpdiB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQ+ZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5vcGVuaW5nSG91cnNDb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxufVxcclxcblxcclxcbi5vcGVuaW5nSG91cnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5vcGVuaW5nSG91cnNDb250YWluZXI+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDM1JTtcXHJcXG4gICAgaGVpZ2h0OiAxMzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbj5kaXY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uPmRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB3aWR0aDogOTUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDcwdnc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgMTEsIDExLCAwLjcpO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBjb2xvcjogcmdiKDgsIDcsIDcpO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51PmRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVNlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51TGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJvcmRlcjogMTVweCBzb2xpZCBncmVlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51TGlzdD5kaXYge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVMaXN0PmRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVMaXN0PmRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVMaXN0PmRpdjpudGgtY2hpbGQoMykge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVMaXN0PmltZzpudGgtY2hpbGQoNCkge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RVcyB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHM+ZGl2PmRpdiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdFVzPmRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIHdpZHRoOiA2NSU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHM+ZGl2PmRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cz5kaXY+ZGl2PmltZyB7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzPmRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxuICAgIGhlaWdodDogMTgwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBib3JkZXI6IDEwcHggc29saWQgZ3JlZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cz5kaXY+ZGl2OmZpcnN0LWNoaWxkPmRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzPmRpdj5kaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvdHRvbTogMjBweDtcXHJcXG4gICAgbGVmdDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1pbi13aWR0aDogODAwcHgpIGFuZCAobWF4LXdpZHRoOjEyMDBweCkge1xcclxcbiAgICAuYWJvdXQge1xcclxcbiAgICAgICAgd2lkdGg6IDU1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAub3BlbmluZ0hvdXJzQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1NSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxvY2F0aW9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1NSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RzPmRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogNjAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDo4MDBweCkge1xcclxcbiAgICAuYWJvdXQge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAub3BlbmluZ0hvdXJzQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxvY2F0aW9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RzPmRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogNzUlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6NTAwcHgpIHtcXHJcXG4gICAgLmFib3V0IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAub3BlbmluZ0hvdXJzQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubG9jYXRpb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5ob21lIHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5waWMge1xcclxcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0cz5kaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdHM+ZGl2PmRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHRvcDogNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0cz5kaXY+ZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICBib3R0b206IDJweDtcXHJcXG4gICAgICAgIGxlZnQ6IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdHM+ZGl2PmRpdj5pbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgcmlnaHQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RzPmRpdj5kaXY6Zmlyc3QtY2hpbGQ+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGZhY3RvcnlEaXYgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XHJcbmltcG9ydCB7IGZhY3RvcnlJbWFnZSB9IGZyb20gXCIuL2ZhY3RvcnlcIjtcclxuXHJcbmNvbnN0IFNwb25nZUJvYiA9IChmdW5jdGlvbiAoY29udGFjdENhcmRDb250YWluZXIsIGNvbnRhY3RDYXJkLCBDb250YWN0TmFtZSxjb250YWN0SW1hZ2UgLGNvbnRhY3RJbmZvLCBjb250YWN0UHJvZmVzc2lvbiwgY29udGFjdFBob25lTnVtYmVyLCBjb250YWN0RW1haWwpIHtcclxuICAgIGNvbnRhY3RDYXJkQ29udGFpbmVyID0gZmFjdG9yeURpdignJyk7XHJcbiAgICBjb250YWN0Q2FyZCA9IGZhY3RvcnlEaXYoJycpO1xyXG4gICAgQ29udGFjdE5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnU3BvbmdlQm9iJyk7XHJcbiAgICBjb250YWN0SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoJy9hc3NldHMvc3BvbmdlQm9iLmpwZWcnLCAnYSBwaWMgb2Ygc3BvbmdlQm9iJyk7XHJcbiAgICBjb250YWN0SW5mbyA9IGZhY3RvcnlEaXYoJycpO1xyXG4gICAgY29udGFjdFByb2Zlc3Npb24gPSBmYWN0b3J5RGl2KCcnLCAnQ2hlZicpO1xyXG4gICAgY29udGFjdFBob25lTnVtYmVyID0gZmFjdG9yeURpdignJywgJys3My00NTYtMDEnKTtcclxuICAgIGNvbnRhY3RFbWFpbCA9IGZhY3RvcnlEaXYoJycsICdTcG9uZ2VCb2JAbWlsa3kuaW8nKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKGNvbnRhY3RDYXJkQ29udGFpbmVyLCBjb250YWN0Q2FyZCwgQ29udGFjdE5hbWUsY29udGFjdEltYWdlLCBjb250YWN0SW5mbywgY29udGFjdFByb2Zlc3Npb24sIGNvbnRhY3RQaG9uZU51bWJlciwgY29udGFjdEVtYWlsKTtcclxuICAgIHJldHVybiBjb250YWN0Q2FyZENvbnRhaW5lclxyXG59KSgpXHJcblxyXG5jb25zdCBwbGFua1RvbiA9IChmdW5jdGlvbiAoY29udGFjdENhcmRDb250YWluZXIsIGNvbnRhY3RDYXJkLCBDb250YWN0TmFtZSwgY29udGFjdEltYWdlLCBjb250YWN0SW5mbywgY29udGFjdFByb2Zlc3Npb24sIGNvbnRhY3RQaG9uZU51bWJlciwgY29udGFjdEVtYWlsKXtcclxuICAgIGNvbnRhY3RDYXJkQ29udGFpbmVyID0gZmFjdG9yeURpdignJyk7XHJcbiAgICBjb250YWN0Q2FyZCA9IGZhY3RvcnlEaXYoJycpO1xyXG4gICAgQ29udGFjdE5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnUGxhbmt0b24nKTtcclxuICAgIGNvbnRhY3RJbWFnZSA9IGZhY3RvcnlJbWFnZSgnL2Fzc2V0cy9zcG9uZ2VCb2IuanBlZycsICdhIHBpYyBvZiBwbGFua3RvbicpO1xyXG4gICAgY29udGFjdEluZm8gPSBmYWN0b3J5RGl2KCcnKTtcclxuICAgIGNvbnRhY3RQcm9mZXNzaW9uID0gZmFjdG9yeURpdignJywgJ1ZpbGxpYW4nKTtcclxuICAgIGNvbnRhY3RQaG9uZU51bWJlciA9IGZhY3RvcnlEaXYoJycsICcrNzMtNDcyLTIyJyk7XHJcbiAgICBjb250YWN0RW1haWwgPSBmYWN0b3J5RGl2KCcnLCAncGxhbmt0b24wN0BtaWxreS5pbycpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4oY29udGFjdENhcmRDb250YWluZXIsIGNvbnRhY3RDYXJkLCBDb250YWN0TmFtZSwgY29udGFjdEltYWdlLCBjb250YWN0SW5mbywgY29udGFjdFByb2Zlc3Npb24sIGNvbnRhY3RQaG9uZU51bWJlciwgY29udGFjdEVtYWlsKTtcclxuICAgIHJldHVybiBjb250YWN0Q2FyZENvbnRhaW5lclxyXG59KSgpXHJcblxyXG5jb25zdCBtcktyYWJzID0gKGZ1bmN0aW9uIChjb250YWN0Q2FyZENvbnRhaW5lciwgY29udGFjdENhcmQsIENvbnRhY3ROYW1lLCBjb250YWN0SW1hZ2UsIGNvbnRhY3RJbmZvLCBjb250YWN0UHJvZmVzc2lvbiwgY29udGFjdFBob25lTnVtYmVyLCBjb250YWN0RW1haWwpIHtcclxuICAgIGNvbnRhY3RDYXJkQ29udGFpbmVyID0gZmFjdG9yeURpdignJyk7XHJcbiAgICBjb250YWN0Q2FyZCA9IGZhY3RvcnlEaXYoJycpO1xyXG4gICAgQ29udGFjdE5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnTXIgS3JhYnMnKTtcclxuICAgIGNvbnRhY3RJbWFnZSA9IGZhY3RvcnlJbWFnZSgnL2Fzc2V0cy9tcktyYWJzLnBuZycsICdhIHBpYyBvZiBtciBLcmFicycpO1xyXG4gICAgY29udGFjdEluZm8gPSBmYWN0b3J5RGl2KCcnKTtcclxuICAgIGNvbnRhY3RQcm9mZXNzaW9uID0gZmFjdG9yeURpdignJywgJ0NFTycpO1xyXG4gICAgY29udGFjdFBob25lTnVtYmVyID0gZmFjdG9yeURpdignJywgJys3My0yNzEtODMnKTtcclxuICAgIGNvbnRhY3RFbWFpbCA9IGZhY3RvcnlEaXYoJycsICdrcmFiYnlNdWxhQG1pbGt5LmlvJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihjb250YWN0Q2FyZENvbnRhaW5lciwgY29udGFjdENhcmQsIENvbnRhY3ROYW1lLCBjb250YWN0SW1hZ2UsIGNvbnRhY3RJbmZvLCBjb250YWN0UHJvZmVzc2lvbiwgY29udGFjdFBob25lTnVtYmVyLCBjb250YWN0RW1haWwpO1xyXG4gICAgcmV0dXJuIGNvbnRhY3RDYXJkQ29udGFpbmVyXHJcbn0pKClcclxuXHJcbmV4cG9ydCBjb25zdCBjb250YWN0ID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgY29udGFjdFVzID0gZmFjdG9yeURpdignY29udGFjdFVzJyk7XHJcbiAgICBsZXQgQ29udGFjdFVzVGV4dCA9IGZhY3RvcnlEaXYoJycsJ0NvbnRhY3QgVXMnKTtcclxuICAgIGxldCBjb250YWN0c0NvbnRhaW5lciA9IGZhY3RvcnlEaXYoJ2NvbnRhY3RzJyk7XHJcbiAgICBjb250YWN0VXMuYXBwZW5kQ2hpbGQoQ29udGFjdFVzVGV4dCk7XHJcbiAgICBjb250YWN0VXMuYXBwZW5kQ2hpbGQoY29udGFjdHNDb250YWluZXIpO1xyXG4gICAgY29udGFjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoU3BvbmdlQm9iKTtcclxuICAgIGNvbnRhY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYW5rVG9uKVxyXG4gICAgY29udGFjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobXJLcmFicylcclxuICAgIHJldHVybiBjb250YWN0VXNcclxufSkoKVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4oY29udGFjdENhcmRDb250YWluZXIsY29udGFjdENhcmQsQ29udGFjdE5hbWUsY29udGFjdEltYWdlLGNvbnRhY3RJbmZvLGNvbnRhY3RQcm9mZXNzaW9uLGNvbnRhY3RQaG9uZU51bWJlcixjb250YWN0RW1haWwpe1xyXG4gICAgY29udGFjdENhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdENhcmQpO1xyXG4gICAgY29udGFjdENhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xyXG4gICAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoQ29udGFjdE5hbWUpO1xyXG4gICAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY29udGFjdEltYWdlKTtcclxuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RQcm9mZXNzaW9uKTtcclxuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZU51bWJlcik7XHJcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0RW1haWwpO1xyXG59IiwiLy8gZ2VuZXJhbCBmYWN0b3J5IGZ1bmN0aW9uIGNyZWF0ZWQgaGVyZVxyXG5mdW5jdGlvbiBmYWN0b3J5RGl2KGNsYXNzTmFtZSwgdGV4dCkge1xyXG4gICAgY29uc3QgY3JlYXRldGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjcmVhdGV0YWcuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSk7XHJcbiAgICBjcmVhdGV0YWcudGV4dENvbnRlbnQgPSB0ZXh0XHJcbiAgICByZXR1cm4gY3JlYXRldGFnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZhY3RvcnlJbWFnZShzcmMsIGFsdCkge1xyXG4gICAgY29uc3QgY3JlYXRldGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjcmVhdGV0YWcuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpXHJcbiAgICBjcmVhdGV0YWcuc2V0QXR0cmlidXRlKCdhbHQnLCBhbHQpXHJcbiAgICByZXR1cm4gY3JlYXRldGFnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZhY3RvcnlCdG4oY2xhc3NOYW1lLHRleHQpe1xyXG4gICAgY29uc3QgY3JlYXRldGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjcmVhdGV0YWcuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSk7XHJcbiAgICBjcmVhdGV0YWcudGV4dENvbnRlbnQgPSB0ZXh0XHJcbiAgICByZXR1cm4gY3JlYXRldGFnXHJcbn1cclxuXHJcbmV4cG9ydHtmYWN0b3J5RGl2LGZhY3RvcnlJbWFnZSxmYWN0b3J5QnRufSIsImltcG9ydCB7IGZhY3RvcnlEaXYgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZm9vdGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZmFjdG9yeURpdignZm9vdGVyJyk7XHJcbiAgY29uc3QgZm9vdGVyMSA9IGZhY3RvcnlEaXYoJycsJ0hpdmUgbWluZCcpO1xyXG4gIGNvbnN0IGZvb3RlcjIgPSBmYWN0b3J5RGl2KCcnLCAnVGhlIG9kaW4gcHJvamVjdCcpO1xyXG4gIGNvbnN0IGZvb3RlcjMgPSBmYWN0b3J5RGl2KCcnLCAnSGl2ZSBSZXN0YXVyYW50Jyk7XHJcbiAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlcjEpO1xyXG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIyKTtcclxuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyMyk7XHJcbiAgcmV0dXJuIGZvb3RlckNvbnRhaW5lclxyXG59KSgpIiwiaW1wb3J0IHsgZmFjdG9yeURpdiB9IGZyb20gXCIuL2ZhY3RvcnlcIjtcclxuaW1wb3J0IHsgZmFjdG9yeUJ0biB9IGZyb20gXCIuL2ZhY3RvcnlcIjtcclxuXHJcbmV4cG9ydCBsZXQgaGVhZGVyID0gKGZ1bmN0aW9uIGhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlckRpdiA9IGZhY3RvcnlEaXYoJ2hlYWRlcicsJycpO1xyXG4gICAgY29uc3QgYnV0dG9uMSA9IGZhY3RvcnlCdG4oJ2hvbWVCdG4nLCAnSG9tZScpO1xyXG4gICAgY29uc3QgYnV0dG9uMiA9IGZhY3RvcnlCdG4oJ21lbnVCdG4nLCAnTWVudScpO1xyXG4gICAgY29uc3QgYnV0dG9uMyA9IGZhY3RvcnlCdG4oJ2NvbnRhY3RCdG4nLCAnQ29udGFjdCcpO1xyXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGJ1dHRvbjEpO1xyXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGJ1dHRvbjIpO1xyXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGJ1dHRvbjMpO1xyXG4gICAgcmV0dXJuIGhlYWRlckRpdlxyXG59KSgpXHJcblxyXG4iLCJpbXBvcnQgeyBmYWN0b3J5RGl2IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBmYWN0b3J5SW1hZ2UgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XHJcbmltcG9ydCB0aGVSZXN0YXVyYW50IGZyb20gXCIvYXNzZXRzL1RoZXJlc3RhdXJhbnQuanBlZ1wiXHJcbmV4cG9ydCBjb25zdCBob21lUGFnZSA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgaG9tZSA9IGZhY3RvcnlEaXYoJ2hvbWUnKTtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnRJbWFnZSA9IGZhY3RvcnlJbWFnZSh0aGVSZXN0YXVyYW50LCdpbWFnZSBvZiBhIHJlc3RhdXJhbnQnKTtcclxuICAgIGNvbnN0IGFib3V0RGl2ID0gZmFjdG9yeURpdignYWJvdXQnKTtcclxuICAgIGNvbnN0IHJlbWFya3MgPSBmYWN0b3J5RGl2KFwiXCIsIFwiSGl2ZSdzIFJlc3RhdXJhbnQgaXMgdGhlIGJlc3QgaW4gdGhlIHdob2xlIG1pbGt5IHdheSx3aGVuZXZlciB5b3UgY29tZSB2aXNpdGluZyBhbmQgeW91IG5lZWQgYSBwbGFjZSB0byB0YXN0ZSB0aGUgYmVzdCBmb29kLCB5b3Uga25vdyB3aGVyZSB0byBjb21lIVwiKTtcclxuICAgIGNvbnN0IHJlbWFya3NBdXRob3IgPSBmYWN0b3J5RGl2KCcnLCdQYXRyaWNrIFN0YXInKTtcclxuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc0NvbnRhaW5lciA9IGZhY3RvcnlEaXYoXCJvcGVuaW5nSG91cnNDb250YWluZXJcIik7XHJcbiAgICBjb25zdCBob3Vyc1RleHQgPSBmYWN0b3J5RGl2KCcnLCdIb3VycycpO1xyXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzID0gZmFjdG9yeURpdignb3BlbmluZ0hvdXJzJyk7XHJcbiAgICBjb25zdCBvcGVuaW5nSG91cnNEaXYxID0gZmFjdG9yeURpdignJywnU3VuZGF5OiA4YW0gLSA4cG0nKTtcclxuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc0RpdjIgPSBmYWN0b3J5RGl2KCcnLCAnTW9uZGF5OiA2YW0gLSA2cG0nKTtcclxuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc0RpdjMgPSBmYWN0b3J5RGl2KCcnLCAnVHVlc2RheTogNmFtIC0gNnBtJyk7XHJcbiAgICBjb25zdCBvcGVuaW5nSG91cnNEaXY0ID0gZmFjdG9yeURpdignJywgJ1dlZG5lc2RheTo2YW0gLSA2cG0nKTtcclxuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc0RpdjUgPSBmYWN0b3J5RGl2KCcnLCAnVGh1cnNkYXk6NmFtIC0gMTBwbScpO1xyXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzRGl2NiA9IGZhY3RvcnlEaXYoJycsICdGcmlkYXk6IDZhbSAtIDEwcG0nKTtcclxuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc0RpdjcgPSBmYWN0b3J5RGl2KCcnLCAnU2F0dXJkYXk6IDhhbSAtIDEwcG0nKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gZmFjdG9yeURpdignbG9jYXRpb24nKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uRGl2ID0gZmFjdG9yeURpdignJywnTG9jYXRpb24nKTtcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBmYWN0b3J5RGl2KCcnLCdlZGluYnVyZyxwbGFuZXQgdjEzayxub3J0aGVybiBoZW1pc3BoZXJlLG1pbGt5IHdheS4nKTtcclxuICAgIC8vIGFwcGVuZCB0aGUgY3JlYXRlZCBlbGVtZW50cyB0byB0aGUgcGFyZW50IGVsZW1lbnRcclxuICAgIGhvbWUuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltYWdlKTtcclxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoYWJvdXREaXYpO1xyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNDb250YWluZXIpO1xyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChsb2NhdGlvbik7XHJcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChyZW1hcmtzKTtcclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKHJlbWFya3NBdXRob3IpO1xyXG4gICAgb3BlbmluZ0hvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzVGV4dCk7XHJcbiAgICBvcGVuaW5nSG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQob3BlbmluZ0hvdXJzKTtcclxuICAgIG9wZW5pbmdIb3Vycy5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNEaXYxKTtcclxuICAgIG9wZW5pbmdIb3Vycy5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNEaXYyKTtcclxuICAgIG9wZW5pbmdIb3Vycy5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNEaXYzKTtcclxuICAgIG9wZW5pbmdIb3Vycy5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNEaXY0KTtcclxuICAgIG9wZW5pbmdIb3Vycy5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNEaXY1KTtcclxuICAgIG9wZW5pbmdIb3Vycy5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNEaXY2KTtcclxuICAgIG9wZW5pbmdIb3Vycy5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnNEaXY3KTtcclxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KTtcclxuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xyXG4gICAgcmV0dXJuIGhvbWU7XHJcbn0pKClcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBmYWN0b3J5RGl2IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBmYWN0b3J5SW1hZ2UgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XHJcblxyXG5jb25zdCBzdXBlckNva2UgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnU3VwZXIgY29rZScpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ0EgZ2FsYWN0aWMgZHJpbmsgd2l0aCBpbnNhbmUgc3VnYXIgcnVzaCEsQSBndWxwIGlzIHVzdWFsbHkgZW5vdWdoJyk7XHJcbiAgICBtZW51UHJpY2UgPSBmYWN0b3J5RGl2KCcnLCAnJDEuOTknKTtcclxuICAgIG1lbnVJbWFnZSA9IGZhY3RvcnlJbWFnZSgnL2Fzc2V0cy9jb2NhY29sYS5qcGVnJywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpO1xyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuXHJcbmNvbnN0IGNvZmZlZSA9IChmdW5jdGlvbiAobWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKSB7XHJcbiAgICBtZW51TGlzdCA9IGZhY3RvcnlEaXYoJ21lbnVMaXN0Jyk7XHJcbiAgICBtZW51TmFtZSA9IGZhY3RvcnlEaXYoJycsICdDb2ZmZWUnKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbiA9IGZhY3RvcnlEaXYoJycsICdQcm9ncmFtbWVycyBmYXZvdXJpdGVzISwgYmVzdCB0YWtlbiBlYXJseSBpbiB0aGUgbW9ybmluZy4nKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckMi41MCcpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKCcvYXNzZXRzL2NvZmZlZS5qcGVnJywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpXHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5cclxuY29uc3QgZW5lcmd5RHJpbmsgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnRW5lcmd5IERyaW5rJyk7XHJcbiAgICBtZW51RGVzY3JpcHRpb24gPSBmYWN0b3J5RGl2KCcnLCAnQXJlIHlvdSBmZWVsaW5nIHRpcmVkIGxhdGVseT8sYSBtZWRpdW0gc2l6ZWQgY3VwIGluY3JlYXNlcyB5b3VyIGVuZXJneSBieSAyNDAlIScpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQzLjUwJyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoJy9hc3NldHMvZW5lcmd5RHJpbmsuanBlZycsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKVxyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuY29uc3Qgb3JhbmdlRHJpbmsgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnb3JhbmdlIERyaW5rJyk7XHJcbiAgICBtZW51RGVzY3JpcHRpb24gPSBmYWN0b3J5RGl2KCcnLCAnRGVzaWduZWQgdG8gcXVlbmNoIHlvdXIgdGhpcnN0LDEwMCUgbmF0dXJhbCBhbHNvISAnKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckMy4wMCcpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKCcvYXNzZXRzL29yYW5nZURyaW5rLmpwZWcnLCAnaW1hZ2Ugb2YgY29jYWNvbGEnKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSlcclxuICAgIHJldHVybiBtZW51TGlzdFxyXG59KSgpXHJcbmNvbnN0IGljZUNyZWFtID0gKGZ1bmN0aW9uIChtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpIHtcclxuICAgIG1lbnVMaXN0ID0gZmFjdG9yeURpdignbWVudUxpc3QnKTtcclxuICAgIG1lbnVOYW1lID0gZmFjdG9yeURpdignJywgJ0ljZSBjcmVhbScpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ05lZWQgdG8gcnVuIGFuIGVycmFuZCBhbmQgZGlzdHJhY3QgeW91ciBraWRzP0J1eSB0aGVtIEhpdmVzIGljZSBjcmVhbSEnKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckMC45OScpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKCcvYXNzZXRzL2ljZUNyZWFtLmpwZWcnLCAnaW1hZ2Ugb2YgY29jYWNvbGEnKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSlcclxuICAgIHJldHVybiBtZW51TGlzdFxyXG59KSgpXHJcbmNvbnN0IGFuZ3J5QnVyZ2VyID0gKGZ1bmN0aW9uIChtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpIHtcclxuICAgIG1lbnVMaXN0ID0gZmFjdG9yeURpdignbWVudUxpc3QnKTtcclxuICAgIG1lbnVOYW1lID0gZmFjdG9yeURpdignJywgJ0FuZ3J5IEJ1cmdlcicpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ1N1cGVyIG1lYW4gYnVyZ2VyLGV2ZXJ5IGJpdGUgY2hhbmdlcyB5b3VyIG1vb2QnKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckNy45OScpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKCcvYXNzZXRzL2FuZ3J5QnVyZ2VyLmpwZWcnLCAnaW1hZ2Ugb2YgY29jYWNvbGEnKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSlcclxuICAgIHJldHVybiBtZW51TGlzdFxyXG59KSgpXHJcbmNvbnN0IGhhcHB5QnVyZ2VyID0gKGZ1bmN0aW9uIChtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpIHtcclxuICAgIG1lbnVMaXN0ID0gZmFjdG9yeURpdignbWVudUxpc3QnKTtcclxuICAgIG1lbnVOYW1lID0gZmFjdG9yeURpdignJywgJ0hhcHB5IEJ1cmdlcicpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ0hhdmluZyBhIGJhZCBkYXk/LFRoaXMgd291bGQgbWFrZSB5b3UgaGFwcGllciBqdXN0IGEgbGl0dGxlIGJpdCcpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQ3Ljk5Jyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoJy9hc3NldHMvaGFwcHlCdXJnZXIuanBlZycsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKVxyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuY29uc3QgZnJpZXMgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnRnJpZXMnKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbiA9IGZhY3RvcnlEaXYoJycsICdDcmF2aW5nIGZvciBhIGNydW5jaHkgbWVhbCxUaGlzIGlzIHRoZSBwZXJmZWN0IGRlYWwuJyk7XHJcbiAgICBtZW51UHJpY2UgPSBmYWN0b3J5RGl2KCcnLCAnJDEwLjAwJyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoJy9hc3NldHMvZnJpZXMuanBlZycsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKVxyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuY29uc3QgZnJ1aXRTYWxhZCA9IChmdW5jdGlvbiAobWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKSB7XHJcbiAgICBtZW51TGlzdCA9IGZhY3RvcnlEaXYoJ21lbnVMaXN0Jyk7XHJcbiAgICBtZW51TmFtZSA9IGZhY3RvcnlEaXYoJycsICdGcml1dCBTYWxhZCcpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ0FsbCBuYXR1cmFsLHBhY2tlZCB3aXRoIGVub3Jtb3VzIGFtb3VudCBvZiB2aXRhbWlucy4nKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckOS45OScpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKCcvYXNzZXRzL2ZydWl0IHNhbGFkLmpwZWcnLCAnaW1hZ2Ugb2YgY29jYWNvbGEnKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSlcclxuICAgIHJldHVybiBtZW51TGlzdFxyXG59KSgpXHJcbmNvbnN0IHJpY2UgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnUmljZScpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ091ciBtb3N0IG9yZGVyZWQgZm9vZC5JdHMgbm8gc2VjcmV0IHRoaXMgd291bGQgZmlsbCB5b3VyIHR1bW15IScpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQ2Ljk5Jyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoJy9hc3NldHMvcmljZS5qcGVnJywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpXHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5jb25zdCBzcGFnaGV0dGkgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnU3BhZ2hldHRpJyk7XHJcbiAgICBtZW51RGVzY3JpcHRpb24gPSBmYWN0b3J5RGl2KCcnLCAnQSBzcGljeSBtZWFsLHZlcnkgeXVtbXksdmVyeSB0YXN0eS4nKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckOC4wMCcpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKCcvYXNzZXRzL3NwYWdoZXR0aS5qcGVnJywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpXHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5jb25zdCBicmVhZCA9IChmdW5jdGlvbiAobWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKSB7XHJcbiAgICBtZW51TGlzdCA9IGZhY3RvcnlEaXYoJ21lbnVMaXN0Jyk7XHJcbiAgICBtZW51TmFtZSA9IGZhY3RvcnlEaXYoJycsICdCcmVhZCcpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ0EgbG9hZiBvZiBicmVhZCxzb2Z0IGFuZCB0ZW5kZXIsYmVzdCB0YWtlbiB3aXRoIHlvdXIgZmF2b3VyaXRlIHNwcmVhZCcpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQ0LjAwJyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoJy9hc3NldHMvYnJlYWQuanBlZycsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKVxyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuXHJcbmV4cG9ydCBjb25zdCBtZW51U2VjdGlvbiA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgbWVudSA9IGZhY3RvcnlEaXYoJ21lbnUnKTtcclxuICAgIGNvbnN0IG1lbnVEaXYgPSBmYWN0b3J5RGl2KCcnLCdNZW51Jyk7XHJcbiAgICBjb25zdCBmb29kID0gZmFjdG9yeURpdignYmV2ZXJhZ2VzJyk7XHJcbiAgICBjb25zdCBtZW51U2VjdGlvbjEgPSBmYWN0b3J5RGl2KCdtZW51U2VjdGlvbicsJ0JldmVyYWdlcycpO1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51RGl2KTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZm9vZCk7XHJcbiAgICBmb29kLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uMSk7XHJcbiAgICAvL2FwcGVuZCBpbmRpdmlkdWFsIGZvb2Qgc2VjdGlvblxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChzdXBlckNva2UpO1xyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChjb2ZmZWUpXHJcbiAgICBmb29kLmFwcGVuZENoaWxkKGVuZXJneURyaW5rKVxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChvcmFuZ2VEcmluaylcclxuICAgIGNvbnN0IG1lbnVTZWN0aW9uMiA9IGZhY3RvcnlEaXYoJ21lbnVTZWN0aW9uJywgJ1NpZGVzJyk7XHJcbiAgICBmb29kLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uMilcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoaWNlQ3JlYW0pXHJcbiAgICBmb29kLmFwcGVuZENoaWxkKGFuZ3J5QnVyZ2VyKVxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChoYXBweUJ1cmdlcilcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoZnJ1aXRTYWxhZClcclxuICAgIGNvbnN0IG1lbnVTZWN0aW9uMyA9IGZhY3RvcnlEaXYoJ21lbnVTZWN0aW9uJywgJ01haW4nKTtcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24zKVxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChmcmllcylcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQocmljZSlcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoc3BhZ2hldHRpKVxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChicmVhZClcclxuXHJcbiAgICByZXR1cm4gbWVudVxyXG59KSgpXHJcbmZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LG1lbnVOYW1lLG1lbnVEZXNjcmlwdGlvbixtZW51UHJpY2UsbWVudUltYWdlKXtcclxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVOYW1lKTtcclxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVEZXNjcmlwdGlvbik7XHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51UHJpY2UpO1xyXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUltYWdlKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgeyBob21lUGFnZSB9IGZyb20gJy4vaG9tZSdcclxuaW1wb3J0IHsgbWVudVNlY3Rpb24gfSBmcm9tICcuL21lbnUnXHJcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QuanMnXHJcbmltcG9ydCB7Zm9vdGVyfSBmcm9tICcuL2Zvb3RlcidcclxubGV0IHJlbmRlclBhZ2UgPSAoZnVuY3Rpb24oKXtcclxuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lUGFnZSk7XHJcbiAgLy8gaG9tZVBhZ2UucmVtb3ZlKCk7XHJcbiAgLy8gY29udGVudC5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XHJcbiAgLy8gbWVudVNlY3Rpb24ucmVtb3ZlKCk7XHJcbiAgLy8gY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn0pKClcclxuXHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZUJ0bicpO1xyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCdG4nKTtcclxuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0QnRuJyk7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICByZXNldERvbSgpXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lUGFnZSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59KVxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgcmVzZXREb20oKVxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufSlcclxuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gIHJlc2V0RG9tKClcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIHJlc2V0RG9tKCl7XHJcbiAgaGVhZGVyLnJlbW92ZSgpO1xyXG4gIGhvbWVQYWdlLnJlbW92ZSgpO1xyXG4gIG1lbnVTZWN0aW9uLnJlbW92ZSgpO1xyXG4gIGNvbnRhY3QucmVtb3ZlKClcclxuICBmb290ZXIucmVtb3ZlKClcclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=