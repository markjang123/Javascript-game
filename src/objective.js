import MovingObject from "./moving_object";
import * as Util from "./util";
import Laser from "./laser";

class Objective extends MovingObject {
    constructor(options){
      options.radius = Objective.RADIUS;
      options.vel = options.vel || [0, 0];
      options.color = options.color || "#252525";
      options.game = options.game
      super(options)
      this.isRemovable = false;
      this.hitPoints = 20
      this.radius = 25
      this.fireInterval
      this.originalColor = this.color
      //   this.startFiring()
    }
    
    startFiring(){
        this.fireInterval = setInterval(() => this.fire(), 500)
    }
    blink(){
        this.color = "white"
        setTimeout(() => this.color = this.originalColor, 100)
    }
    remove() {
        let pos = this.pos
        this.game.remove(this);
        this.explode(pos, 50)
        // clearInterval(this.fireInterval)
      };
    collideWith(otherObject) {
        if (otherObject instanceof Laser) {
            otherObject.remove()
            this.hitPoints -= 1
            this.blink()
            if (this.hitPoints <= 0) {
                this.remove();
                otherObject.remove();
                setTimeout(() => this.game.victory(), 300)
                return true;
            }
        }
        return false;
      };
      fire() {
       
      
        const relVel = Util.scale(
          Util.dir(this.vel),
          Bullet.SPEED
        );
      
        const bulletVel = [
          relVel[0] + this.vel[0], relVel[1] + this.vel[1]
        ];
      
        const asteroid = new Asteroid({
          pos: [this.pos[0] + this.radius, this.pos[1]],
          vel: [0, Asteroid.SPEED],
          color: this.color,
          game: this.game
        });
        const asteroid2 = new Asteroid({
          pos: [this.pos[0] - this.radius, this.pos[1]],
          vel: [0, Asteroid.SPEED],
          color: this.color,
          game: this.game
        });
      
        this.game.add(asteroid);
        this.game.add(asteroid2);
      };
      explode(pos, size){
        debugger
        for(let i = 1; i <= size; i++){
          this.game.addParticles(pos)
        }
      }
      move(timeDelta) {
        const velocityScale = timeDelta / (1000 / 60),
            offsetX = this.vel[0] * velocityScale,
            offsetY = this.vel[1] * velocityScale;
      
        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
      
        if (this.game.isOutOfBounds(this.pos)) {
          if (this.isRemovable) {
            this.remove();
          } else {
            this.vel = [-this.vel[0], 0]
          }
        }
      };
}
export default Objective;