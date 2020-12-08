import MovingObject from "./moving_object";
import Laser from "./laser";
import * as Util from "./util";


class Player extends MovingObject {
    constructor(options){
        options.vel = options.vel || [0, 0];
        options.color = options.color || "white";
        super(options)
        this.radius = 15
        this.isRemovable = false;
        this.hitPoints = 10
        this.color = "white"
        this.blink = this.blink.bind(this)
        this.invincible = false

    }
    blink(){
      let originalColor = this.color
      this.color = "red"
      setTimeout(() => this.color = originalColor, 100)
    }
    fireBullet(velocity) {
      const relVel = Util.scale(
        Util.dir(velocity),
        15
      );
    
      const laserVel = [
        relVel[0] + this.vel[0], relVel[1] + this.vel[1]
      ];
    
      const laser = new Laser({
        pos: this.pos,
        vel: laserVel,
        color: "yellow",
        game: this.game
      });
    
      this.game.add(laser);
    };
    
}



export default Player;



