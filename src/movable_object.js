class MoveableObject {
    constructor(x, y, height, width, color, vel, ctx) {
        
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color
        this.vel = vel
        this.isMoving = true
        this.hitPoints = 5
    }
    checkOutboundsTop(){
        return this.y < 0
    }
    checkOutboundsBottom(){
        const canvas = document.getElementById("game-canvas")
        return this.y + this.height > canvas.height 
    }
    checkOutboundsRight(){
        const canvas = document.getElementById("game-canvas")
        return this.x + this.width > canvas.width
    }
    checkOutboundsLeft(){
        return this.x < 20
    }
    draw(ctx){
        
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    blink(ctx){
        let blinkCount = 0
        let blinkInterval = window.setInterval(() => {
            if (blinkCount < 2) {
                this.color === "white" ? this.color = "red" : this.color = "white"
                this.draw(ctx)
                blinkCount ++
                console.log("BLINKING")
            } else {
                window.clearInterval(blinkInterval)
            }
        }, 50)
    }
    wrap(pos){
        return pos % 1920
    }
    startMoving(ctx){
        let moveInterval = window.setInterval(() => {
            if (this.isMoving){
                this.move(ctx, "RIGHT")
                this.draw(ctx)
            } else {
                window.clearInterval(moveInterval)
            }
        }, 100)
    }
    move(ctx, direction){
        
        switch(direction){
            case "RIGHT":
                
                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)
                this.x = this.wrap(this.x + this.vel)
                break;
            case "LEFT":
                
                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)
                this.x = this.x - this.vel
                break;
            case "UP":
                
                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)
                this.y = this.y - this.vel
                break;
            case "DOWN":
                
                ctx.clearRect(this.x, this.y - 1, this.width, this.height + 2)
                this.y = this.y + this.vel
                break;
        }
    }
}

export default MoveableObject