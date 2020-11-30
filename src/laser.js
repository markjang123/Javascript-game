import MoveableObject from './movable_object'
import Player from './player'
import {ENEMIES, LASERS, PLAYER, OTHER, OBJECTIVE, BULLETS} from './game'
import {GAME} from './index'

class Laser extends MoveableObject {
    constructor(x, y, height, width, color, vel){
        super(x, y, height, width, color, vel)
        this.hitpoint = {
            x: this.x + this.width / 2,
            y: this.y
        }
        this.isMoving = true
        this.distance = 0
        this.maxDistance = 900
    }
    shoot(ctx){
        // window.requestAnimationFrame(this.shoot)
        // let shootInterval = window.setInterval(() => {
        //     if (!this.isMoving || this.distance >= this.maxDistance){
        //         const laserIndex = LASERS.indexOf(this);
        //         if (laserIndex > -1) {
        //             LASERS.splice(laserIndex, 1);
        //             ctx.clearRect(this.x, this.y - 1, this.width + 1, this.height + 2)
        //             window.clearInterval(shootInterval)
        //         }
        //     } else {
        //         this.move(ctx, "UP")
        //         this.distance += this.vel
        //         this.draw(ctx)
        //     }
        //     // ctx.clearRect(0, 0, 1080, 1920)
        // }, 100
        // )

        const animateId = requestAnimationFrame(() => {
            if (!this.isMoving || this.distance >= this.maxDistance){
                const laserIndex = LASERS.indexOf(this);
                if (laserIndex > -1) {
                    LASERS.splice(laserIndex, 1);
                    GAME[0].draw()
                    cancelAnimationFrame(animateId)
                } 
            } else {
                this.move(ctx, "UP")
                this.distance += this.vel
                this.draw(ctx)
                this.shoot(ctx)
            }
        })
    }
    checkHit(x, y, height, width){
        return this.hitpoint.x >= x && this.hitpoint.x <= x + width && this.hitpoint.y >= y && this.hitpoint.y <= y + height
    }
    checkHitCircle(x, y, radius){
        return this.getDistance(this.hitpoint.x, this.hitpoint.y, x, y) < radius || 
               this.getDistance(this.hitpoint.x, this.hitpoint.y + (this.height / 2), x, y) < radius
    }
    getDistance(x1, y1, x2, y2){
        const x = Math.abs(x1 - x2)
        const y = Math.abs(y1 - y2)
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    }
    draw(ctx){
        debugger
       
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
        for(const enemy of ENEMIES){
            debugger
            if (this.checkHit(enemy.x, enemy.y, enemy.height, enemy.width)){
                enemy.hitPoints -= 1
                // alert(enemy.hitPoints)
                if (enemy.hitPoints <= 0) {
                    enemy.isMoving = false
                    enemy.canFire = false
                    const enemyIndex = ENEMIES.indexOf(enemy)
                    ENEMIES.splice(enemyIndex, 1)
                } else {
                    enemy.blink(ctx)
                }
                const laserIndex = LASERS.indexOf(this);
                if (laserIndex > -1) {
                    LASERS.splice(laserIndex, 1);
                }
                this.isMoving = false
                GAME[0].draw()
            }
        }
        for(const object of OBJECTIVE){
            debugger
            if (this.checkHit(object.x, object.y, object.height, object.width)){
                object.hitPoints -= 1
                // alert(object.hitPoints)
                if (object.hitPoints <= 0) {
                    const objectIndex = OBJECTIVE.indexOf(object)
                    OBJECTIVE.splice(objectIndex, 1)
                    GAME[0].victory()
                } else {
                    object.blink(ctx)
                }
                const laserIndex = LASERS.indexOf(this);
                if (laserIndex > -1) {
                    LASERS.splice(laserIndex, 1);
                }
                this.isMoving = false
                GAME[0].draw()
            }
        }
        for(const bullet of BULLETS){
            debugger
            if (this.checkHitCircle(bullet.x, bullet.y, bullet.radius)){
                debugger
                bullet.isMoving = false
                const bulletIndex = BULLETS.indexOf(bullet)
                BULLETS.splice(bulletIndex, 1)   
                const laserIndex = LASERS.indexOf(this);
                if (laserIndex > -1) {
                    LASERS.splice(laserIndex, 1);
                }
                this.isMoving = false
                GAME[0].draw()
            }
        }
     
    }
    move(ctx, direction){
        debugger
        switch(direction){
            case "RIGHT":
                debugger
                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)
                this.x = this.wrap(this.x + this.vel)
                break;
            case "LEFT":
                debugger
                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)
                this.x = this.x - this.vel
                break;
            case "UP":
                debugger
                // ctx.clearRect(0, 0, 1080, 1920)
                // ctx.clearRect(this.x, this.y - 1, this.width + 1, this.height + 2)
                this.y = this.y - this.vel
                this.hitpoint.y = this.y
                GAME[0].draw()
                break;
            case "DOWN":
                debugger
                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)
                this.y = this.y + this.vel
                break;
        }
        // ENEMIES.forEach(enemy => console.log(enemy))
    }
}

export default Laser