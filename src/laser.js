import MoveableObject from './movable_object'
import Player from './player'
import {ENEMIES, LASERS} from './game'

class Laser extends MoveableObject {
    constructor(x, y, height, width, color, vel){
        super(x, y, height, width, color, vel)
        this.hitpoint = {
            x: this.x + this.width / 2,
            y: this.y
        }
    }
    shoot(ctx){
        // window.requestAnimationFrame(this.shoot)
        window.setInterval(() => {
            this.move(ctx, "UP")
            this.draw(ctx)
            // ctx.clearRect(0, 0, 1080, 1920)
        }, 1
        )
    }
    checkHit(x, y, height, width){
        return this.hitpoint.x >= x && this.hitpoint.x <= x + width && this.hitpoint.y >= y && this.hitpoint.y <= y + height
    }
    draw(ctx){
        debugger
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
        for(const enemy of ENEMIES){
            debugger
            if (this.checkHit(enemy.x, enemy.y, enemy.height, enemy.width)){
                enemy.color = "pink"
                enemy.draw(ctx)
                ENEMIES.splice(0, 1)
                LASERS.splice(0, 1)
            }
        }
        // ctx.fillStyle = "red";
        // ctx.fillRect(this.x + this.width / 2, this.y - 5, 5, 5 )
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
                ctx.clearRect(this.x, this.y - 1, this.width + 1, this.height + 2)
                this.y = this.y - this.vel
                this.hitpoint.y = this.y
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