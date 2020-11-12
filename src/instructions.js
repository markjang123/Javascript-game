class Instructions {
    constructor(text){
        this.text = text
    }
    draw(ctx){
        debugger
        ctx.fillStyle = "white"
        ctx.font = this.text;
        ctx.fillText("Use WASD to move and click to shoot", 10, 50)
    }
}
export default Instructions
