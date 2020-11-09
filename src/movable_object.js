class MoveableObject {
    constructor(x, y, height, width, color, vel) {
        debugger
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color
        this.vel = vel
    }
    draw(ctx){
        debugger
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    wrap(pos){
        return pos % 1920
    }
    move(ctx, direction){
        debugger
        switch(direction){
            case "RIGHT":
                debugger
                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)
                this.x = this.wrap(this.x + this.vel)
                break;
            case "LEFT":
                debugger
                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)
                this.x = this.x - this.vel
                break;
            case "UP":
                debugger
                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)
                this.y = this.y - this.vel
                break;
            case "DOWN":
                debugger
                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)
                this.y = this.y + this.vel
                break;
        }
    }
}

export default MoveableObject