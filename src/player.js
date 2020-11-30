import MoveableObject from './movable_object'
import {GAME} from './index'
import {ENEMIES, LASERS, PLAYER, OTHER, IMMOVABLE, LISTENERS} from './game'
import Laser from './laser'


class Player extends MoveableObject {
    constructor(x, y, height, width, color, vel, ctx){
        super(x, y, height, width, color, vel, ctx)
        const canvas = document.getElementById("game-canvas")
        this.x = canvas.width / 2
        this.y = canvas.height * 0.75
        this.height = 30
        this.width = 20
        this.color= "white"
        this.vel = 10
        this.RIGHT = "RIGHT"
        this.LEFT = "LEFT"
        this.UP = "UP"
        this.DOWN = "DOWN"
        this.ctx = ctx
        this.bindKeys(this.ctx)
        this.hitPoints = 10
    }
    checkOutboundsTop(){
        return this.y < 0
    }
    checkOutboundsBottom(){
        const canvas = document.getElementById("game-canvas")
        return this.y + this.height > canvas.height 
    }
    checkOutboundsRight(){
        const canvas = document.getElementById("game-canvas")
        return this.x + this.width > canvas.width
    }
    checkOutboundsLeft(){
        return this.x < 20
    }
    draw(ctx){
        ENEMIES.forEach(enemy => {
            if (this.checkCollision(enemy)){
                enemy.color = "pink"
                enemy.draw(ctx)
            } 
        })
        ctx.fillStyle = this.color;
        // ctx.rotate(10 * Math.PI / 180)    
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x + 10, this.y + 30)
        ctx.lineTo(this.x - 10, this.y + 30)
        ctx.fill()
    }
    rotate(ctx){
        ctx.save();
        ctx.translate(400, 400);
        ctx.rotate(20 * Math.PI / 180);
        this.draw(ctx)
        // ctx.translate(-(20/2), -(30/2));
        ctx.restore
    }
    checkCollision(object){
        let top = this.y
        let bottom = this.y + this.height
        let left = this.x
        let right = this.x + this.width
        if (top > object.y + object.height || right < object.x || left > object.x + object.width || bottom < object.y){
            return false
        }
        return true
    }
    blink(){
        this.color = "red"
        setTimeout(() => this.color = "white", 100)
    }
    move(ctx, direction){
        switch(direction){
            case "RIGHT":
                this.x = this.x + this.vel
                if (this.checkOutboundsRight()){
                    this.x = this.x - this.vel
                }
                ENEMIES.forEach(enemy => {
                    if (this.checkCollision(enemy)){
                        this.x = this.x - this.vel
                    } 
                })
                GAME[0].draw()
                break;
            case "LEFT":
                this.x = this.x - this.vel
                if (this.checkOutboundsLeft()){
                    this.x = this.x + this.vel
                }
                ENEMIES.forEach(enemy => {
                    if (this.checkCollision(enemy)){
                        this.x = this.x + this.vel
                    } 
                })
                GAME[0].draw()
                break;
            case "UP":
                this.y = this.y - this.vel
                if (this.checkOutboundsTop()){
                    this.y = this.y + this.vel
                }
                ENEMIES.forEach(enemy => {
                    if (this.checkCollision(enemy)){
                        this.y = this.y + this.vel
                    } 
                })
                GAME[0].draw()
                break;
            case "DOWN":
                
                this.y = this.y + this.vel
                if (this.checkOutboundsBottom()){
                    this.y = this.y - this.vel
                }
                ENEMIES.forEach(enemy => {
                    if (this.checkCollision(enemy)){
                        this.y = this.y - this.vel
                    } 
                })
                GAME[0].draw()
                break;
        }
    }
    shoot(){
        const laser = new Laser(this.x - 2.5, this.y - 20, 20, 5, "yellow", 30)
        LASERS.push(laser)
        laser.draw(this.ctx)
        requestAnimationFrame(() => laser.shoot(this.ctx))
    }
    bindKeys(ctx){
        // document.addEventListener("mousedown", e => {
        //     
        //     const shootInterval = window.setInterval(() => {
        //         const laser = new Laser(player.x - 2.5, player.y - 20, 20, 5, "yellow", 10)
        //         LASERS.push(laser)
        //         laser.draw(this.ctx)
        //         laser.shoot(this.ctx)
        //     }, 250)
        //     document.addEventListener("mouseup", e => window.clearInterval(shootInterval))
        // })
        const shootListener = document.addEventListener("click", e => {
            this.shoot()
        })
        debugger
        LISTENERS.push(shootListener)
        const playerMoveListener = document.addEventListener("keydown", e => {
            console.log(e)
            switch (e.key){
            case "a":
                this.move(ctx, this.LEFT)
                this.draw(ctx)
                break;
            case "d":
                this.move(ctx, this.RIGHT)
                this.draw(ctx)
                break;
            case "s":
                this.move(ctx, this.DOWN)
                this.draw(ctx)
                break;
            case "w":
                this.move(ctx, this.UP)
                this.draw(ctx)
                break;
            }
        })
        LISTENERS.push(playerMoveListener)
       
    }
}

export default Player