import ImmovableObject from './immovable_object'
class Objective extends ImmovableObject {
    constructor() {
        debugger
        super()
        this.x = window.innerWidth / 2;
        this.y = 10;
        this.height = 50
        this.width = 50
        this.color = "gray"
        this.hitPoints = 10
    }
    blink(ctx){
        let blinkCount = 0
        let blinkInterval = window.setInterval(() => {
            if (blinkCount < 2) {
                this.color === "white" ? this.color = "gray" : this.color = "white"
                this.draw(ctx)
                blinkCount ++
                console.log("BLINKING")
            } else {
                window.clearInterval(blinkInterval)
            }
        }, 50)
    }
}

export default Objective