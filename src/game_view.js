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
    objective: {pos: [800, 150]}
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
        alert(game.bullets.map((bullets, idx) => idx + 1))
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
      case "v":
        game.enemies.forEach(enemy => enemy.fire())
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
    document.addEventListener("mousedown", (e) => {
      document.addEventListener("mousemove", handleMouseMove)
      fireInterval = setInterval(() => {
      let angle = Math.atan2(clientY - player.pos[1], clientX - (player.pos[0] + 485))
      let velocity = [Math.cos(angle), Math.sin(angle)]
        player.fire(velocity)
      }, 150);
    })
    // document.addEventListener("keydown", (e) => {
    //   if (e.code === "Space") {
    //     e.preventDefault()
    //     document.addEventListener("mousemove", handleMouseMove)
    //     fireInterval = setInterval(() => {
    //     let angle = Math.atan2(clientY - player.pos[1], clientX - (player.pos[0] + 485))
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
      //   document.removeEventListener("mousemove", handleMouseMove)
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
      if (LEVELS[this.level] === undefined){
        alert("YOU WIN!")
      }
      this.game.addEnemies(LEVELS[this.level].enemies)
      this.game.addObjectives(LEVELS[this.level].objective.pos)
      this.player.pos = [400, 900]
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
