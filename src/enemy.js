import MovingObject from "./moving_object";
import * as Util from "./util";
import Bullet from "./bullet";
import Laser from "./laser";
import SquareParticle from './square_particle'

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
      this.fireAngle = -3.14
      this.originalColor = this.color
      this.pose = [12, 50]
      this.defaultPose = [12, 50]
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
    explode(pos, size){
      debugger
      for(let i = 1; i <= size; i++){
        this.game.addParticles(pos)
      }
    }
    draw(ctx){
      // ctx.drawImage(img, srcX, srcY, srcW, srcH, ctxX, ctxY, ctxW, ctxH)
      let enemy = new Image()
      enemy.src = "https://opengameart.org/sites/default/files/ships_saucer_0.png"
      ctx.drawImage(enemy, this.pose[0], this.pose[1], 92, 92, this.pos[0] - this.radius, this.pos[1] - this.radius, this.radius * 2, this.radius * 2)
    }
    startFiring(){
        let fireRate
        if (this.type === "standard" || this.type === "spinning"){
          fireRate = 250
        } else if (this.type === "turret"){
          fireRate = 500
        }
        this.fireInterval = setInterval(() => {
            let pattern
            if (this.type === "turret"){
              pattern = ["diagonal-surround", "surround"][Math.floor(Math.random() * 2)]
              this.fire(null, pattern)
            } else if (this.type === "standard") {
              pattern = "spray"  
              let angle = Math.atan2(this.game.players[0].pos[1] - this.pos[1], (this.game.players[0].pos[0] + 485) - (this.pos[0] + 485))
              let velocity = [Math.cos(angle), Math.sin(angle)]
              this.fire(velocity, pattern)   
            } else if (this.type = "spinning") {
              pattern = "spinning"
              let angle = this.fireAngle
              let velocity = [Math.cos(angle), Math.sin(angle)]
              this.fireAngle += 0.25
              if (this.fireAngle > 3.14) this.fireAngle = -3.14
              this.fire(velocity, pattern) 
            }
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
      this.pose = [577, 50]
      // this.color = "red"
      setTimeout(() => this.pose = this.defaultPose, 100)
    }
    remove() {
        let pos = this.pos
        this.game.remove(this);
        this.explode(pos, 30)
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
    fire(velocity, pattern) {
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
          let bullet1 = new Bullet({
            pos: this.pos,
            vel: [5, 0],
            color: "#780000",
            invincible: true,
            game: this.game
          });  
          let bullet2 = new Bullet({
            pos: this.pos,
            vel: [-5, 0],
            color: "#780000",
            invincible: true,
            game: this.game
          });  
          let bullet3 = new Bullet({
            pos: this.pos,
            vel: [0, 5],
            color: "#780000",
            invincible: true,
            game: this.game
          });  
          let bullet4 = new Bullet({
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
        break;
        case "diagonal-surround":
          let bullet5 = new Bullet({
            pos: this.pos,
            vel: [5, 5],
            color: "#780000",
            invincible: true,
            game: this.game
          });  
          let bullet6 = new Bullet({
            pos: this.pos,
            vel: [-5, -5],
            color: "#780000",
            invincible: true,
            game: this.game
          });  
          let bullet7 = new Bullet({
            pos: this.pos,
            vel: [-5, 5],
            color: "#780000",
            invincible: true,
            game: this.game
          });  
          let bullet8 = new Bullet({
            pos: this.pos,
            vel: [5, -5],
            color: "#780000",
            invincible: true,
            game: this.game
          });  
          this.game.add(bullet5);
          this.game.add(bullet6);
          this.game.add(bullet7);
          this.game.add(bullet8);
        break;
        case "spinning":
          const relVel2 = Util.scale(
            Util.dir(velocity),
            2
          );
          const bulletVel2 = [
            relVel2[0] + this.vel[0], relVel2[1] + this.vel[1]
          ];
        
          const bullet9 = new Bullet({
            // pos: [this.pos[0] + this.radius, this.pos[1]],
            pos: this.pos,
            vel: bulletVel2,
            color: "purple",
            game: this.game
          });  
          this.game.add(bullet9);
        break;
        // UP: [0, -1], RIGHT: [1, 0], DOWN: [0, 1], LEFT: [-1, 0]
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




