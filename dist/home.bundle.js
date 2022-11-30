/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");


const homePage = (function(){
    const home = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('home');
    const restaurantImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)("/assets/Therestaurant.jpeg",'image of a restaurant');
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDckJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDRTtBQUNsQztBQUNQLGlCQUFpQixvREFBVTtBQUMzQiw0QkFBNEIsc0RBQVk7QUFDeEMscUJBQXFCLG9EQUFVO0FBQy9CLG9CQUFvQixvREFBVTtBQUM5QiwwQkFBMEIsb0RBQVU7QUFDcEMsa0NBQWtDLG9EQUFVO0FBQzVDLHNCQUFzQixvREFBVTtBQUNoQyx5QkFBeUIsb0RBQVU7QUFDbkMsNkJBQTZCLG9EQUFVO0FBQ3ZDLDZCQUE2QixvREFBVTtBQUN2Qyw2QkFBNkIsb0RBQVU7QUFDdkMsNkJBQTZCLG9EQUFVO0FBQ3ZDLDZCQUE2QixvREFBVTtBQUN2Qyw2QkFBNkIsb0RBQVU7QUFDdkMsNkJBQTZCLG9EQUFVO0FBQ3ZDLHFCQUFxQixvREFBVTtBQUMvQix3QkFBd0Isb0RBQVU7QUFDbEMsb0JBQW9CLG9EQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmFsIGZhY3RvcnkgZnVuY3Rpb24gY3JlYXRlZCBoZXJlXHJcbmZ1bmN0aW9uIGZhY3RvcnlEaXYoY2xhc3NOYW1lLCB0ZXh0KSB7XHJcbiAgICBjb25zdCBjcmVhdGV0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcclxuICAgIGNyZWF0ZXRhZy50ZXh0Q29udGVudCA9IHRleHRcclxuICAgIHJldHVybiBjcmVhdGV0YWdcclxufVxyXG5cclxuZnVuY3Rpb24gZmFjdG9yeUltYWdlKHNyYywgYWx0KSB7XHJcbiAgICBjb25zdCBjcmVhdGV0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYylcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdClcclxuICAgIHJldHVybiBjcmVhdGV0YWdcclxufVxyXG5cclxuZnVuY3Rpb24gZmFjdG9yeUJ0bihjbGFzc05hbWUsdGV4dCl7XHJcbiAgICBjb25zdCBjcmVhdGV0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcclxuICAgIGNyZWF0ZXRhZy50ZXh0Q29udGVudCA9IHRleHRcclxuICAgIHJldHVybiBjcmVhdGV0YWdcclxufVxyXG5cclxuZXhwb3J0e2ZhY3RvcnlEaXYsZmFjdG9yeUltYWdlLGZhY3RvcnlCdG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmYWN0b3J5RGl2IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBmYWN0b3J5SW1hZ2UgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XHJcbmV4cG9ydCBjb25zdCBob21lUGFnZSA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgaG9tZSA9IGZhY3RvcnlEaXYoJ2hvbWUnKTtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnRJbWFnZSA9IGZhY3RvcnlJbWFnZShcIi9hc3NldHMvVGhlcmVzdGF1cmFudC5qcGVnXCIsJ2ltYWdlIG9mIGEgcmVzdGF1cmFudCcpO1xyXG4gICAgY29uc3QgYWJvdXREaXYgPSBmYWN0b3J5RGl2KCdhYm91dCcpO1xyXG4gICAgY29uc3QgcmVtYXJrcyA9IGZhY3RvcnlEaXYoXCJcIiwgXCJIaXZlJ3MgUmVzdGF1cmFudCBpcyB0aGUgYmVzdCBpbiB0aGUgd2hvbGUgbWlsa3kgd2F5LHdoZW5ldmVyIHlvdSBjb21lIHZpc2l0aW5nIGFuZCB5b3UgbmVlZCBhIHBsYWNlIHRvIHRhc3RlIHRoZSBiZXN0IGZvb2QsIHlvdSBrbm93IHdoZXJlIHRvIGNvbWUhXCIpO1xyXG4gICAgY29uc3QgcmVtYXJrc0F1dGhvciA9IGZhY3RvcnlEaXYoJycsJ1BhdHJpY2sgU3RhcicpO1xyXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzQ29udGFpbmVyID0gZmFjdG9yeURpdihcIm9wZW5pbmdIb3Vyc0NvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGhvdXJzVGV4dCA9IGZhY3RvcnlEaXYoJycsJ0hvdXJzJyk7XHJcbiAgICBjb25zdCBvcGVuaW5nSG91cnMgPSBmYWN0b3J5RGl2KCdvcGVuaW5nSG91cnMnKTtcclxuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc0RpdjEgPSBmYWN0b3J5RGl2KCcnLCdTdW5kYXk6IDhhbSAtIDhwbScpO1xyXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzRGl2MiA9IGZhY3RvcnlEaXYoJycsICdNb25kYXk6IDZhbSAtIDZwbScpO1xyXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzRGl2MyA9IGZhY3RvcnlEaXYoJycsICdUdWVzZGF5OiA2YW0gLSA2cG0nKTtcclxuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc0RpdjQgPSBmYWN0b3J5RGl2KCcnLCAnV2VkbmVzZGF5OjZhbSAtIDZwbScpO1xyXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzRGl2NSA9IGZhY3RvcnlEaXYoJycsICdUaHVyc2RheTo2YW0gLSAxMHBtJyk7XHJcbiAgICBjb25zdCBvcGVuaW5nSG91cnNEaXY2ID0gZmFjdG9yeURpdignJywgJ0ZyaWRheTogNmFtIC0gMTBwbScpO1xyXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzRGl2NyA9IGZhY3RvcnlEaXYoJycsICdTYXR1cmRheTogOGFtIC0gMTBwbScpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBmYWN0b3J5RGl2KCdsb2NhdGlvbicpO1xyXG4gICAgY29uc3QgbG9jYXRpb25EaXYgPSBmYWN0b3J5RGl2KCcnLCdMb2NhdGlvbicpO1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IGZhY3RvcnlEaXYoJycsJ2VkaW5idXJnLHBsYW5ldCB2MTNrLG5vcnRoZXJuIGhlbWlzcGhlcmUsbWlsa3kgd2F5LicpO1xyXG4gICAgLy8gYXBwZW5kIHRoZSBjcmVhdGVkIGVsZW1lbnRzIHRvIHRoZSBwYXJlbnQgZWxlbWVudFxyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1hZ2UpO1xyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChhYm91dERpdik7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0NvbnRhaW5lcik7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKHJlbWFya3MpO1xyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQocmVtYXJrc0F1dGhvcik7XHJcbiAgICBvcGVuaW5nSG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNUZXh0KTtcclxuICAgIG9wZW5pbmdIb3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnMpO1xyXG4gICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0RpdjEpO1xyXG4gICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0RpdjIpO1xyXG4gICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0RpdjMpO1xyXG4gICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0RpdjQpO1xyXG4gICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0RpdjUpO1xyXG4gICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0RpdjYpO1xyXG4gICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0RpdjcpO1xyXG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xyXG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcbiAgICByZXR1cm4gaG9tZTtcclxufSkoKVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==