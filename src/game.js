import Enemy from "./enemy";
import Bullet from "./bullet";
import Player from "./player";
import Objective from "./objective"
import Laser from "./laser"
import {LEVELS} from './game_view'

const BG_COLOR = "#000026";
const DIM_X = 950;
const DIM_Y = 950;
class Game {
    constructor(enemies, level){
        this.lasers = [];
        this.bullets = [];
        this.players = [];
        this.enemies = []
        this.objectives = []
        this.addEnemies(enemies);
        this.addObjectives([425, 0]);
        this.level = level
    }
    add(object) {
      if (object instanceof Laser) {
        this.lasers.push(object);
      } else if (object instanceof Bullet) {
        this.bullets.push(object);
      } else if (object instanceof Player) {
        this.players.push(object);
      } else if (object instanceof Enemy) {
        this.enemies.push(object)
      } else if (object instanceof Objective) {
        this.objectives.push(object)
      } else {
        throw new Error("unknown type of object");
      }
    };
    bindKeyHandlers() {
      document.addEventListener("keydown", e => {
        if (e.key === "v"){
          this.enemies.forEach(enemy => enemy.fireBullet())
        }
      })
    }
    addObjectives(pos) {
        this.add(new Objective({ game: this, pos: pos }));
    };
    addEnemies(enemies) {
      let turretPos = [[100, 100], [300, 400], [700, 700], [200, 800], [500, 350]]
      for (let i = 0; i < enemies.length; i++) {
        let enemy = enemies[i]
        if (enemy.type === "turret"){
          let sampleIdx = Math.floor(Math.random() * turretPos.length)
          enemy["pos"] = turretPos[sampleIdx]
          turretPos.splice(sampleIdx, 1)
        } else {
          enemy["pos"] = this.randomHorizontalPosition()
        }
        enemy["game"] = this
        this.add(new Enemy(enemy));
      }
    };
    gameOver(){
      let gameOver = document.querySelector(".game-over")
      gameOver.style.display = "inline-block"
      let gameCanvas = document.querySelector(`#game-canvas`)
      gameCanvas.style.filter = "blur(3px)"
      gameCanvas.style.opacity = "0.8"
    }
    victory(){
      if (this.level === Object.keys(LEVELS).length){
        let victoryScreen = document.querySelector(".victory-screen")
        victoryScreen.style.display = "inline-block"
        let gameCanvas = document.querySelector(`#game-canvas`)
        gameCanvas.style.filter = "blur(3px)"
        gameCanvas.style.opacity = "0.8"
        this.players[0].invincible = true
        return
      }
      for(let i = this.enemies.length - 1; i >= 0; i--){
        this.enemies[i].remove()
      }
      this.players[0].invincible = true
      // this.lasers.length = 0
      // GAMES.splice(0, 1)
      let nextLevel = document.querySelector(".next-level")
      nextLevel.style.display = "inline-block"
      let gameCanvas = document.querySelector(`#game-canvas`)
      gameCanvas.style.filter = "blur(3px)"
      gameCanvas.style.opacity = "0.8"
      // gameCanvas.remove()
    }
    
    addPlayer() {
      const player = new Player({
        pos: [400, 400],
        game: this
      
      });
    
      this.add(player);
    
      return player;
    };
    allObjects() {
      return [].concat(this.players, this.lasers, this.bullets, this.enemies, this.objectives);
    };
    
    checkCollisions() {
      const allObjects = this.allObjects();
      for (let i = 0; i < allObjects.length; i++) {
        for (let j = 0; j < allObjects.length; j++) {
          const obj1 = allObjects[i];
          const obj2 = allObjects[j];
    
          if (obj1.isCollidedWith(obj2)) {
            const collision = obj1.collideWith(obj2);
            if (collision) return;
          }
        }
      }
    };
    
    draw(ctx) {
      ctx.clearRect(0, 0, DIM_X, DIM_Y);
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, DIM_X, DIM_Y);
    
      this.allObjects().forEach(function(object) {
        object.draw(ctx);
      });
    };
    
    isOutOfBounds(pos) {
      return (pos[0] < 0) || (pos[1] < 0) ||
        (pos[0] > DIM_X) || (pos[1] > DIM_Y);
    };
    
    moveObjects(delta) {
      this.allObjects().forEach(function(object) {
        object.move(delta);
      });
    };
    
    randomPosition() {
      return [
        DIM_X * Math.random(),
        DIM_Y * Math.random()
      ];
    };
    randomHorizontalPosition() {
      let verticalPos = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450]
      return [
        950 * Math.random(),
        verticalPos[Math.floor(Math.random() * verticalPos.length)]
      ];
    };
    
    remove(object) {
      if (object instanceof Bullet) {
        this.bullets.splice(this.bullets.indexOf(object), 1);
      } else if (object instanceof Laser) {
        this.lasers.splice(this.lasers.indexOf(object), 1);
      } else if (object instanceof Player) {
        this.players.splice(this.players.indexOf(object), 1);
      } else if (object instanceof Enemy) {
        this.enemies.splice(this.enemies.indexOf(object), 1)
      } else if (object instanceof Objective) {
        this.objectives.splice(this.objectives.indexOf(object), 1)
      } else {
        throw new Error("unknown type of object");
      }
    };
    
    step(delta) {
      this.moveObjects(delta);
      this.checkCollisions();
    };
}

export default Game;


