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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\nconsole.log('prueba');\n\n\n\nObject(_page_load__WEBPACK_IMPORTED_MODULE_0__[\"headerSetup\"])();\nObject(_page_load__WEBPACK_IMPORTED_MODULE_0__[\"heroSetup\"])();\nObject(_page_load__WEBPACK_IMPORTED_MODULE_0__[\"footerSetup\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/*! exports provided: headerSetup, heroSetup, footerSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headerSetup\", function() { return headerSetup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"heroSetup\", function() { return heroSetup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"footerSetup\", function() { return footerSetup; });\nconst content = document.getElementById('content');\n\nconst container = document.createElement('div');\ncontainer.className = 'container';\n\n\nfunction headerSetup() {\n\n  const header = document.createElement('header');\n\n  const headerNav = document.createElement('nav');\n  headerNav.className = 'header-nav';\n\n  const navBrand = document.createElement('div');\n  navBrand.className = 'nav-brand';\n\n  const nameLogo = document.createElement('img');\n  nameLogo.setAttribute('src', './img/name-logo.png');\n\n  const menuIcons = document.createElement('div');\n  menuIcons.className = 'menu-icons';\n\n  const menuIconsOpen = menuIcons.cloneNode(true);\n  menuIconsOpen.className += ' open';\n\n  const menuIconsClose = menuIcons.cloneNode(true);\n  menuIconsClose.className += ' close';\n\n  const openIcon = document.createElement('i');\n  openIcon.className = 'icon ion-md-menu';\n\n  const closeIcon = document.createElement('i');\n  closeIcon.className = 'icon ion-md-close';\n\n  const tabList = document.createElement('ul');\n  tabList.className = 'tab-list';\n\n  const tabItem = document.createElement('li');\n  tabItem.className = 'tab-item';\n\n  const homeTabItem = tabItem.cloneNode(true);\n  const menuTabItem = tabItem.cloneNode(true);\n  const hoursTabItem = tabItem.cloneNode(true);\n\n  const tabLink = document.createElement('a');\n  tabLink.className = 'tab-link';\n\n  const homeTabLink = tabLink.cloneNode(true);\n  homeTabLink.className += ' current';\n  homeTabLink.setAttribute('href', '#');\n  homeTabLink.setAttribute('data-tab-target', '#home');\n  homeTabLink.textContent = 'Home';\n\n  const menuTabLink = tabLink.cloneNode(true);\n  menuTabLink.setAttribute('href', '#');\n  menuTabLink.setAttribute('data-tab-target', '#menu');\n  menuTabLink.textContent = \"Menu\";\n\n  const hoursTabLink = tabLink.cloneNode(true);\n  hoursTabLink.setAttribute('href', '#');\n  hoursTabLink.setAttribute('data-tab-target', '#hours');\n  hoursTabLink.textContent = \"Hours\";\n\n  content.appendChild(header);\n\n  header.appendChild(container);\n  container.appendChild(headerNav);\n  \n  headerNav.appendChild(navBrand);\n  navBrand.appendChild(nameLogo);\n  \n  headerNav.appendChild(menuIconsOpen);\n  menuIconsOpen.appendChild(openIcon);\n\n  headerNav.appendChild(tabList);\n  tabList.appendChild(menuIconsClose);\n  menuIconsClose.appendChild(closeIcon);\n  tabList.appendChild(homeTabItem);\n  homeTabItem.appendChild(homeTabLink);\n  tabList.appendChild(menuTabItem);\n  menuTabItem.appendChild(menuTabLink);\n  tabList.appendChild(hoursTabItem);\n  hoursTabItem.appendChild(hoursTabLink);\n}\n\nfunction heroSetup() {\n  const heroContainer = document.createElement('section');\n  heroContainer.className = 'hero container';\n  heroContainer.textContent = \"hola\";\n  content.appendChild(heroContainer);\n}\n\nfunction footerSetup() {\n  const footer = document.createElement('footer');\n  const footerContainer = (container.cloneNode(false));\n\n  const footerNav = document.createElement('nav');\n  footerNav.className = 'footer-nav';\n\n  const reservationBtn = document.createElement('button');\n  reservationBtn.className = 'reservation-btn';\n  reservationBtn.textContent = 'Make a Reservation';\n\n  const ul = document.createElement('ul');\n  const socialItem = document.createElement('li');\n\n  const socialLink = document.createElement('a');\n  socialLink.setAttribute('href', '#');\n  socialLink.className = 'social-link';\n\n  const instagramIcon = document.createElement('img');\n  instagramIcon.setAttribute('src', './img/instagram.svg');\n\n  const facebookIcon = document.createElement('img');\n  facebookIcon.setAttribute('src', './img/facebook.svg');\n\n  const twitterIcon = document.createElement('img');\n  twitterIcon.setAttribute('src', './img/twitter.svg');\n\n  content.appendChild(footer);\n  footer.appendChild(footerContainer);\n  footerContainer.appendChild(footerNav);\n  footerNav.appendChild(reservationBtn);\n  footerNav.appendChild(ul);\n\n  ul.appendChild(socialItem).appendChild(socialLink.cloneNode()).appendChild(instagramIcon);\n  ul.appendChild(socialItem).appendChild(socialLink.cloneNode()).appendChild(facebookIcon);\n  ul.appendChild(socialItem).appendChild(socialLink.cloneNode()).appendChild(twitterIcon);\n}\n\n\n\n//# sourceURL=webpack:///./src/page-load.js?");

/***/ })

/******/ });