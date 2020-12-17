import player from './player'
import MovingObject from './moving_object'
class LifeBar extends MovingObject{
    constructor(options){
        super(options)
        // this.pos = [20, 20]
        this.color = "yellow"
        this.outline = "magenta"
        this.vel = [0, 0]
        this.player = options.game.players[0]
        this.length = 150
        this.shadowSize = 20
        this.lineWidth = 1
    }
    calculatePercentFilled(){
        return (this.player.hitPoints / this.player.maxHealth)
    }
    draw(ctx){
        let percent = this.calculatePercentFilled()
        if (percent <= 0.20) {
            this.color = "red"
            this.outline = "red"
        } else {
            this.color = "yellow"
            this.outline = "magenta"
        }
        ctx.shadowColor = this.outline;
        ctx.shadowColor = this.outline
        ctx.shadowBlur = this.shadowSize
        ctx.lineWidth = this.lineWidth
        ctx.beginPath();
        ctx.rect(this.pos[0], this.pos[1], this.length, 10);
        ctx.strokeStyle = this.outline
        ctx.stroke();
        //inner
        ctx.fillStyle = this.color
        ctx.fillRect(this.pos[0], this.pos[1], percent * this.length, 10)
    }
}

export default LifeBar