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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: ENEMIES, LASERS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ENEMIES\", function() { return ENEMIES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LASERS\", function() { return LASERS; });\n/* harmony import */ var _movable_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movable_object */ \"./src/movable_object.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _laser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./laser */ \"./src/laser.js\");\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor(ctx){\r\n        this.ctx = ctx\r\n    }\r\n    start(){\r\n        const player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\n        player.draw(this.ctx)\r\n        player.bindKeys(this.ctx)\r\n        document.addEventListener(\"click\", e => {\r\n            debugger\r\n            const laser = new _laser__WEBPACK_IMPORTED_MODULE_2__[\"default\"](player.x - 2.5, player.y - 20, 20, 5, \"yellow\", 10)\r\n            LASERS.push(laser)\r\n            laser.draw(this.ctx)\r\n            laser.shoot(this.ctx)\r\n        })\r\n        const enemy1 = new _movable_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"](player.x - 30, player.y - 200, 50, 50, \"red\")\r\n       ENEMIES.push(enemy1)\r\n        enemy1.draw(this.ctx)\r\n        const enemy2 = new _movable_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"](100, 0, 15, 25, \"red\")\r\n       ENEMIES.push(enemy2)\r\n        enemy2.draw(this.ctx)\r\n        const enemy3 = new _movable_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"](60, 500, 15, 25, \"red\")\r\n       ENEMIES.push(enemy3)\r\n        enemy3.draw(this.ctx)\r\n        const enemy4 = new _movable_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"](400, 300, 15, 25, \"red\")\r\n       ENEMIES.push(enemy4)\r\n        enemy4.draw(this.ctx)\r\n        const enemy5 = new _movable_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"](350, 350, 15, 25, \"red\")\r\n       ENEMIES.push(enemy5)\r\n        enemy5.draw(this.ctx)\r\n    }\r\n}\r\n\r\nconst ENEMIES = []\r\nconst LASERS = []\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _movable_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movable_object */ \"./src/movable_object.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const canvas = document.getElementById(\"game-canvas\")\r\n    const ctx = canvas.getContext(\"2d\")\r\n    const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx)\r\n    game.start()\r\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/laser.js":
/*!**********************!*\
  !*** ./src/laser.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _movable_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movable_object */ \"./src/movable_object.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\r\n\r\n\r\n\r\nclass Laser extends _movable_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(x, y, height, width, color, vel){\r\n        super(x, y, height, width, color, vel)\r\n        this.hitpoint = {\r\n            x: this.x + this.width / 2,\r\n            y: this.y\r\n        }\r\n    }\r\n    shoot(ctx){\r\n        // window.requestAnimationFrame(this.shoot)\r\n        window.setInterval(() => {\r\n            this.move(ctx, \"UP\")\r\n            this.draw(ctx)\r\n            // ctx.clearRect(0, 0, 1080, 1920)\r\n        }, 1\r\n        )\r\n    }\r\n    checkHit(x, y, height, width){\r\n        return this.hitpoint.x >= x && this.hitpoint.x <= x + width && this.hitpoint.y >= y && this.hitpoint.y <= y + height\r\n    }\r\n    draw(ctx){\r\n        debugger\r\n        ctx.fillStyle = this.color;\r\n        ctx.fillRect(this.x, this.y, this.width, this.height)\r\n        for(const enemy of _game__WEBPACK_IMPORTED_MODULE_2__[\"ENEMIES\"]){\r\n            debugger\r\n            if (this.checkHit(enemy.x, enemy.y, enemy.height, enemy.width)){\r\n                enemy.color = \"pink\"\r\n                enemy.draw(ctx)\r\n                _game__WEBPACK_IMPORTED_MODULE_2__[\"ENEMIES\"].splice(0, 1)\r\n                _game__WEBPACK_IMPORTED_MODULE_2__[\"LASERS\"].splice(0, 1)\r\n            }\r\n        }\r\n        // ctx.fillStyle = \"red\";\r\n        // ctx.fillRect(this.x + this.width / 2, this.y - 5, 5, 5 )\r\n    }\r\n    move(ctx, direction){\r\n        debugger\r\n        switch(direction){\r\n            case \"RIGHT\":\r\n                debugger\r\n                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)\r\n                this.x = this.wrap(this.x + this.vel)\r\n                break;\r\n            case \"LEFT\":\r\n                debugger\r\n                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)\r\n                this.x = this.x - this.vel\r\n                break;\r\n            case \"UP\":\r\n                debugger\r\n                // ctx.clearRect(0, 0, 1080, 1920)\r\n                ctx.clearRect(this.x, this.y - 1, this.width + 1, this.height + 2)\r\n                this.y = this.y - this.vel\r\n                this.hitpoint.y = this.y\r\n                break;\r\n            case \"DOWN\":\r\n                debugger\r\n                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)\r\n                this.y = this.y + this.vel\r\n                break;\r\n        }\r\n        // ENEMIES.forEach(enemy => console.log(enemy))\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Laser);\n\n//# sourceURL=webpack:///./src/laser.js?");

