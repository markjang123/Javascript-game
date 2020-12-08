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

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _laser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./laser */ \"./src/laser.js\");\n\r\n\r\n\r\n\r\nclass Bullet extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(options){\r\n        options = options || {};\r\n        options.radius = 10;\r\n        super(options)\r\n        this.speed = 2\r\n    }\r\n    collideWith(otherObject) {\r\n      if (otherObject instanceof _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\r\n        if (otherObject.invincible) return false;\r\n        this.remove()\r\n        otherObject.blink()\r\n        otherObject.hitPoints -= 1\r\n        if (otherObject.hitPoints <= 0){\r\n          otherObject.remove()\r\n          this.game.gameOver()\r\n        }\r\n        return true;\r\n      } else if (otherObject instanceof _laser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\r\n        if (!this.invincible){\r\n          this.remove();\r\n          otherObject.remove();\r\n          return true;\r\n        }\r\n      }\r\n      return false;\r\n    };\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n/* harmony import */ var _laser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./laser */ \"./src/laser.js\");\n\r\n\r\n\r\n\r\n\r\nclass Enemy extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(options) {\r\n      options.vel = options.vel || [1, 0];\r\n      options.color = options.color || \"red\";\r\n      options.game = options.game\r\n      super(options)\r\n      this.isRemovable = false;\r\n      this.hitPoints = 10\r\n      this.isTracking = false\r\n      this.fireInterval\r\n      this.trackInterval\r\n      this.toggleTrackingInterval\r\n      this.startFiring()\r\n      if (this.type === \"standard\"){\r\n        this.toggleTracking()\r\n      }\r\n    }\r\n    toggleTracking(){\r\n      this.toggleTrackingInterval = setInterval(() => {\r\n        if (!this.isTracking) {\r\n          this.startTracking()\r\n        } else {\r\n          this.isTracking = false\r\n          clearInterval(this.trackInterval)\r\n        }\r\n      }, 2500)\r\n    }\r\n    startFiring(){\r\n        let fireRate\r\n        if (this.type === \"standard\"){\r\n          fireRate = 250\r\n        } else if (this.type === \"turret\"){\r\n          fireRate = 500\r\n        }\r\n        this.fireInterval = setInterval(() => {\r\n            let pattern\r\n            this.type === \"turret\" ? pattern = \"surround\" : pattern = \"spray\"\r\n            let angle = Math.atan2(this.game.players[0].pos[1] - this.pos[1], (this.game.players[0].pos[0] + 485) - (this.pos[0] + 485))\r\n            let velocity = [Math.cos(angle), Math.sin(angle)]\r\n            this.fireBullet(velocity, pattern)   \r\n        }, fireRate)\r\n    }\r\n    startTracking(){\r\n        this.isTracking = true\r\n        this.trackInterval = setInterval(() => {\r\n            let angle = Math.atan2(this.game.players[0].pos[1] - this.pos[1], (this.game.players[0].pos[0] + 485) - (this.pos[0] + 485))\r\n            let velocity = [Math.cos(angle), Math.sin(angle)]\r\n            this.vel = velocity\r\n        }, 500)\r\n    }\r\n    blink(){\r\n      let originalColor = this.color\r\n      this.color = \"white\"\r\n      setTimeout(() => this.color = originalColor, 100)\r\n    }\r\n    remove() {\r\n        this.game.remove(this);\r\n        clearInterval(this.fireInterval)\r\n        clearInterval(this.trackInterval)\r\n        clearInterval(this.toggleTrackingInterval)\r\n      };\r\n    collideWith(otherObject) {\r\n        if (otherObject instanceof _laser__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\r\n            otherObject.remove()\r\n            this.hitPoints -= 1\r\n            this.blink()\r\n            if (this.hitPoints <= 0) {\r\n                this.remove();\r\n                otherObject.remove();\r\n                return true;\r\n            }\r\n        } \r\n        return false;\r\n      };\r\n    fireBullet(velocity, pattern) {\r\n      switch(pattern){\r\n        case \"spray\":\r\n        const relVel = _util__WEBPACK_IMPORTED_MODULE_1__[\"scale\"](\r\n          _util__WEBPACK_IMPORTED_MODULE_1__[\"dir\"](velocity),\r\n          2\r\n        );\r\n      \r\n        const bulletVel = [\r\n          relVel[0] + this.vel[0], relVel[1] + this.vel[1]\r\n        ];\r\n      \r\n        const bullet = new _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\r\n          // pos: [this.pos[0] + this.radius, this.pos[1]],\r\n          pos: this.pos,\r\n          vel: bulletVel,\r\n          color: \"purple\",\r\n          game: this.game\r\n        });  \r\n        this.game.add(bullet);\r\n        break;\r\n        case \"surround\":\r\n          const bullet1 = new _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\r\n            pos: this.pos,\r\n            vel: [5, 0],\r\n            color: \"#780000\",\r\n            invincible: true,\r\n            game: this.game\r\n          });  \r\n          const bullet2 = new _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\r\n            pos: this.pos,\r\n            vel: [-5, 0],\r\n            color: \"#780000\",\r\n            invincible: true,\r\n            game: this.game\r\n          });  \r\n          const bullet3 = new _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\r\n            pos: this.pos,\r\n            vel: [0, 5],\r\n            color: \"#780000\",\r\n            invincible: true,\r\n            game: this.game\r\n          });  \r\n          const bullet4 = new _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\r\n            pos: this.pos,\r\n            vel: [0, -5],\r\n            color: \"#780000\",\r\n            invincible: true,\r\n            game: this.game\r\n          });  \r\n          this.game.add(bullet1);\r\n          this.game.add(bullet2);\r\n          this.game.add(bullet3);\r\n          this.game.add(bullet4);\r\n          //do stuff\r\n        break;\r\n      }\r\n    }\r\n\r\n    move(timeDelta) {\r\n      const velocityScale = timeDelta / (1000/60),\r\n          offsetX = this.vel[0] * velocityScale,\r\n          offsetY = this.vel[1] * velocityScale;\r\n    \r\n      this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\r\n    \r\n      let angle = Math.atan2(this.game.players[0].pos[1] - this.pos[1], (this.game.players[0].pos[0] + 485) - (this.pos[0] + 485))\r\n      let velocity = [Math.cos(angle), Math.sin(angle)]\r\n      if (this.game.isOutOfBounds(this.pos)) {\r\n        if (this.isRemovable) {\r\n          this.remove();\r\n        } else {\r\n          this.vel = velocity\r\n        }\r\n      }\r\n    };\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/enemy.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _objective__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objective */ \"./src/objective.js\");\n/* harmony import */ var _laser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./laser */ \"./src/laser.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst BG_COLOR = \"#000026\";\r\nconst DIM_X = 950;\r\nconst DIM_Y = 950;\r\nclass Game {\r\n    constructor(enemies, level){\r\n        this.lasers = [];\r\n        this.bullets = [];\r\n        this.players = [];\r\n        this.enemies = []\r\n        this.objectives = []\r\n        this.addEnemies(enemies);\r\n        this.addObjectives([425, 0]);\r\n        this.level = level\r\n    }\r\n    add(object) {\r\n      if (object instanceof _laser__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) {\r\n        this.lasers.push(object);\r\n      } else if (object instanceof _bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\r\n        this.bullets.push(object);\r\n      } else if (object instanceof _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\r\n        this.players.push(object);\r\n      } else if (object instanceof _enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n        this.enemies.push(object)\r\n      } else if (object instanceof _objective__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\r\n        this.objectives.push(object)\r\n      } else {\r\n        throw new Error(\"unknown type of object\");\r\n      }\r\n    };\r\n    bindKeyHandlers() {\r\n      document.addEventListener(\"keydown\", e => {\r\n        if (e.key === \"v\"){\r\n          this.enemies.forEach(enemy => enemy.fireBullet())\r\n        }\r\n      })\r\n    }\r\n    addObjectives(pos) {\r\n        this.add(new _objective__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({ game: this, pos: pos }));\r\n    };\r\n    addEnemies(enemies) {\r\n      let turretPos = [[100, 100], [300, 400], [700, 700], [200, 800], [500, 350]]\r\n      for (let i = 0; i < enemies.length; i++) {\r\n        let enemy = enemies[i]\r\n        if (enemy.type === \"turret\"){\r\n          let sampleIdx = Math.floor(Math.random() * turretPos.length)\r\n          enemy[\"pos\"] = turretPos[sampleIdx]\r\n          turretPos.splice(sampleIdx, 1)\r\n        } else {\r\n          enemy[\"pos\"] = this.randomHorizontalPosition()\r\n        }\r\n        enemy[\"game\"] = this\r\n        this.add(new _enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"](enemy));\r\n      }\r\n    };\r\n    gameOver(){\r\n      let gameOver = document.querySelector(\".game-over\")\r\n      gameOver.style.display = \"inline-block\"\r\n      let gameCanvas = document.querySelector(`#game-canvas`)\r\n      gameCanvas.style.filter = \"blur(3px)\"\r\n      gameCanvas.style.opacity = \"0.8\"\r\n    }\r\n    victory(){\r\n      if (this.level === Object.keys(_game_view__WEBPACK_IMPORTED_MODULE_5__[\"LEVELS\"]).length){\r\n        let victoryScreen = document.querySelector(\".victory-screen\")\r\n        victoryScreen.style.display = \"inline-block\"\r\n        let gameCanvas = document.querySelector(`#game-canvas`)\r\n        gameCanvas.style.filter = \"blur(3px)\"\r\n        gameCanvas.style.opacity = \"0.8\"\r\n        this.players[0].invincible = true\r\n        return\r\n      }\r\n      for(let i = this.enemies.length - 1; i >= 0; i--){\r\n        this.enemies[i].remove()\r\n      }\r\n      this.players[0].invincible = true\r\n      // this.lasers.length = 0\r\n      // GAMES.splice(0, 1)\r\n      let nextLevel = document.querySelector(\".next-level\")\r\n      nextLevel.style.display = \"inline-block\"\r\n      let gameCanvas = document.querySelector(`#game-canvas`)\r\n      gameCanvas.style.filter = \"blur(3px)\"\r\n      gameCanvas.style.opacity = \"0.8\"\r\n      // gameCanvas.remove()\r\n    }\r\n    \r\n    addPlayer() {\r\n      const player = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\r\n        pos: [400, 400],\r\n        game: this\r\n      \r\n      });\r\n    \r\n      this.add(player);\r\n    \r\n      return player;\r\n    };\r\n    allObjects() {\r\n      return [].concat(this.players, this.lasers, this.bullets, this.enemies, this.objectives);\r\n    };\r\n    \r\n    checkCollisions() {\r\n      const allObjects = this.allObjects();\r\n      for (let i = 0; i < allObjects.length; i++) {\r\n        for (let j = 0; j < allObjects.length; j++) {\r\n          const obj1 = allObjects[i];\r\n          const obj2 = allObjects[j];\r\n    \r\n          if (obj1.isCollidedWith(obj2)) {\r\n            const collision = obj1.collideWith(obj2);\r\n            if (collision) return;\r\n          }\r\n        }\r\n      }\r\n    };\r\n    \r\n    draw(ctx) {\r\n      ctx.clearRect(0, 0, DIM_X, DIM_Y);\r\n      ctx.fillStyle = BG_COLOR;\r\n      ctx.fillRect(0, 0, DIM_X, DIM_Y);\r\n    \r\n      this.allObjects().forEach(function(object) {\r\n        object.draw(ctx);\r\n      });\r\n    };\r\n    \r\n    isOutOfBounds(pos) {\r\n      return (pos[0] < 0) || (pos[1] < 0) ||\r\n        (pos[0] > DIM_X) || (pos[1] > DIM_Y);\r\n    };\r\n    \r\n    moveObjects(delta) {\r\n      this.allObjects().forEach(function(object) {\r\n        object.move(delta);\r\n      });\r\n    };\r\n    \r\n    randomPosition() {\r\n      return [\r\n        DIM_X * Math.random(),\r\n        DIM_Y * Math.random()\r\n      ];\r\n    };\r\n    randomHorizontalPosition() {\r\n      let verticalPos = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450]\r\n      return [\r\n        950 * Math.random(),\r\n        verticalPos[Math.floor(Math.random() * verticalPos.length)]\r\n      ];\r\n    };\r\n    \r\n    remove(object) {\r\n      if (object instanceof _bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\r\n        this.bullets.splice(this.bullets.indexOf(object), 1);\r\n      } else if (object instanceof _laser__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) {\r\n        this.lasers.splice(this.lasers.indexOf(object), 1);\r\n      } else if (object instanceof _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\r\n        this.players.splice(this.players.indexOf(object), 1);\r\n      } else if (object instanceof _enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n        this.enemies.splice(this.enemies.indexOf(object), 1)\r\n      } else if (object instanceof _objective__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\r\n        this.objectives.splice(this.objectives.indexOf(object), 1)\r\n      } else {\r\n        throw new Error(\"unknown type of object\");\r\n      }\r\n    };\r\n    \r\n    step(delta) {\r\n      this.moveObjects(delta);\r\n      this.checkCollisions();\r\n    };\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: LEVELS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LEVELS\", function() { return LEVELS; });\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ \"./src/enemy.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\n\r\nconst ENEMY_TYPES = {\r\n  standard: {\r\n    type: \"standard\",\r\n    radius: 25,\r\n    vel: [1, 0],\r\n    color: \"red\"\r\n  },\r\n  turret: {\r\n    type: \"turret\",\r\n    radius: 15,\r\n    vel: [0, 0],\r\n    color: \"gray\"\r\n  }\r\n}\r\nconst {standard, turret} = ENEMY_TYPES\r\nconst LEVELS = {\r\n  1: {\r\n    enemies: [standard, standard, standard],\r\n    objective: {pos: [425, 0]}\r\n  },\r\n  2: {\r\n    enemies: [standard, turret, standard, turret],\r\n    objective: {pos: [400, 400]}\r\n  }, \r\n  3: {\r\n    enemies: [standard, turret, standard, turret, turret, turret],\r\n    objective: {pos: [50, 425]}\r\n  }\r\n}\r\nclass GameView {\r\n    constructor(game, ctx){\r\n        this.ctx = ctx;\r\n        this.game = game;\r\n        this.player = this.game.addPlayer();\r\n        this.level = 1\r\n    }\r\n    bindKeyHandlers() {\r\n    const player = this.player;\r\n    const game = this.game\r\n    \r\n    document.addEventListener(\"keydown\", (e) => {\r\n    switch(e.key){\r\n      case \"g\":\r\n        alert(game.bullets.map((bullets, idx) => idx + 1))\r\n        break;\r\n      case \"w\":\r\n        player.vel = [0, -5]\r\n        break;\r\n      case \"a\":\r\n        player.vel = [-5, 0]\r\n        break;\r\n      case \"s\":\r\n        player.vel = [0, 5]\r\n        break;\r\n      case \"d\":\r\n        player.vel = [5, 0]\r\n        break;\r\n      case \"v\":\r\n        game.enemies.forEach(enemy => enemy.fireBullet())\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n    })\r\n    let fireInterval\r\n    let mouseMoveListener\r\n    let clientY\r\n    let clientX\r\n    // document.addEventListener(\"click\", (e) => {\r\n    //   let angle = Math.atan2(e.clientY - player.pos[1], e.clientX - player.pos[0])\r\n    //   let velocity = [Math.cos(angle), Math.sin(angle)]\r\n    //   player.fireBullet(velocity)\r\n    // })\r\n    let handleMouseMove = function(e){\r\n      clientX = e.clientX\r\n      clientY = e.clientY\r\n    }\r\n    document.addEventListener(\"mousedown\", (e) => {\r\n      document.addEventListener(\"mousemove\", handleMouseMove)\r\n      fireInterval = setInterval(() => {\r\n      let angle = Math.atan2(clientY - player.pos[1], clientX - (player.pos[0] + 485))\r\n      let velocity = [Math.cos(angle), Math.sin(angle)]\r\n        player.fireBullet(velocity)\r\n      }, 150);\r\n    })\r\n    document.addEventListener(\"mouseup\", () => {\r\n      clearInterval(fireInterval)\r\n      document.removeEventListener(\"mousemove\", handleMouseMove)\r\n    })\r\n    document.addEventListener(\"keyup\", () => player.vel = [0, 0])\r\n    };\r\n    start() {\r\n      this.bindKeyHandlers();\r\n      this.lastTime = 0;\r\n      requestAnimationFrame(this.animate.bind(this));\r\n    };\r\n    nextLevel(level) {\r\n      this.level = level\r\n      this.game.level = level\r\n      if (LEVELS[this.level] === undefined){\r\n        alert(\"YOU WIN!\")\r\n      }\r\n      this.game.addEnemies(LEVELS[this.level].enemies)\r\n      this.game.addObjectives(LEVELS[this.level].objective.pos)\r\n      this.player.pos = [400, 900]\r\n      this.player.hitPoints = 10\r\n      this.player.invincible = false\r\n      this.game.bullets.length = 0\r\n    };\r\n    animate(time) {\r\n      const timeDelta = time - this.lastTime;\r\n    \r\n      this.game.step(timeDelta);\r\n      this.game.draw(this.ctx);\r\n      this.lastTime = time;\r\n      this.requestId = requestAnimationFrame(this.animate.bind(this));\r\n    };\r\n   \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\r\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: GAMES, GAMEVIEWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAMES\", function() { return GAMES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAMEVIEWS\", function() { return GAMEVIEWS; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\r\n\r\nconst GAMES = []\r\nconst GAMEVIEWS = []\r\nconst gameCanvas = document.getElementById(\"game-canvas\");\r\nconst ctx = gameCanvas.getContext(\"2d\");\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([{\r\n    type: \"standard\",\r\n    radius: 25,\r\n    vel: [1, 0],\r\n    color: \"red\"\r\n  }], 1);\r\n  GAMES.push(game)\r\n  const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](GAMES[0], ctx)\r\n  GAMEVIEWS.push(gameView)\r\n  gameView.start()\r\n});\r\nlet nextLevelButton = document.querySelector(\"#next-level-button\")\r\nnextLevelButton.addEventListener(\"click\", () => {\r\n  // canvasEl.style.display = \"inline-block\"\r\n  let nextLevel = document.querySelector(\".next-level\")\r\n  nextLevel.style.display = \"none\"\r\n  gameCanvas.style.filter = \"none\"\r\n  gameCanvas.style.opacity = \"1\"\r\n  // const game2 = new Game(5, 2)\r\n  GAMEVIEWS[0].nextLevel(GAMEVIEWS[0].level + 1)\r\n  // GAMEVIEWS[0].player = game2.addPlayer()\r\n  // cancelAnimationFrame(GAMEVIEWS[0].requestId)\r\n  // GAMEVIEWS[0].start()\r\n  // GAMES[0].startNextLevel()\r\n  // let canvas2 = document.querySelector(\"#game-canvas-2\")\r\n  // canvas2.width = Game.DIM_X;\r\n  // canvas2.height = Game.DIM_Y;\r\n  // canvas2.style.display = \"inline-block\"\r\n  // const ctx2 = gameCanvas.getContext(\"2d\")\r\n  // GAMES.push(game2)\r\n  // new GameView(game2, ctx2).start()\r\n})\r\nlet startOverButtons = document.getElementsByClassName(\"start-over-button\")\r\nfor(let i = 0; i <= startOverButtons.length - 1; i++){\r\n  startOverButtons[i].addEventListener(\"click\", () => {\r\n    location.reload()  \r\n  })\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/laser.js":
/*!**********************!*\
  !*** ./src/laser.js ***!
  \**********************/
/*! exports provided: LASER_SPEED, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LASER_SPEED\", function() { return LASER_SPEED; });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\r\nconst LASER_SPEED = 15\r\nclass Laser extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(options){\r\n        options.radius = 4;\r\n        super(options)\r\n        this.isRemovable = true;\r\n    }\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Laser);\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/laser.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\r\n\r\nclass MovingObject{\r\n    constructor(options){\r\n        this.isRemovable = true;\r\n        this.pos = options.pos;\r\n        this.vel = options.vel;\r\n        this.radius = options.radius;\r\n        this.color = options.color;\r\n        this.game = options.game;\r\n        if (options.type) this.type = options.type\r\n        if (options.invincible) this.invincible = options.invincible\r\n    }\r\n    collideWith(otherObject) {\r\n    };\r\n    draw(ctx) {\r\n      ctx.fillStyle = this.color;\r\n      ctx.shadowColor = \"red\";\r\n      ctx.shadowBlur = 10;\r\n      ctx.beginPath();\r\n      ctx.arc( //x: this.pos[0], y: this.pos[1]\r\n        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\r\n      );\r\n      ctx.fill();\r\n    };\r\n    isCollidedWith(otherObject) {\r\n      const centerDist = _util__WEBPACK_IMPORTED_MODULE_0__[\"dist\"](this.pos, otherObject.pos);\r\n      return centerDist < (this.radius + otherObject.radius);\r\n    };\r\n    \r\n    move(timeDelta) {\r\n  \r\n      const velocityScale = timeDelta / (1000 / 60),\r\n          offsetX = this.vel[0] * velocityScale,\r\n          offsetY = this.vel[1] * velocityScale;\r\n    \r\n      this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\r\n    \r\n      if (this.game.isOutOfBounds(this.pos)) {\r\n        if (this.isRemovable) {\r\n          this.remove();\r\n        } else {\r\n          this.pos = [this.pos[0] - offsetX, this.pos[1] - offsetY];\r\n        }\r\n      }\r\n    };\r\n    \r\n    remove() {\r\n      this.game.remove(this);\r\n    };\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/objective.js":
/*!**************************!*\
  !*** ./src/objective.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _laser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./laser */ \"./src/laser.js\");\n\r\n\r\n\r\n\r\nclass Objective extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(options){\r\n      options.radius = Objective.RADIUS;\r\n      options.vel = options.vel || [0, 0];\r\n      options.color = options.color || \"#252525\";\r\n      options.game = options.game\r\n      super(options)\r\n        this.isRemovable = false;\r\n        this.hitPoints = 20\r\n        this.radius = 25\r\n        this.fireInterval\r\n      //   this.startFiring()\r\n    }\r\n    \r\n    startFiring(){\r\n        this.fireInterval = setInterval(() => this.fireBullet(), 500)\r\n    }\r\n    blink(){\r\n        let originalColor = this.color\r\n        this.color = \"white\"\r\n        setTimeout(() => this.color = originalColor, 100)\r\n    }\r\n    remove() {\r\n        this.game.remove(this);\r\n        // clearInterval(this.fireInterval)\r\n      };\r\n    collideWith(otherObject) {\r\n        if (otherObject instanceof _laser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\r\n            otherObject.remove()\r\n            this.hitPoints -= 1\r\n            this.blink()\r\n            if (this.hitPoints <= 0) {\r\n                this.remove();\r\n                otherObject.remove();\r\n                this.game.victory()\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n      };\r\n      fireBullet() {\r\n       \r\n      \r\n        const relVel = _util__WEBPACK_IMPORTED_MODULE_1__[\"scale\"](\r\n          _util__WEBPACK_IMPORTED_MODULE_1__[\"dir\"](this.vel),\r\n          Bullet.SPEED\r\n        );\r\n      \r\n        const bulletVel = [\r\n          relVel[0] + this.vel[0], relVel[1] + this.vel[1]\r\n        ];\r\n      \r\n        const asteroid = new Asteroid({\r\n          pos: [this.pos[0] + this.radius, this.pos[1]],\r\n          vel: [0, Asteroid.SPEED],\r\n          color: this.color,\r\n          game: this.game\r\n        });\r\n        const asteroid2 = new Asteroid({\r\n          pos: [this.pos[0] - this.radius, this.pos[1]],\r\n          vel: [0, Asteroid.SPEED],\r\n          color: this.color,\r\n          game: this.game\r\n        });\r\n      \r\n        this.game.add(asteroid);\r\n        this.game.add(asteroid2);\r\n      };\r\n      move(timeDelta) {\r\n        const velocityScale = timeDelta / (1000 / 60),\r\n            offsetX = this.vel[0] * velocityScale,\r\n            offsetY = this.vel[1] * velocityScale;\r\n      \r\n        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\r\n      \r\n        if (this.game.isOutOfBounds(this.pos)) {\r\n          if (this.isRemovable) {\r\n            this.remove();\r\n          } else {\r\n            this.vel = [-this.vel[0], 0]\r\n          }\r\n        }\r\n      };\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Objective);\n\n//# sourceURL=webpack:///./src/objective.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _laser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./laser */ \"./src/laser.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\r\n\r\n\r\n\r\n\r\nclass Player extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(options){\r\n        options.vel = options.vel || [0, 0];\r\n        options.color = options.color || \"white\";\r\n        super(options)\r\n        this.radius = 15\r\n        this.isRemovable = false;\r\n        this.hitPoints = 10\r\n        this.color = \"white\"\r\n        this.blink = this.blink.bind(this)\r\n        this.invincible = false\r\n\r\n    }\r\n    blink(){\r\n      let originalColor = this.color\r\n      this.color = \"red\"\r\n      setTimeout(() => this.color = originalColor, 100)\r\n    }\r\n    fireBullet(velocity) {\r\n      const relVel = _util__WEBPACK_IMPORTED_MODULE_2__[\"scale\"](\r\n        _util__WEBPACK_IMPORTED_MODULE_2__[\"dir\"](velocity),\r\n        15\r\n      );\r\n    \r\n      const laserVel = [\r\n        relVel[0] + this.vel[0], relVel[1] + this.vel[1]\r\n      ];\r\n    \r\n      const laser = new _laser__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\r\n        pos: this.pos,\r\n        vel: laserVel,\r\n        color: \"yellow\",\r\n        game: this.game\r\n      });\r\n    \r\n      this.game.add(laser);\r\n    };\r\n    \r\n}\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: norm, dir, dist, randomVec, scale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"norm\", function() { return norm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dir\", function() { return dir; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dist\", function() { return dist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomVec\", function() { return randomVec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scale\", function() { return scale; });\n\r\n     const norm = function norm(vec) {\r\n      return dist([0, 0], vec);\r\n    }\r\n     const dir = function dir(vec){\r\n      const n = norm(vec);\r\n      return scale(vec, 1 / n);\r\n    }\r\n     const dist = function dist(pos1, pos2) {\r\n      return Math.sqrt(\r\n        Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\r\n      );\r\n    }\r\n     const randomVec = function randomVec(length){\r\n      const deg = 2 * Math.PI * Math.random();\r\n      return scale([Math.sin(deg), Math.cos(deg)], length);\r\n    }\r\n     const scale = function scale(vec, m){\r\n      return [vec[0] * m, vec[1] * m];\r\n    }\r\n    \r\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });