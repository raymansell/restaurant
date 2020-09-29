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

/***/ "./src/home-tab.js":
/*!*************************!*\
  !*** ./src/home-tab.js ***!
  \*************************/
/*! exports provided: homeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homeTab\", function() { return homeTab; });\nfunction homeTab(section) {\n  const home = document.createElement('div');\n  home.id = 'home';\n  home.className = 'active';\n  home.setAttribute('data-tab-content', '');\n  home.innerHTML = `\n  <p>We hope this letter finds you well.</p>\n  <p><span class=\"accent\">The Kitchen</span> is a cocktail parlor located at</p>\n  <span class=\"accent\">55 Irving Place, NYC.</span>\n  <img src=\"./img/stamp.png\" class=\"stamp\" alt=\"\">\n  `;\n  section.appendChild(home);\n}\n\n\n\n//# sourceURL=webpack:///./src/home-tab.js?");

/***/ }),

/***/ "./src/hours-tab.js":
/*!**************************!*\
  !*** ./src/hours-tab.js ***!
  \**************************/
/*! exports provided: hoursTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hoursTab\", function() { return hoursTab; });\nfunction hoursTab(section) {\n  const hours = document.createElement('div');\n  hours.className = 'active';\n  hours.id = 'hours';\n  hours.setAttribute('data-tab-content', '');\n  hours.innerHTML = `\n  <div class=\"hours-info\">\n    <h3>Hours</h3>\n    <p>Wednesday - 6pm - late</p>\n    <p>Thursday - Lunch 12pm-2pm, Dinner 6pm - late</p>\n    <p>Lunch 12pm-2pm, Dinner 6pm - late</p>\n    <p>Lunch 12pm-2pm, Dinner 6pm - late</p>\n    <p>Sunday -> Monday - Closed</p>\n  </div>\n  <div class=\"contact-info\">\n    <h3>Contact</h3>\n    <p>02 8937 2530 (unattended Sunday - Wednesday afternoon)</p>\n    <p>362 Oxford St, Paddington, NSW</p>\n    <p>hello@saintpeter.com.au (unattended Sunday - Wednesday afternoon)</p>\n  </div>`;\n  section.appendChild(hours);\n}\n\n\n\n//# sourceURL=webpack:///./src/hours-tab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _home_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-tab */ \"./src/home-tab.js\");\n/* harmony import */ var _menu_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-tab */ \"./src/menu-tab.js\");\n/* harmony import */ var _hours_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hours-tab */ \"./src/hours-tab.js\");\n\n\n\n\n\n/*Initial setup*/\nObject(_page_load__WEBPACK_IMPORTED_MODULE_0__[\"headerSetup\"])();\nObject(_page_load__WEBPACK_IMPORTED_MODULE_0__[\"heroSetup\"])();\nconst section = document.querySelector('.hero');\n\nObject(_home_tab__WEBPACK_IMPORTED_MODULE_1__[\"homeTab\"])(section);\n// menuTab(section);\n// hoursTab(section);\nObject(_page_load__WEBPACK_IMPORTED_MODULE_0__[\"footerSetup\"])();\n\n/*Hamburguer menu events*/\nconst openMenuIcon = document.querySelector('.open');\nconst closeMenuIcon = document.querySelector('.close');\n\nconst navListMenu = document.querySelector('.tab-list');\n\nopenMenuIcon.addEventListener('click', () => {\n  navListMenu.classList.add('active');\n});\n\ncloseMenuIcon.addEventListener('click', () => {\n  navListMenu.classList.remove('active');\n});\n\n/*Tab menu logic*/\nconst tabs = document.querySelectorAll('[data-tab-target]');\n\ntabs.forEach(tab => {\n  tab.addEventListener('click', () => {\n    const currentTabContent = document.querySelector('[data-tab-content]'); /*there's only one tab open at a time in the DOM*/\n    section.removeChild(currentTabContent);\n    const target = tab.dataset.tabTarget;\n    switch(target) {\n      case 'home':\n        Object(_home_tab__WEBPACK_IMPORTED_MODULE_1__[\"homeTab\"])(section);\n        break;\n      case 'menu':\n        Object(_menu_tab__WEBPACK_IMPORTED_MODULE_2__[\"menuTab\"])(section);\n        break;\n      case 'hours':\n        Object(_hours_tab__WEBPACK_IMPORTED_MODULE_3__[\"hoursTab\"])(section);\n        break;\n    }\n    tabs.forEach(tab => {\n      tab.classList.remove('current');\n    });\n    tab.classList.add('current');\n    const tabList = document.querySelector('.tab-list');\n    tabList.classList.remove('active');\n  });\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu-tab.js":
/*!*************************!*\
  !*** ./src/menu-tab.js ***!
  \*************************/
