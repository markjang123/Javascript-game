import MovingObject from"./moving_object";
export const LASER_SPEED = 15
class Laser extends MovingObject {
    constructor(options){
        options.radius = 4;
        super(options)
        this.isRemovable = true;
    }

}
export default Laser





