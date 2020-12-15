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
        this.originalColor = this.color
        this.blink = this.blink.bind(this)
        this.invincible = false
        this.pose = [12, 50]
        // this.pose = [577, 50]
        this.defaultPose = [12, 50]

    }
    blink(){
      this.pose = [577, 50]
      // this.color = "red"
      setTimeout(() => this.pose = this.defaultPose, 100)
    }
    draw(ctx){
      // ctx.drawImage(img, srcX, srcY, srcW, srcH, ctxX, ctxY, ctxW, ctxH)
      let player = new Image()
      player.src = "https://opengameart.org/sites/default/files/ships_saucer_0.png"
      ctx.drawImage(player, this.pose[0], this.pose[1], 92, 92, this.pos[0] - this.radius, this.pos[1] - this.radius, this.radius * 2, this.radius * 2)
    }
    remove() {
      let pos = this.pos
      this.game.remove(this);
      this.explode(pos, 50)
      // clearInterval(this.fireInterval)
    };
    explode(pos, size){
      debugger
      for(let i = 1; i <= size; i++){
        this.game.addParticles(pos)
      }
    }
    fire(velocity) {
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