/*! exports provided: menuTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuTab\", function() { return menuTab; });\nfunction menuTab(section) {\n  const menu = document.createElement('div');\n  menu.className = 'active';\n  menu.id = 'menu';\n  menu.setAttribute('data-tab-content', '');\n  menu.innerHTML = `\n  <ul class=\"lunch-menu\">\n    <h3 class=\"menu-type-title\">Lunch</h3>\n    <li class=\"plate\">\n      <h5 class=\"plate-title\">Moonlight Kiss Rock Oyster 5</h5>\n      <p class=\"plate-description\">Steven Feletti/ Bateman's Bay NSW</p>\n    </li>\n    <li class=\"plate\">\n      <h5 class=\"plate-title\">Tathra Rock Oyster 5.5</h5>\n      <p class=\"plate-description\">Gary Rodley/ Nelson's Lagoon Tathra NSW</p>\n    </li>\n    <li class=\"plate\">\n      <h5 class=\"plate-title\">Organic Wapengo Rock Oyster 6</h5>\n      <p class=\"plate-description\">Shane Buckley/ Wapengo Lake NSW</p>\n    </li>\n    <li class=\"plate\">\n      <h5 class=\"plate-title\">Live Purple Sea Urchin 24</h5>\n      <p class=\"plate-description\">Craig Shepherd/ Royal National Park NSW</p>\n    </li>\n    <li class=\"plate\">\n      <h5 class=\"plate-title\">A Selection of Raw Australian Fish 26</h5>\n      <p class=\"plate-description\">Bunya Red Farm Capers & Vividus Extra Virgin Olive Oil</p>\n    </li>\n  </ul>\n  <ul class=\"dinner-menu\">\n    <h3 class=\"menu-type-title\">Dinner</h3>\n    <li class=\"plate\">\n      <h5 class=\"plate-title\">The Fish Charcuterie 14</h5>\n      <p class=\"plate-description\">by Fish Butchery</p>\n    </li>\n    <li class=\"plate\">\n      <h5 class=\"plate-title\">Cold Smoked Bass Grouper Roe 24</h5>\n      <p class=\"plate-description\">Dried Tomatoes & Fragrant Herbs</p>\n    </li>\n    <li class=\"plate\">\n      <h5 class=\"plate-title\">Pressed Coral Trout Head 24</h5>\n      <p class=\"plate-description\">Quince & Saffron Jelly</p>\n    </li>\n    <li class=\"plate\">\n      <h5 class=\"plate-title\">Striped Marlin Nduja 22</h5>\n      <p class=\"plate-description\">Ulladulla Blue Mackerel on Toast</p>\n    </li>\n    <li class=\"plate\">\n      <h5 class=\"plate-title\">Day Dry Aged Murray Cod 52</h5>\n      <p class=\"plate-description\">Salt & Vinegar Head, Diane Sauce</p>\n    </li>\n  </ul>`;\nsection.appendChild(menu);\n}\n\n\n\n//# sourceURL=webpack:///./src/menu-tab.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/*! exports provided: headerSetup, heroSetup, footerSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headerSetup\", function() { return headerSetup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"heroSetup\", function() { return heroSetup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"footerSetup\", function() { return footerSetup; });\nconst content = document.getElementById('content');\n\nconst container = document.createElement('div');\ncontainer.className = 'container';\n\n\nfunction headerSetup() {\n\n  const header = document.createElement('header');\n\n  const headerNav = document.createElement('nav');\n  headerNav.className = 'header-nav';\n\n  const navBrand = document.createElement('div');\n  navBrand.className = 'nav-brand';\n\n  const nameLogo = document.createElement('img');\n  nameLogo.setAttribute('src', './img/name-logo.png');\n\n  const menuIcons = document.createElement('div');\n  menuIcons.className = 'menu-icons';\n\n  const menuIconsOpen = menuIcons.cloneNode(true);\n  menuIconsOpen.className += ' open';\n\n  const menuIconsClose = menuIcons.cloneNode(true);\n  menuIconsClose.className += ' close';\n\n  const openIcon = document.createElement('i');\n  openIcon.className = 'icon ion-md-menu';\n\n  const closeIcon = document.createElement('i');\n  closeIcon.className = 'icon ion-md-close';\n\n  const tabList = document.createElement('ul');\n  tabList.className = 'tab-list';\n\n  const tabItem = document.createElement('li');\n  tabItem.className = 'tab-item';\n\n  const homeTabItem = tabItem.cloneNode(true);\n  const menuTabItem = tabItem.cloneNode(true);\n  const hoursTabItem = tabItem.cloneNode(true);\n\n  const tabLink = document.createElement('a');\n  tabLink.className = 'tab-link';\n\n  const homeTabLink = tabLink.cloneNode(true);\n  homeTabLink.className += ' current';\n  homeTabLink.setAttribute('href', '#');\n  homeTabLink.setAttribute('data-tab-target', 'home');\n  homeTabLink.textContent = 'Home';\n\n  const menuTabLink = tabLink.cloneNode(true);\n  menuTabLink.setAttribute('href', '#');\n  menuTabLink.setAttribute('data-tab-target', 'menu');\n  menuTabLink.textContent = \"Menu\";\n\n  const hoursTabLink = tabLink.cloneNode(true);\n  hoursTabLink.setAttribute('href', '#');\n  hoursTabLink.setAttribute('data-tab-target', 'hours');\n  hoursTabLink.textContent = \"Hours\";\n\n  content.appendChild(header);\n\n  header.appendChild(container);\n  container.appendChild(headerNav);\n  \n  headerNav.appendChild(navBrand);\n  navBrand.appendChild(nameLogo);\n  \n  headerNav.appendChild(menuIconsOpen);\n  menuIconsOpen.appendChild(openIcon);\n\n  headerNav.appendChild(tabList);\n  tabList.appendChild(menuIconsClose);\n  menuIconsClose.appendChild(closeIcon);\n  tabList.appendChild(homeTabItem);\n  homeTabItem.appendChild(homeTabLink);\n  tabList.appendChild(menuTabItem);\n  menuTabItem.appendChild(menuTabLink);\n  tabList.appendChild(hoursTabItem);\n  hoursTabItem.appendChild(hoursTabLink);\n}\n\nfunction heroSetup() {\n  const heroContainer = document.createElement('section');\n  heroContainer.className = 'hero container';\n  content.appendChild(heroContainer);\n}\n\nfunction footerSetup() {\n  const footer = document.createElement('footer');\n  const footerContainer = (container.cloneNode(false));\n\n  const footerNav = document.createElement('nav');\n  footerNav.className = 'footer-nav';\n\n  const reservationBtn = document.createElement('button');\n  reservationBtn.className = 'reservation-btn';\n  reservationBtn.textContent = 'Make a Reservation';\n\n  const ul = document.createElement('ul');\n  const socialItem = document.createElement('li');\n\n  const socialLink = document.createElement('a');\n  socialLink.setAttribute('href', '#');\n  socialLink.className = 'social-link';\n\n  const instagramIcon = document.createElement('img');\n  instagramIcon.setAttribute('src', './img/instagram.svg');\n\n  const facebookIcon = document.createElement('img');\n  facebookIcon.setAttribute('src', './img/facebook.svg');\n\n  const twitterIcon = document.createElement('img');\n  twitterIcon.setAttribute('src', './img/twitter.svg');\n\n  content.appendChild(footer);\n  footer.appendChild(footerContainer);\n  footerContainer.appendChild(footerNav);\n  footerNav.appendChild(reservationBtn);\n  footerNav.appendChild(ul);\n\n  ul.appendChild(socialItem).appendChild(socialLink.cloneNode()).appendChild(instagramIcon);\n  ul.appendChild(socialItem).appendChild(socialLink.cloneNode()).appendChild(facebookIcon);\n  ul.appendChild(socialItem).appendChild(socialLink.cloneNode()).appendChild(twitterIcon);\n}\n\n\n\n//# sourceURL=webpack:///./src/page-load.js?");

/***/ })

/******/ });