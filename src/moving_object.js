import * as Util from"./util";

class MovingObject{
    constructor(options){
        this.isRemovable = true;
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
        this.game = options.game;
        if (options.type) this.type = options.type
        if (options.invincible) this.invincible = options.invincible
    }
    collideWith(otherObject) {
    };
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc( //x: this.pos[0], y: this.pos[1]
        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
      );
      ctx.fill();
    };
    isCollidedWith(otherObject) {
      const centerDist = Util.dist(this.pos, otherObject.pos);
      return centerDist < (this.radius + otherObject.radius);
    };
    
    move(timeDelta) {
  
      const velocityScale = timeDelta / (1000 / 60),
          offsetX = this.vel[0] * velocityScale,
          offsetY = this.vel[1] * velocityScale;
    
      this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
    
      if (this.game.isOutOfBounds(this.pos)) {
        if (this.isRemovable) {
          this.remove();
        } else {
          this.pos = [this.pos[0] - offsetX, this.pos[1] - offsetY];
        }
      }
    };
    
    remove() {
      this.game.remove(this);
    };
}
export default MovingObject;













