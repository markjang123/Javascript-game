import MoveableObject from './movable_object'
import Player from './player'
import Laser from './laser'
import Instructions from './instructions'
import Objective from './objective'
import Bullet from './bullet'
import Enemy from './enemy'
class Game {
    constructor(ctx){
        this.ctx = ctx
    }
    draw(){
        this.ctx.clearRect(0, 0, 5000, 5000)
        PLAYER[0].draw(this.ctx)
        // alert(ENEMIES)
        OTHER.forEach(other => other.draw(this.ctx))
        ENEMIES.forEach(enemy => enemy.draw(this.ctx))
        IMMOVABLE.forEach(object => object.draw(this.ctx))
        BULLETS.forEach(bullet => bullet.draw(this.ctx))
    }
    start(level){
        const instructions = new Instructions(`Level ${level}`, "30px Arial")
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
        const obj = new Objective()
        obj.draw(this.ctx)
        IMMOVABLE.push(obj)
        const player = new Player(1, 1, 1, 1, 1, 1, this.ctx)
        PLAYER.push(player)
        player.draw(this.ctx)
        const enemy1 = new Enemy(player.x - 30, player.y - 350, 50, 50, "red", 20, this.ctx)
       ENEMIES.push(enemy1)
        const enemy2 = new Enemy(player.x - 300, player.y - 200, 50, 50, "red", 20, this.ctx)
       ENEMIES.push(enemy2)
       this.drawEnemies()
    }
    gameOver(){
        debugger
        // const gameOverCanvas = document.getElementById("game-over-canvas")
        // const gameOverCtx = gameOverCanvas.getContext("2d")
        // const canvas = document.getElementById("game-canvas")
        // canvas.remove()
        const gameOver = document.querySelector(".game-over-container")
        gameOver.style.display = "block"
        // ENEMIES.splice(0, ENEMIES.length)
        // LASERS.splice(0, LASERS.length)
        // PLAYER.splice(0, PLAYER.length)
        // IMMOVABLE.splice(0, IMMOVABLE.length)
        // OTHER.splice(0, OTHER.length)
        // BULLETS.splice(0, BULLETS.length)
        // this.ctx.clearRect(0, 0, 5000, 5000)
        // const instructions = new Instructions("30px Arial")
        // OTHER.push(instructions)
        // instructions.draw(this.ctx)
        // ctx.fillStyle = "white"
        // ctx.font = "30px Arial"
        // ctx.fillText("GAME OVER", 100, 100)

        console.log("GAME OVER")
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
export const IMMOVABLE = []
export const OTHER = []
export const BULLETS = []
export default Game