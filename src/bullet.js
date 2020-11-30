import MoveableObject from './movable_object'
import Player from './player'
import {ENEMIES, LASERS, PLAYER, OTHER, OBJECTIVE, BULLETS} from './game'
import {GAME} from './index'

class Bullet extends MoveableObject {
    constructor(x, y, radius, color, vel){
        super(x, y, radius, color, vel)
        this.hitpoint = {
            x: this.x + this.width / 2,
            y: this.y
        }
        this.radius = 10
        this.color = "white"
        this.isMoving = true
        this.distance = 0
        this.maxDistance = 400
        this.x = x
        this.y = y
        this.vel = 2
    }
    shoot(ctx, dir){
        // window.requestAnimationFrame(this.shoot)
        // let bulletInterval = window.setInterval(() => {
        //     if (!this.isMoving || this.distance >= this.maxDistance){
        //         const bulletIndex = BULLETS.indexOf(this);
        //         if (bulletIndex > -1) {
        //             BULLETS.splice(bulletIndex, 1);
        //             // ctx.clearRect(this.x, this.y - 1, this.width + 1, this.height + 2)
        //             GAME[0].draw()
        //             window.clearInterval(bulletInterval)
        //         }
        //     } else {
        //         this.move(ctx, dir)
        //         this.distance += this.vel
        //         this.draw(ctx)
        //     }
        // }, 1000 / 60
        // )
        // if (!this.isMoving || this.distance >= this.maxDistance){
        //             const bulletIndex = BULLETS.indexOf(this);
        //             if (bulletIndex > -1) {
        //                 BULLETS.splice(bulletIndex, 1);
        //                 GAME[0].draw()
        //                 cancelAnimationFrame(frameID)
        //             } 
        //         } else {
        //             this.move(ctx, dir)
        //             this.distance += this.vel
        //             this.draw(ctx)
        //             const frameID = requestAnimationFrame(this.shoot(ctx, dir))
        //         }

        const animateId = requestAnimationFrame(() => {
            if (!this.isMoving || this.distance >= this.maxDistance){
                const bulletIndex = BULLETS.indexOf(this);
                    BULLETS.splice(bulletIndex, 1);
                    GAME[0].draw()
                    cancelAnimationFrame(animateId)
            } else {
                this.move(ctx, dir)
                this.distance += this.vel
                this.draw(ctx)
                this.shoot(ctx, dir)
            }
        })
    }
    checkHitPlayer(player){
        debugger
        return this.getDistance(this.x, this.y, player.x, player.y) <= this.radius ||
               this.getDistance(this.x, this.y, player.x + player.width, player.y + player.height) <= this.radius ||
               this.getDistance(this.x, this.y, player.x, player.y + player.height) <= this.radius
    }
    getDistance(x1, y1, x2, y2){
        const x = Math.abs(x1 - x2)
        const y = Math.abs(y1 - y2)
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    }
    checkOutboundsTop(){
        return this.y < 0
    }
    checkOutboundsBottom(){
        const canvas = document.getElementById("game-canvas")
        return this.y > canvas.height 
    }
    checkOutboundsRight(){
        const canvas = document.getElementById("game-canvas")
        return this.x > canvas.width
    }
    checkOutboundsLeft(){
        return this.x < 20
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        let gradient = ctx.createRadialGradient(this.x, this.y, 5, this.x, this.y, 8);
        gradient.addColorStop(0, "fuchsia");
        gradient.addColorStop(1, "purple");
        ctx.fillStyle = gradient;
        ctx.fill();
        if (this.checkHitPlayer(PLAYER[0])){
            // PLAYER[0].blink(ctx)
            // PLAYER[0].color = "red"
            // setTimeout(() => PLAYER[0].color = "white", 100)
            PLAYER[0].blink()
            this.isMoving = false
            const bulletIndex = BULLETS.indexOf(this)
            BULLETS.splice(bulletIndex, 1)
            PLAYER[0].hitPoints -= 1
            if (PLAYER[0].hitPoints <= 0) {
                GAME[0].gameOver()
            } 
            // GAME[0].draw()
        }
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        // for(const enemy of ENEMIES){
        //     debugger
        //     if (this.checkHit(enemy.x, enemy.y, enemy.height, enemy.width)){
        //         enemy.hitPoints -= 1
        //         // alert(enemy.hitPoints)
        //         if (enemy.hitPoints <= 0) {
        //             enemy.isMoving = false
        //             const enemyIndex = ENEMIES.indexOf(enemy)
        //             ENEMIES.splice(enemyIndex, 1)
        //         } else {
        //             enemy.blink(ctx)
        //         }
        //         const laserIndex = LASERS.indexOf(this);
        //         if (laserIndex > -1) {
        //             LASERS.splice(laserIndex, 1);
        //         }
        //         this.isMoving = false
        //         GAME[0].draw()
        //     }
        // }
        // for(const object of IMMOVABLE){
        //     debugger
        //     if (this.checkHit(object.x, object.y, object.height, object.width)){
        //         object.hitPoints -= 1
        //         // alert(object.hitPoints)
        //         if (object.hitPoints <= 0) {
        //             const objectIndex = IMMOVABLE.indexOf(object)
        //             IMMOVABLE.splice(objectIndex, 1)
        //         } else {
        //             object.blink(ctx)
        //         }
        //         const laserIndex = LASERS.indexOf(this);
        //         if (laserIndex > -1) {
        //             LASERS.splice(laserIndex, 1);
        //         }
        //         this.isMoving = false
        //         GAME[0].draw()
        //     }
        // }
     
    }
    startMoving(ctx){
        this.move(ctx, "DOWN")
        this.draw(ctx)
        requestAnimationFrame(this.startMoving(ctx))
    }
    move(ctx, direction){
        switch(direction){
            case "RIGHT":
                this.x = this.wrap(this.x + this.vel)
                GAME[0].draw()
                break;
            case "LEFT":
                this.x = this.x - this.vel
                GAME[0].draw()
                break;
            case "UP":
                // ctx.clearRect(0, 0, 1080, 1920)
                // ctx.clearRect(this.x, this.y - 1, this.width + 1, this.height + 2)
                this.y = this.y - this.vel
                this.hitpoint.y = this.y
                GAME[0].draw()
                break;
            case "DOWN":
                this.y = this.y + this.vel
                GAME[0].draw()
                break;
        }
        // ENEMIES.forEach(enemy => console.log(enemy))
    }
}

export default Bullet