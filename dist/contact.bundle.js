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
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDckJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDRTtBQUN6QztBQUNBO0FBQ0EsMkJBQTJCLG9EQUFVO0FBQ3JDLGtCQUFrQixvREFBVTtBQUM1QixrQkFBa0Isb0RBQVU7QUFDNUIsbUJBQW1CLHNEQUFZO0FBQy9CLGtCQUFrQixvREFBVTtBQUM1Qix3QkFBd0Isb0RBQVU7QUFDbEMseUJBQXlCLG9EQUFVO0FBQ25DLG1CQUFtQixvREFBVTtBQUM3QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSwyQkFBMkIsb0RBQVU7QUFDckMsa0JBQWtCLG9EQUFVO0FBQzVCLGtCQUFrQixvREFBVTtBQUM1QixtQkFBbUIsc0RBQVk7QUFDL0Isa0JBQWtCLG9EQUFVO0FBQzVCLHdCQUF3QixvREFBVTtBQUNsQyx5QkFBeUIsb0RBQVU7QUFDbkMsbUJBQW1CLG9EQUFVO0FBQzdCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDJCQUEyQixvREFBVTtBQUNyQyxrQkFBa0Isb0RBQVU7QUFDNUIsa0JBQWtCLG9EQUFVO0FBQzVCLG1CQUFtQixzREFBWTtBQUMvQixrQkFBa0Isb0RBQVU7QUFDNUIsd0JBQXdCLG9EQUFVO0FBQ2xDLHlCQUF5QixvREFBVTtBQUNuQyxtQkFBbUIsb0RBQVU7QUFDN0I7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNPO0FBQ1Asb0JBQW9CLG9EQUFVO0FBQzlCLHdCQUF3QixvREFBVTtBQUNsQyw0QkFBNEIsb0RBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmFsIGZhY3RvcnkgZnVuY3Rpb24gY3JlYXRlZCBoZXJlXHJcbmZ1bmN0aW9uIGZhY3RvcnlEaXYoY2xhc3NOYW1lLCB0ZXh0KSB7XHJcbiAgICBjb25zdCBjcmVhdGV0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcclxuICAgIGNyZWF0ZXRhZy50ZXh0Q29udGVudCA9IHRleHRcclxuICAgIHJldHVybiBjcmVhdGV0YWdcclxufVxyXG5cclxuZnVuY3Rpb24gZmFjdG9yeUltYWdlKHNyYywgYWx0KSB7XHJcbiAgICBjb25zdCBjcmVhdGV0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYylcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdClcclxuICAgIHJldHVybiBjcmVhdGV0YWdcclxufVxyXG5cclxuZnVuY3Rpb24gZmFjdG9yeUJ0bihjbGFzc05hbWUsdGV4dCl7XHJcbiAgICBjb25zdCBjcmVhdGV0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcclxuICAgIGNyZWF0ZXRhZy50ZXh0Q29udGVudCA9IHRleHRcclxuICAgIHJldHVybiBjcmVhdGV0YWdcclxufVxyXG5cclxuZXhwb3J0e2ZhY3RvcnlEaXYsZmFjdG9yeUltYWdlLGZhY3RvcnlCdG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmYWN0b3J5RGl2IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBmYWN0b3J5SW1hZ2UgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XHJcblxyXG5jb25zdCBTcG9uZ2VCb2IgPSAoZnVuY3Rpb24gKGNvbnRhY3RDYXJkQ29udGFpbmVyLCBjb250YWN0Q2FyZCwgQ29udGFjdE5hbWUsY29udGFjdEltYWdlICxjb250YWN0SW5mbywgY29udGFjdFByb2Zlc3Npb24sIGNvbnRhY3RQaG9uZU51bWJlciwgY29udGFjdEVtYWlsKSB7XHJcbiAgICBjb250YWN0Q2FyZENvbnRhaW5lciA9IGZhY3RvcnlEaXYoJycpO1xyXG4gICAgY29udGFjdENhcmQgPSBmYWN0b3J5RGl2KCcnKTtcclxuICAgIENvbnRhY3ROYW1lID0gZmFjdG9yeURpdignJywgJ1Nwb25nZUJvYicpO1xyXG4gICAgY29udGFjdEltYWdlID0gZmFjdG9yeUltYWdlKCcvYXNzZXRzL3Nwb25nZUJvYi5qcGVnJywgJ2EgcGljIG9mIHNwb25nZUJvYicpO1xyXG4gICAgY29udGFjdEluZm8gPSBmYWN0b3J5RGl2KCcnKTtcclxuICAgIGNvbnRhY3RQcm9mZXNzaW9uID0gZmFjdG9yeURpdignJywgJ0NoZWYnKTtcclxuICAgIGNvbnRhY3RQaG9uZU51bWJlciA9IGZhY3RvcnlEaXYoJycsICcrNzMtNDU2LTAxJyk7XHJcbiAgICBjb250YWN0RW1haWwgPSBmYWN0b3J5RGl2KCcnLCAnU3BvbmdlQm9iQG1pbGt5LmlvJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihjb250YWN0Q2FyZENvbnRhaW5lciwgY29udGFjdENhcmQsIENvbnRhY3ROYW1lLGNvbnRhY3RJbWFnZSwgY29udGFjdEluZm8sIGNvbnRhY3RQcm9mZXNzaW9uLCBjb250YWN0UGhvbmVOdW1iZXIsIGNvbnRhY3RFbWFpbCk7XHJcbiAgICByZXR1cm4gY29udGFjdENhcmRDb250YWluZXJcclxufSkoKVxyXG5cclxuY29uc3QgcGxhbmtUb24gPSAoZnVuY3Rpb24gKGNvbnRhY3RDYXJkQ29udGFpbmVyLCBjb250YWN0Q2FyZCwgQ29udGFjdE5hbWUsIGNvbnRhY3RJbWFnZSwgY29udGFjdEluZm8sIGNvbnRhY3RQcm9mZXNzaW9uLCBjb250YWN0UGhvbmVOdW1iZXIsIGNvbnRhY3RFbWFpbCl7XHJcbiAgICBjb250YWN0Q2FyZENvbnRhaW5lciA9IGZhY3RvcnlEaXYoJycpO1xyXG4gICAgY29udGFjdENhcmQgPSBmYWN0b3J5RGl2KCcnKTtcclxuICAgIENvbnRhY3ROYW1lID0gZmFjdG9yeURpdignJywgJ1BsYW5rdG9uJyk7XHJcbiAgICBjb250YWN0SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoJy9hc3NldHMvc3BvbmdlQm9iLmpwZWcnLCAnYSBwaWMgb2YgcGxhbmt0b24nKTtcclxuICAgIGNvbnRhY3RJbmZvID0gZmFjdG9yeURpdignJyk7XHJcbiAgICBjb250YWN0UHJvZmVzc2lvbiA9IGZhY3RvcnlEaXYoJycsICdWaWxsaWFuJyk7XHJcbiAgICBjb250YWN0UGhvbmVOdW1iZXIgPSBmYWN0b3J5RGl2KCcnLCAnKzczLTQ3Mi0yMicpO1xyXG4gICAgY29udGFjdEVtYWlsID0gZmFjdG9yeURpdignJywgJ3BsYW5rdG9uMDdAbWlsa3kuaW8nKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKGNvbnRhY3RDYXJkQ29udGFpbmVyLCBjb250YWN0Q2FyZCwgQ29udGFjdE5hbWUsIGNvbnRhY3RJbWFnZSwgY29udGFjdEluZm8sIGNvbnRhY3RQcm9mZXNzaW9uLCBjb250YWN0UGhvbmVOdW1iZXIsIGNvbnRhY3RFbWFpbCk7XHJcbiAgICByZXR1cm4gY29udGFjdENhcmRDb250YWluZXJcclxufSkoKVxyXG5cclxuY29uc3QgbXJLcmFicyA9IChmdW5jdGlvbiAoY29udGFjdENhcmRDb250YWluZXIsIGNvbnRhY3RDYXJkLCBDb250YWN0TmFtZSwgY29udGFjdEltYWdlLCBjb250YWN0SW5mbywgY29udGFjdFByb2Zlc3Npb24sIGNvbnRhY3RQaG9uZU51bWJlciwgY29udGFjdEVtYWlsKSB7XHJcbiAgICBjb250YWN0Q2FyZENvbnRhaW5lciA9IGZhY3RvcnlEaXYoJycpO1xyXG4gICAgY29udGFjdENhcmQgPSBmYWN0b3J5RGl2KCcnKTtcclxuICAgIENvbnRhY3ROYW1lID0gZmFjdG9yeURpdignJywgJ01yIEtyYWJzJyk7XHJcbiAgICBjb250YWN0SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoJy9hc3NldHMvbXJLcmFicy5wbmcnLCAnYSBwaWMgb2YgbXIgS3JhYnMnKTtcclxuICAgIGNvbnRhY3RJbmZvID0gZmFjdG9yeURpdignJyk7XHJcbiAgICBjb250YWN0UHJvZmVzc2lvbiA9IGZhY3RvcnlEaXYoJycsICdDRU8nKTtcclxuICAgIGNvbnRhY3RQaG9uZU51bWJlciA9IGZhY3RvcnlEaXYoJycsICcrNzMtMjcxLTgzJyk7XHJcbiAgICBjb250YWN0RW1haWwgPSBmYWN0b3J5RGl2KCcnLCAna3JhYmJ5TXVsYUBtaWxreS5pbycpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4oY29udGFjdENhcmRDb250YWluZXIsIGNvbnRhY3RDYXJkLCBDb250YWN0TmFtZSwgY29udGFjdEltYWdlLCBjb250YWN0SW5mbywgY29udGFjdFByb2Zlc3Npb24sIGNvbnRhY3RQaG9uZU51bWJlciwgY29udGFjdEVtYWlsKTtcclxuICAgIHJldHVybiBjb250YWN0Q2FyZENvbnRhaW5lclxyXG59KSgpXHJcblxyXG5leHBvcnQgY29uc3QgY29udGFjdCA9IChmdW5jdGlvbigpe1xyXG4gICAgbGV0IGNvbnRhY3RVcyA9IGZhY3RvcnlEaXYoJ2NvbnRhY3RVcycpO1xyXG4gICAgbGV0IENvbnRhY3RVc1RleHQgPSBmYWN0b3J5RGl2KCcnLCdDb250YWN0IFVzJyk7XHJcbiAgICBsZXQgY29udGFjdHNDb250YWluZXIgPSBmYWN0b3J5RGl2KCdjb250YWN0cycpO1xyXG4gICAgY29udGFjdFVzLmFwcGVuZENoaWxkKENvbnRhY3RVc1RleHQpO1xyXG4gICAgY29udGFjdFVzLmFwcGVuZENoaWxkKGNvbnRhY3RzQ29udGFpbmVyKTtcclxuICAgIGNvbnRhY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKFNwb25nZUJvYik7XHJcbiAgICBjb250YWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFua1RvbilcclxuICAgIGNvbnRhY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1yS3JhYnMpXHJcbiAgICByZXR1cm4gY29udGFjdFVzXHJcbn0pKClcclxuXHJcbmZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKGNvbnRhY3RDYXJkQ29udGFpbmVyLGNvbnRhY3RDYXJkLENvbnRhY3ROYW1lLGNvbnRhY3RJbWFnZSxjb250YWN0SW5mbyxjb250YWN0UHJvZmVzc2lvbixjb250YWN0UGhvbmVOdW1iZXIsY29udGFjdEVtYWlsKXtcclxuICAgIGNvbnRhY3RDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkKTtcclxuICAgIGNvbnRhY3RDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcclxuICAgIGNvbnRhY3RDYXJkLmFwcGVuZENoaWxkKENvbnRhY3ROYW1lKTtcclxuICAgIGNvbnRhY3RDYXJkLmFwcGVuZENoaWxkKGNvbnRhY3RJbWFnZSk7XHJcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0UHJvZmVzc2lvbik7XHJcbiAgICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0UGhvbmVOdW1iZXIpO1xyXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdEVtYWlsKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==