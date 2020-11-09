import MoveableObject from './movable_object'
import Player from './player'
import Laser from './laser'


class Game {
    constructor(ctx){
        this.ctx = ctx
    }
    start(){
        const player = new Player()
        player.draw(this.ctx)
        player.bindKeys(this.ctx)
        document.addEventListener("click", e => {
            debugger
            const laser = new Laser(player.x - 2.5, player.y - 20, 20, 5, "yellow", 10)
            LASERS.push(laser)
            laser.draw(this.ctx)
            laser.shoot(this.ctx)
        })
        const enemy1 = new MoveableObject(player.x - 30, player.y - 200, 50, 50, "red")
       ENEMIES.push(enemy1)
        enemy1.draw(this.ctx)
        const enemy2 = new MoveableObject(100, 0, 15, 25, "red")
       ENEMIES.push(enemy2)
        enemy2.draw(this.ctx)
        const enemy3 = new MoveableObject(60, 500, 15, 25, "red")
       ENEMIES.push(enemy3)
        enemy3.draw(this.ctx)
        const enemy4 = new MoveableObject(400, 300, 15, 25, "red")
       ENEMIES.push(enemy4)
        enemy4.draw(this.ctx)
        const enemy5 = new MoveableObject(350, 350, 15, 25, "red")
       ENEMIES.push(enemy5)
        enemy5.draw(this.ctx)
    }
}

export const ENEMIES = []
export const LASERS = []
export default Game