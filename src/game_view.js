import Enemy from "./enemy";
import Game from "./game";
import {GAMES} from './index'
const ENEMY_TYPES = {
  standard: {
    type: "standard",
    radius: 25,
    vel: [1, 0],
    color: "red"
  },
  spinning: {
    type: "spinning",
    radius: 25,
    vel: [1, 0],
    color: "red"
  },
  turret: {
    type: "turret",
    radius: 15,
    vel: [0, 0],
    color: "gray"
  }
}
const {standard, turret, spinning} = ENEMY_TYPES
export const LEVELS = {
  1: {
    enemies: [standard, standard, standard],
    objective: {pos: [425, 0]}
  },
  2: {
    enemies: [standard, turret, standard, spinning],
    objective: {pos: [500, 150]}
  }, 
  3: {
    enemies: [standard, turret, standard, turret, spinning, spinning],
    objective: {pos: [50, 425]}
  }
}
class GameView {
    constructor(game, ctx){
        this.ctx = ctx;
        this.game = game;
        this.player = this.game.addPlayer();
        this.level = 1
    }
    bindKeyHandlers() {
    const player = this.player;
    const game = this.game
    
    document.addEventListener("keydown", (e) => {
    switch(e.key){
      case "g":
        console.log(getXOffset(), getYoffset(), player.pos)
        break;
      case "w":
        player.vel = [0, -5]
        break;
      case "a":
        player.vel = [-5, 0]
        break;
      case "s":
        player.vel = [0, 5]
        break;
      case "d":
        player.vel = [5, 0]
        break;
      default:
        break;
    }
    })
    let fireInterval
    let mouseMoveListener
    let clientY
    let clientX
    // document.addEventListener("click", (e) => {
    //   let angle = Math.atan2(e.clientY - player.pos[1], e.clientX - player.pos[0])
    //   let velocity = [Math.cos(angle), Math.sin(angle)]
    //   player.fire(velocity)
    // })
    let handleMouseMove = function(e){
      clientX = e.clientX
      clientY = e.clientY
    }
    let getXOffset = () => {
      let leftColumn = document.querySelector(".left-column")
      return leftColumn.offsetWidth
    }
    let getYoffset = () => {
      let gameCanvas = document.querySelector("#game-canvas")
      let style = window.getComputedStyle(gameCanvas);
      let marginBottom = style.getPropertyValue('margin-bottom'); 
      let split = marginBottom.split("px")
      let value = parseFloat(split[0])
      return value
    }
    
    document.addEventListener("mousedown", (e) => {
      document.addEventListener("mousemove", handleMouseMove)
      fireInterval = setInterval(() => {
      let angle = Math.atan2(clientY - (player.pos[1] + getYoffset()), clientX - (player.pos[0] + getXOffset()))
      let velocity = [Math.cos(angle), Math.sin(angle)]
        player.fire(velocity)
      }, 150);
    })
    // document.addEventListener("keydown", (e) => {
    //   if (e.code === "Space"){
    //     e.preventDefault()
    //     document.addEventListener("mousemove", handleMouseMove)
    //     fireInterval = setInterval(() => {
    //     let angle = Math.atan2(clientY - (player.pos[1] + getYoffset()), clientX - (player.pos[0] + getXOffset() + 105))
    //     let velocity = [Math.cos(angle), Math.sin(angle)]
    //       player.fire(velocity)
    //     }, 150);
    //   }
    // })
    document.addEventListener("mouseup", () => {
      clearInterval(fireInterval)
      document.removeEventListener("mousemove", handleMouseMove)
    })
    document.addEventListener("keyup", (e) => {
      // console.log(e)
      // if (e.code === "Space"){
      //   clearInterval(fireInterval)
      //   document.removeEventListener("keydown", handleMouseMove)
      // } else {
        player.vel = [0, 0]
      // }
    })
    };
    start() {
      this.bindKeyHandlers();
      this.lastTime = 0;
      requestAnimationFrame(this.animate.bind(this));
    };
    nextLevel(level) {
      this.level = level
      this.game.level = level
      this.game.addEnemies(LEVELS[this.level].enemies)
      this.game.addObjectives(LEVELS[this.level].objective.pos)
      const gameCanvas = document.getElementById("game-canvas")
      this.player.pos = [gameCanvas.width / 2, gameCanvas.height - 50]
      this.player.hitPoints = 10
      this.player.invincible = false
      this.game.bullets.length = 0
    };
    animate(time) {
      const timeDelta = time - this.lastTime;
    
      this.game.step(timeDelta);
      this.game.draw(this.ctx);
      this.lastTime = time;
      this.requestId = requestAnimationFrame(this.animate.bind(this));
    };
   
}

export default GameView
