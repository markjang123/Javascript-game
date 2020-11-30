import MoveableObject from './movable_object'
import {GAME} from './index'
import {ENEMIES, LASERS, PLAYER, OTHER, IMMOVABLE, BULLETS, CTX} from './game'
import Bullet from './bullet'
export const INTERVALS = []
class Enemy extends MoveableObject {
    constructor(x, y, height, width, color, vel){
        super(x, y, height, width, color, vel)
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.color= "red"
        this.vel = this.getRandomInRange(20, 40)
        this.RIGHT = "RIGHT"
        this.LEFT = "LEFT"
        this.UP = "UP"
        this.DOWN = "DOWN"
        this.canFire = true
        const enemyShootInterval = setInterval(() => this.shoot(), 500)
        INTERVALS.push(enemyShootInterval)
        const enemyMoveInterval = setInterval(() => this.move(CTX[0], this.dir), 250)
        INTERVALS.push(enemyMoveInterval)
        this.dir = "LEFT"
        this.bindKeys()
    }
     getRandomInRange(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
    shoot(){
        if (this.canFire){
            // const b = new Bullet(this.x, this.y)
            // BULLETS.push(b)
            // b.draw(this.ctx)
            // requestAnimationFrame(() => b.shoot(this.ctx, "DOWN"))
            // const a = new Bullet(this.x + this.width, this.y)
            // BULLETS.push(a)
            // a.draw(this.ctx)
            // requestAnimationFrame(() => a.shoot(this.ctx, "DOWN"))
            const c = new Bullet(this.x, this.y + this.height)
            BULLETS.push(c)
            c.draw(CTX[0])
            requestAnimationFrame(() => c.shoot(CTX[0], "DOWN"))
            const d = new Bullet(this.x + this.width, this.y + this.height)
            BULLETS.push(d)
            d.draw(CTX[0])
            requestAnimationFrame(() => d.shoot(CTX[0], "DOWN"))
        }
    }
    rotate(ctx){
        ctx.save();
        ctx.translate(400, 400);
        ctx.rotate(20 * Math.PI / 180);
        this.draw(ctx)
        // ctx.translate(-(20/2), -(30/2));
        ctx.restore
    }
    // checkCollision(object){
    //     let top = this.y
    //     let bottom = this.y + this.height
    //     let left = this.x
    //     let right = this.x + this.width
    //     if (top > object.y + object.height || right < object.x || left > object.x + object.width || bottom < object.y){
    //         return false
    //     }
    //     return true
    // }
    bindKeys(){
        document.addEventListener("keydown", e => {
            if (e.key === "f"){
                this.shoot()
            }
        })
    }
    move(ctx, direction){
        debugger
        switch(direction){
            case "RIGHT":
                debugger
                this.x = this.x + this.vel
                if (this.checkOutboundsRight()){
                    this.x = this.x - this.vel
                    this.dir = "LEFT"
                }
                // ENEMIES.forEach(enemy => {
                //     if (this.checkCollision(enemy)){
                //         this.x = this.x - this.vel
                //     } 
                // })
                GAME[0].draw()
                break;
            case "LEFT":
                debugger
                this.x = this.x - this.vel
                if (this.checkOutboundsLeft()){
                    this.x = this.x + this.vel
                    this.dir = "RIGHT"
                }
                // ENEMIES.forEach(enemy => {
                //     if (this.checkCollision(enemy)){
                //         this.x = this.x + this.vel
                //     } 
                // })
                GAME[0].draw()
                break;
            case "UP":
                debugger
                this.y = this.y - this.vel
                if (this.checkOutboundsTop()){
                    this.y = this.y + this.vel
                }
                // ENEMIES.forEach(enemy => {
                //     if (this.checkCollision(enemy)){
                //         this.y = this.y + this.vel
                //     } 
                // })
                GAME[0].draw()
                break;
            case "DOWN":
                debugger
                this.y = this.y + this.vel
                if (this.checkOutboundsBottom()){
                    this.y = this.y - this.vel
                }
                // ENEMIES.forEach(enemy => {
                //     if (this.checkCollision(enemy)){
                //         this.y = this.y - this.vel
                //     } 
                // })
                GAME[0].draw()
                break;
        }
    }
   
}

export default Enemy