/***/ }),

/***/ "./src/movable_object.js":
/*!*******************************!*\
  !*** ./src/movable_object.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass MoveableObject {\r\n    constructor(x, y, height, width, color, vel) {\r\n        debugger\r\n        this.x = x;\r\n        this.y = y;\r\n        this.height = height;\r\n        this.width = width;\r\n        this.color = color\r\n        this.vel = vel\r\n    }\r\n    draw(ctx){\r\n        debugger\r\n        ctx.fillStyle = this.color;\r\n        ctx.fillRect(this.x, this.y, this.width, this.height)\r\n    }\r\n    wrap(pos){\r\n        return pos % 1920\r\n    }\r\n    move(ctx, direction){\r\n        debugger\r\n        switch(direction){\r\n            case \"RIGHT\":\r\n                debugger\r\n                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)\r\n                this.x = this.wrap(this.x + this.vel)\r\n                break;\r\n            case \"LEFT\":\r\n                debugger\r\n                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)\r\n                this.x = this.x - this.vel\r\n                break;\r\n            case \"UP\":\r\n                debugger\r\n                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)\r\n                this.y = this.y - this.vel\r\n                break;\r\n            case \"DOWN\":\r\n                debugger\r\n                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)\r\n                this.y = this.y + this.vel\r\n                break;\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MoveableObject);\n\n//# sourceURL=webpack:///./src/movable_object.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _movable_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movable_object */ \"./src/movable_object.js\");\n\r\n\r\nclass Player extends _movable_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(){\r\n        super()\r\n        this.x = window.innerWidth / 2\r\n        this.y = window.innerHeight / 2\r\n        this.height = 30\r\n        this.width = 20\r\n        this.color= \"white\"\r\n        this.vel = 10\r\n        this.RIGHT = \"RIGHT\"\r\n        this.LEFT = \"LEFT\"\r\n        this.UP = \"UP\"\r\n        this.DOWN = \"DOWN\"\r\n    }\r\n    draw(ctx){\r\n        ctx.fillStyle = this.color;\r\n        // ctx.rotate(10 * Math.PI / 180)    \r\n        ctx.beginPath()\r\n        ctx.moveTo(this.x, this.y)\r\n        ctx.lineTo(this.x + 10, this.y + 30)\r\n        ctx.lineTo(this.x - 10, this.y + 30)\r\n        ctx.fill()\r\n    }\r\n    rotate(ctx){\r\n        ctx.save();\r\n        ctx.translate(400, 400);\r\n        ctx.rotate(20 * Math.PI / 180);\r\n        this.draw(ctx)\r\n        // ctx.translate(-(20/2), -(30/2));\r\n        ctx.restore\r\n    }\r\n    move(ctx, direction){\r\n        debugger\r\n        switch(direction){\r\n            case \"RIGHT\":\r\n                debugger\r\n                ctx.clearRect(this.x - 10, this.y - 1, this.width, this.height + 2)\r\n                this.x = this.wrap(this.x + this.vel)\r\n                break;\r\n            case \"LEFT\":\r\n                debugger\r\n                ctx.clearRect(this.x - 10, this.y - 1, this.width, this.height + 2)\r\n                this.x = this.x - this.vel\r\n                break;\r\n            case \"UP\":\r\n                debugger\r\n                ctx.clearRect(this.x - 10, this.y - 1, this.width, this.height + 2)\r\n                this.y = this.y - this.vel\r\n                break;\r\n            case \"DOWN\":\r\n                debugger\r\n                ctx.clearRect(this.x - 10, this.y - 1, this.width, this.height + 2)\r\n                this.y = this.y + this.vel\r\n                break;\r\n        }\r\n    }\r\n    bindKeys(ctx){\r\n        document.addEventListener(\"keydown\", e => {\r\n            console.log(e)\r\n            switch (e.key){\r\n            case \"a\":\r\n                this.move(ctx, this.LEFT)\r\n                this.draw(ctx)\r\n                break;\r\n            case \"d\":\r\n                this.move(ctx, this.RIGHT)\r\n                this.draw(ctx)\r\n                break;\r\n            case \"s\":\r\n                this.move(ctx, this.DOWN)\r\n                this.draw(ctx)\r\n                break;\r\n            case \"w\":\r\n                this.move(ctx, this.UP)\r\n                this.draw(ctx)\r\n            }\r\n        })\r\n       \r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });