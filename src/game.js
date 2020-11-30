import MoveableObject from './movable_object'
import Player from './player'
import Laser from './laser'
import Instructions from './instructions'
import Objective from './objective'
import Bullet from './bullet'
import Enemy from './enemy'
import {INTERVALS} from './enemy'
import {GAME, LEVELS} from './index'
class Game {
    constructor(ctx, level){
        this.ctx = ctx
        CTX.push(this.ctx)
        this.level = level.level
        this.enemies = level.enemies
    }
    draw(){
        this.ctx.clearRect(0, 0, 5000, 5000)
        PLAYER.forEach(player => player.draw(this.ctx))
        // alert(ENEMIES)
        OTHER.forEach(other => other.draw(this.ctx))
        ENEMIES.forEach(enemy => enemy.draw(this.ctx))
        OBJECTIVE.forEach(object => object.draw(this.ctx))
        BULLETS.forEach(bullet => bullet.draw(this.ctx))
    }
   
    start(){
        const obj = new Objective()
        obj.draw(this.ctx)
        OBJECTIVE.push(obj)
        const player = new Player(1, 1, 1, 1, 1, 1, this.ctx)
        debugger
        PLAYER.push(player)
        player.draw(this.ctx)
        const handleClick = () => {player.shoot()}
        FUNCTIONS.push(handleClick)
        document.addEventListener("click", handleClick)
        const instructions = new Instructions(`Level ${this.level}`, "30px Arial")
        instructions.draw(this.ctx)
        OTHER.push(instructions)
        // const bullet = new Bullet(300, 100)
        // BULLETS.push(bullet)
        // bullet.draw(this.ctx)
        // window.setInterval(() => {
        //     bullet.move(this.ctx, "DOWN")
        // }, 1000 / 60)
        
        // bullet.startMoving(this.ctx)
        // const repeat = () => {
        //     window.requestAnimationFrame(() => {
        //         bullet.move(this.ctx, "DOWN")
        //         bullet.draw(this.ctx)
        //         repeat()
        //     })
        // }
        // repeat()

        this.enemies.forEach(enemy => {
            let newEnemy = new Enemy(enemy.x, enemy.y, enemy.height, enemy.width)
            ENEMIES.push(newEnemy)
        })
       this.drawEnemies()
    }
    victory(){
        // console.log(LISTENERS)
        // this.ctx.clearRect(0, 0, 5000, 5000)
        const canvas = document.getElementById("game-canvas")
        document.removeEventListener("click", FUNCTIONS[0], {useCapture: false, passive: false, once: false})
        INTERVALS.forEach(interval => clearInterval(interval))
        // LISTENERS.forEach(listener => removeEventListener(listener.type, listener))
        LASERS.forEach(laser => laser.isMoving = false)
        OTHER.length = 0
        FUNCTIONS.length = 0
        GAME.length = 0 
        ENEMIES.length = 0
        BULLETS.length = 0
        LASERS.length = 0
        PLAYER.length = 0
        this.draw()
        const levelComplete = document.querySelector(".level-complete")
        levelComplete.style.display = "block"
        setTimeout(() => {
            levelComplete.style.display = "none"
            // let canvas = document.getElementById("game-canvas")
            // canvas.remove()
            // let nextCanvas = document.createElement("CANVAS")
            // nextCanvas.setAttribute("id", "game-canvas")
            // nextCanvas.setAttribute("class", "next-game-canvas")
            // nextCanvas.setAttribute("height", "300")
            // nextCanvas.setAttribute("width", "300")
            // let ctx = nextCanvas.getContext("2d")
            const nextLevel = LEVELS.find(obj => obj.level === this.level + 1)
            if (nextLevel){
                const nextGame = new Game(this.ctx, nextLevel)
                GAME.push(nextGame)
                nextGame.start()
            } else {
                alert("You Beat All the Levels!")
            }
        }, 1500)
        // this.start(2)
    }
    gameOver(){
        // const gameOverCanvas = document.getElementById("game-over-canvas")
        // const gameOverCtx = gameOverCanvas.getContext("2d")
        // const canvas = document.getElementById("game-canvas")
        // canvas.remove()
        const gameOver = document.querySelector(".game-over-container")
        gameOver.style.display = "block"
        // ENEMIES.splice(0, ENEMIES.length)
        // LASERS.splice(0, LASERS.length)
        // PLAYER.splice(0, PLAYER.length)
        // OBJECTIVE.splice(0, OBJECTIVE.length)
        // OTHER.splice(0, OTHER.length)
        // BULLETS.splice(0, BULLETS.length)
        // this.ctx.clearRect(0, 0, 5000, 5000)
        // const instructions = new Instructions("30px Arial")
        // OTHER.push(instructions)
        // instructions.draw(this.ctx)
        // ctx.fillStyle = "white"
        // ctx.font = "30px Arial"
        // ctx.fillText("GAME OVER", 100, 100)

    }
    drawEnemies(){
        ENEMIES.forEach(enemy => {
            enemy.draw(this.ctx)
        })
    }
    moveEnemies(){
        ENEMIES.forEach(enemy => enemy.startMoving(this.ctx))
    }
}

export const ENEMIES = []
export const LASERS = []
export const PLAYER = []
export const OBJECTIVE = []
export const OTHER = []
export const BULLETS = []
export const LISTENERS = []
export const FUNCTIONS = []
export const CTX = []
export default Game