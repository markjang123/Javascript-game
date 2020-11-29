class ImmoveableObject {
    constructor(x, y, height, width, color) {
        
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color
        this.hitPoints = 10
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
 
  
}

export default ImmoveableObject