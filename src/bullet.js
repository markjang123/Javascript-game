import MovingObject from "./moving_object";
import Player from "./player";
import Laser from "./laser";

class Bullet extends MovingObject{
    constructor(options){
        options = options || {};
        options.radius = 10;
        super(options)
        this.speed = 2
    }
    collideWith(otherObject) {
      if (otherObject instanceof Player) {
        if (otherObject.invincible) return false;
        this.remove()
        otherObject.blink()
        otherObject.hitPoints -= 1
        if (otherObject.hitPoints <= 0){
          otherObject.remove()
          this.game.gameOver()
          
        }
        return true;
      } else if (otherObject instanceof Laser) {
        if (!this.invincible){
          this.remove();
          otherObject.remove();
          return true;
        }
      }
      return false;
    };
}

export default Bullet




