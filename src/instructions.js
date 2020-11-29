class Instructions {
    constructor(text,font){
        this.font = font
        this.text = text
    }
    draw(ctx){
        ctx.fillStyle = "white"
        ctx.font = this.font;
        ctx.fillText(this.text, 10, 50)
    }
}
export default Instructions
