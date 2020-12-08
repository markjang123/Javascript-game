import MovingObject from "./moving_object";

const colors = [
    {r: 255, g: 30, b: 105},
    {r: 0, g: 206, b: 30},
    {r: 255, g: 255, b: 255},
    {r: 100, g: 30, b: 255}
  ];
const directions = [
    [5, 0],
    [-5, 0],
    [0, 5],
    [0, -5],
    [5, 5],
    [-5, 5],
    [5, -5],
    [-5, -5]
]
class SquareParticle extends MovingObject{
    constructor(options){ 
        options.vel = options.vel || [0, 0]
        super(options)
       this.color = this.randomColor()
       this.size = this.randomIntInRange(10, 50)
       this.lifeTime = this.randomLifetime()
       this.vel = this.randomDirection()
    }
    draw(ctx) {
        debugger
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 50
        ctx.lineWidth = this.randomIntInRange(1, 5)
        ctx.beginPath();
        ctx.rect(this.pos[0], this.pos[1], this.size, this.size);
        ctx.strokeStyle = this.color
        ctx.stroke();
    };
    randomFloatInRange(min, max){
        return (Math.random() * (max - min) + min).toFixed(2)
    }
    randomIntInRange(min, max){
        return Math.floor((Math.random() * ((max + 1) - min) + min))
    }
    randomLifetime(){
        let lifeTimes = [100, 200, 300, 400, 500, 600]
        return lifeTimes[Math.floor(Math.random() * lifeTimes.length)]
    }
    randomColor(){
        // let color = colors[Math.floor(Math.random() * colors.length)]
        // return `rgba(${color.r}, ${color.g}, ${color.b}, ${this.randomFloatInRange(0.5, 1)})`
        return `rgba(${this.randomIntInRange(0, 255)}, ${this.randomIntInRange(0, 255)}, ${this.randomIntInRange(0, 255)}, ${this.randomFloatInRange(0.5, 1)})`
    }
    randomDirection(){
        return [this.randomFloatInRange(-5, 5), this.randomFloatInRange(-5, 5)] 
    }
    move(timeDelta) {
        const velocityScale = timeDelta / (1000 / 60),
            offsetX = this.vel[0] * velocityScale,
            offsetY = this.vel[1] * velocityScale;
      
        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
        this.lifeTime -= 10
        this.size -= 0.25
        if (this.lifeTime <= 0){
            this.remove()
        }
        if (this.game.isOutOfBounds(this.pos)) {
          if (this.isRemovable) {
            this.remove();
          } else {
            this.pos = [this.pos[0] - offsetX, this.pos[1] - offsetY];
          }
        }
      };
}

export default SquareParticle




