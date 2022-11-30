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
  !*** ./src/menu.js ***!
  \*********************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFnQixvREFBVTtBQUMxQixnQkFBZ0Isc0RBQVk7QUFDNUI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNPO0FBQ1AsaUJBQWlCLG9EQUFVO0FBQzNCLG9CQUFvQixvREFBVTtBQUM5QixpQkFBaUIsb0RBQVU7QUFDM0IseUJBQXlCLG9EQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmFsIGZhY3RvcnkgZnVuY3Rpb24gY3JlYXRlZCBoZXJlXHJcbmZ1bmN0aW9uIGZhY3RvcnlEaXYoY2xhc3NOYW1lLCB0ZXh0KSB7XHJcbiAgICBjb25zdCBjcmVhdGV0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcclxuICAgIGNyZWF0ZXRhZy50ZXh0Q29udGVudCA9IHRleHRcclxuICAgIHJldHVybiBjcmVhdGV0YWdcclxufVxyXG5cclxuZnVuY3Rpb24gZmFjdG9yeUltYWdlKHNyYywgYWx0KSB7XHJcbiAgICBjb25zdCBjcmVhdGV0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYylcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdClcclxuICAgIHJldHVybiBjcmVhdGV0YWdcclxufVxyXG5cclxuZnVuY3Rpb24gZmFjdG9yeUJ0bihjbGFzc05hbWUsdGV4dCl7XHJcbiAgICBjb25zdCBjcmVhdGV0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcclxuICAgIGNyZWF0ZXRhZy50ZXh0Q29udGVudCA9IHRleHRcclxuICAgIHJldHVybiBjcmVhdGV0YWdcclxufVxyXG5cclxuZXhwb3J0e2ZhY3RvcnlEaXYsZmFjdG9yeUltYWdlLGZhY3RvcnlCdG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmYWN0b3J5RGl2IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBmYWN0b3J5SW1hZ2UgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XHJcblxyXG5jb25zdCBzdXBlckNva2UgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnU3VwZXIgY29rZScpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ0EgZ2FsYWN0aWMgZHJpbmsgd2l0aCBpbnNhbmUgc3VnYXIgcnVzaCEsQSBndWxwIGlzIHVzdWFsbHkgZW5vdWdoJyk7XHJcbiAgICBtZW51UHJpY2UgPSBmYWN0b3J5RGl2KCcnLCAnJDEuOTknKTtcclxuICAgIG1lbnVJbWFnZSA9IGZhY3RvcnlJbWFnZSgnL2Fzc2V0cy9jb2NhY29sYS5qcGVnJywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpO1xyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuXHJcbmNvbnN0IGNvZmZlZSA9IChmdW5jdGlvbiAobWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKSB7XHJcbiAgICBtZW51TGlzdCA9IGZhY3RvcnlEaXYoJ21lbnVMaXN0Jyk7XHJcbiAgICBtZW51TmFtZSA9IGZhY3RvcnlEaXYoJycsICdDb2ZmZWUnKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbiA9IGZhY3RvcnlEaXYoJycsICdQcm9ncmFtbWVycyBmYXZvdXJpdGVzISwgYmVzdCB0YWtlbiBlYXJseSBpbiB0aGUgbW9ybmluZy4nKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckMi41MCcpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKCcvYXNzZXRzL2NvZmZlZS5qcGVnJywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpXHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5cclxuY29uc3QgZW5lcmd5RHJpbmsgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnRW5lcmd5IERyaW5rJyk7XHJcbiAgICBtZW51RGVzY3JpcHRpb24gPSBmYWN0b3J5RGl2KCcnLCAnQXJlIHlvdSBmZWVsaW5nIHRpcmVkIGxhdGVseT8sYSBtZWRpdW0gc2l6ZWQgY3VwIGluY3JlYXNlcyB5b3VyIGVuZXJneSBieSAyNDAlIScpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQzLjUwJyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoJy9hc3NldHMvZW5lcmd5RHJpbmsuanBlZycsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKVxyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuY29uc3Qgb3JhbmdlRHJpbmsgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnb3JhbmdlIERyaW5rJyk7XHJcbiAgICBtZW51RGVzY3JpcHRpb24gPSBmYWN0b3J5RGl2KCcnLCAnRGVzaWduZWQgdG8gcXVlbmNoIHlvdXIgdGhpcnN0LDEwMCUgbmF0dXJhbCBhbHNvISAnKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckMy4wMCcpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKCcvYXNzZXRzL29yYW5nZURyaW5rLmpwZWcnLCAnaW1hZ2Ugb2YgY29jYWNvbGEnKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSlcclxuICAgIHJldHVybiBtZW51TGlzdFxyXG59KSgpXHJcbmNvbnN0IGljZUNyZWFtID0gKGZ1bmN0aW9uIChtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpIHtcclxuICAgIG1lbnVMaXN0ID0gZmFjdG9yeURpdignbWVudUxpc3QnKTtcclxuICAgIG1lbnVOYW1lID0gZmFjdG9yeURpdignJywgJ0ljZSBjcmVhbScpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ05lZWQgdG8gcnVuIGFuIGVycmFuZCBhbmQgZGlzdHJhY3QgeW91ciBraWRzP0J1eSB0aGVtIEhpdmVzIGljZSBjcmVhbSEnKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckMC45OScpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKCcvYXNzZXRzL2ljZUNyZWFtLmpwZWcnLCAnaW1hZ2Ugb2YgY29jYWNvbGEnKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSlcclxuICAgIHJldHVybiBtZW51TGlzdFxyXG59KSgpXHJcbmNvbnN0IGFuZ3J5QnVyZ2VyID0gKGZ1bmN0aW9uIChtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpIHtcclxuICAgIG1lbnVMaXN0ID0gZmFjdG9yeURpdignbWVudUxpc3QnKTtcclxuICAgIG1lbnVOYW1lID0gZmFjdG9yeURpdignJywgJ0FuZ3J5IEJ1cmdlcicpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ1N1cGVyIG1lYW4gYnVyZ2VyLGV2ZXJ5IGJpdGUgY2hhbmdlcyB5b3VyIG1vb2QnKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckNy45OScpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKCcvYXNzZXRzL2FuZ3J5QnVyZ2VyLmpwZWcnLCAnaW1hZ2Ugb2YgY29jYWNvbGEnKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSlcclxuICAgIHJldHVybiBtZW51TGlzdFxyXG59KSgpXHJcbmNvbnN0IGhhcHB5QnVyZ2VyID0gKGZ1bmN0aW9uIChtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpIHtcclxuICAgIG1lbnVMaXN0ID0gZmFjdG9yeURpdignbWVudUxpc3QnKTtcclxuICAgIG1lbnVOYW1lID0gZmFjdG9yeURpdignJywgJ0hhcHB5IEJ1cmdlcicpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ0hhdmluZyBhIGJhZCBkYXk/LFRoaXMgd291bGQgbWFrZSB5b3UgaGFwcGllciBqdXN0IGEgbGl0dGxlIGJpdCcpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQ3Ljk5Jyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoJy9hc3NldHMvaGFwcHlCdXJnZXIuanBlZycsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKVxyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuY29uc3QgZnJpZXMgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnRnJpZXMnKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbiA9IGZhY3RvcnlEaXYoJycsICdDcmF2aW5nIGZvciBhIGNydW5jaHkgbWVhbCxUaGlzIGlzIHRoZSBwZXJmZWN0IGRlYWwuJyk7XHJcbiAgICBtZW51UHJpY2UgPSBmYWN0b3J5RGl2KCcnLCAnJDEwLjAwJyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoJy9hc3NldHMvZnJpZXMuanBlZycsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKVxyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuY29uc3QgZnJ1aXRTYWxhZCA9IChmdW5jdGlvbiAobWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKSB7XHJcbiAgICBtZW51TGlzdCA9IGZhY3RvcnlEaXYoJ21lbnVMaXN0Jyk7XHJcbiAgICBtZW51TmFtZSA9IGZhY3RvcnlEaXYoJycsICdGcml1dCBTYWxhZCcpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ0FsbCBuYXR1cmFsLHBhY2tlZCB3aXRoIGVub3Jtb3VzIGFtb3VudCBvZiB2aXRhbWlucy4nKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckOS45OScpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKCcvYXNzZXRzL2ZydWl0IHNhbGFkLmpwZWcnLCAnaW1hZ2Ugb2YgY29jYWNvbGEnKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSlcclxuICAgIHJldHVybiBtZW51TGlzdFxyXG59KSgpXHJcbmNvbnN0IHJpY2UgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnUmljZScpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ091ciBtb3N0IG9yZGVyZWQgZm9vZC5JdHMgbm8gc2VjcmV0IHRoaXMgd291bGQgZmlsbCB5b3VyIHR1bW15IScpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQ2Ljk5Jyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoJy9hc3NldHMvcmljZS5qcGVnJywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpXHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5jb25zdCBzcGFnaGV0dGkgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnU3BhZ2hldHRpJyk7XHJcbiAgICBtZW51RGVzY3JpcHRpb24gPSBmYWN0b3J5RGl2KCcnLCAnQSBzcGljeSBtZWFsLHZlcnkgeXVtbXksdmVyeSB0YXN0eS4nKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckOC4wMCcpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKCcvYXNzZXRzL3NwYWdoZXR0aS5qcGVnJywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpXHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5jb25zdCBicmVhZCA9IChmdW5jdGlvbiAobWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKSB7XHJcbiAgICBtZW51TGlzdCA9IGZhY3RvcnlEaXYoJ21lbnVMaXN0Jyk7XHJcbiAgICBtZW51TmFtZSA9IGZhY3RvcnlEaXYoJycsICdCcmVhZCcpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ0EgbG9hZiBvZiBicmVhZCxzb2Z0IGFuZCB0ZW5kZXIsYmVzdCB0YWtlbiB3aXRoIHlvdXIgZmF2b3VyaXRlIHNwcmVhZCcpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQ0LjAwJyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoJy9hc3NldHMvYnJlYWQuanBlZycsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKVxyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuXHJcbmV4cG9ydCBjb25zdCBtZW51U2VjdGlvbiA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgbWVudSA9IGZhY3RvcnlEaXYoJ21lbnUnKTtcclxuICAgIGNvbnN0IG1lbnVEaXYgPSBmYWN0b3J5RGl2KCcnLCdNZW51Jyk7XHJcbiAgICBjb25zdCBmb29kID0gZmFjdG9yeURpdignYmV2ZXJhZ2VzJyk7XHJcbiAgICBjb25zdCBtZW51U2VjdGlvbjEgPSBmYWN0b3J5RGl2KCdtZW51U2VjdGlvbicsJ0JldmVyYWdlcycpO1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51RGl2KTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZm9vZCk7XHJcbiAgICBmb29kLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uMSk7XHJcbiAgICAvL2FwcGVuZCBpbmRpdmlkdWFsIGZvb2Qgc2VjdGlvblxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChzdXBlckNva2UpO1xyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChjb2ZmZWUpXHJcbiAgICBmb29kLmFwcGVuZENoaWxkKGVuZXJneURyaW5rKVxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChvcmFuZ2VEcmluaylcclxuICAgIGNvbnN0IG1lbnVTZWN0aW9uMiA9IGZhY3RvcnlEaXYoJ21lbnVTZWN0aW9uJywgJ1NpZGVzJyk7XHJcbiAgICBmb29kLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uMilcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoaWNlQ3JlYW0pXHJcbiAgICBmb29kLmFwcGVuZENoaWxkKGFuZ3J5QnVyZ2VyKVxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChoYXBweUJ1cmdlcilcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoZnJ1aXRTYWxhZClcclxuICAgIGNvbnN0IG1lbnVTZWN0aW9uMyA9IGZhY3RvcnlEaXYoJ21lbnVTZWN0aW9uJywgJ01haW4nKTtcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24zKVxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChmcmllcylcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQocmljZSlcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoc3BhZ2hldHRpKVxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChicmVhZClcclxuXHJcbiAgICByZXR1cm4gbWVudVxyXG59KSgpXHJcbmZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LG1lbnVOYW1lLG1lbnVEZXNjcmlwdGlvbixtZW51UHJpY2UsbWVudUltYWdlKXtcclxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVOYW1lKTtcclxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVEZXNjcmlwdGlvbik7XHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51UHJpY2UpO1xyXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUltYWdlKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=