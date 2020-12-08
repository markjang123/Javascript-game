import MovingObject from "./moving_object";
import * as Util from "./util";
import Bullet from "./bullet";
import Laser from "./laser";

class Enemy extends MovingObject{
    constructor(options) {
      options.vel = options.vel || [1, 0];
      options.color = options.color || "red";
      options.game = options.game
      super(options)
      this.isRemovable = false;
      this.hitPoints = 10
      this.isTracking = false
      this.fireInterval
      this.trackInterval
      this.toggleTrackingInterval
      this.startFiring()
      if (this.type === "standard"){
        this.toggleTracking()
      }
    }
    toggleTracking(){
      this.toggleTrackingInterval = setInterval(() => {
        if (!this.isTracking) {
          this.startTracking()
        } else {
          this.isTracking = false
          clearInterval(this.trackInterval)
        }
      }, 2500)
    }
    startFiring(){
        let fireRate
        if (this.type === "standard"){
          fireRate = 250
        } else if (this.type === "turret"){
          fireRate = 500
        }
        this.fireInterval = setInterval(() => {
            let pattern
            this.type === "turret" ? pattern = "surround" : pattern = "spray"
            let angle = Math.atan2(this.game.players[0].pos[1] - this.pos[1], (this.game.players[0].pos[0] + 485) - (this.pos[0] + 485))
            let velocity = [Math.cos(angle), Math.sin(angle)]
            this.fireBullet(velocity, pattern)   
        }, fireRate)
    }
    startTracking(){
        this.isTracking = true
        this.trackInterval = setInterval(() => {
            let angle = Math.atan2(this.game.players[0].pos[1] - this.pos[1], (this.game.players[0].pos[0] + 485) - (this.pos[0] + 485))
            let velocity = [Math.cos(angle), Math.sin(angle)]
            this.vel = velocity
        }, 500)
    }
    blink(){
      let originalColor = this.color
      this.color = "white"
      setTimeout(() => this.color = originalColor, 100)
    }
    remove() {
        this.game.remove(this);
        clearInterval(this.fireInterval)
        clearInterval(this.trackInterval)
        clearInterval(this.toggleTrackingInterval)
      };
    collideWith(otherObject) {
        if (otherObject instanceof Laser) {
            otherObject.remove()
            this.hitPoints -= 1
            this.blink()
            if (this.hitPoints <= 0) {
                this.remove();
                otherObject.remove();
                return true;
            }
        } 
        return false;
      };
    fireBullet(velocity, pattern) {
      switch(pattern){
        case "spray":
        const relVel = Util.scale(
          Util.dir(velocity),
          2
        );
      
        const bulletVel = [
          relVel[0] + this.vel[0], relVel[1] + this.vel[1]
        ];
      
        const bullet = new Bullet({
          // pos: [this.pos[0] + this.radius, this.pos[1]],
          pos: this.pos,
          vel: bulletVel,
          color: "purple",
          game: this.game
        });  
        this.game.add(bullet);
        break;
        case "surround":
          const bullet1 = new Bullet({
            pos: this.pos,
            vel: [5, 0],
            color: "#780000",
            invincible: true,
            game: this.game
          });  
          const bullet2 = new Bullet({
            pos: this.pos,
            vel: [-5, 0],
            color: "#780000",
            invincible: true,
            game: this.game
          });  
          const bullet3 = new Bullet({
            pos: this.pos,
            vel: [0, 5],
            color: "#780000",
            invincible: true,
            game: this.game
          });  
          const bullet4 = new Bullet({
            pos: this.pos,
            vel: [0, -5],
            color: "#780000",
            invincible: true,
            game: this.game
          });  
          this.game.add(bullet1);
          this.game.add(bullet2);
          this.game.add(bullet3);
          this.game.add(bullet4);
          //do stuff
        break;
      }
    }

    move(timeDelta) {
      const velocityScale = timeDelta / (1000/60),
          offsetX = this.vel[0] * velocityScale,
          offsetY = this.vel[1] * velocityScale;
    
      this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
    
      let angle = Math.atan2(this.game.players[0].pos[1] - this.pos[1], (this.game.players[0].pos[0] + 485) - (this.pos[0] + 485))
      let velocity = [Math.cos(angle), Math.sin(angle)]
      if (this.game.isOutOfBounds(this.pos)) {
        if (this.isRemovable) {
          this.remove();
        } else {
          this.vel = velocity
        }
      }
    };
}

export default Enemy;




