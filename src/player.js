import MoveableObject from './movable_object'

class Player extends MoveableObject {
    constructor(){
        super()
        this.x = window.innerWidth / 2
        this.y = window.innerHeight / 2
        this.height = 30
        this.width = 20
        this.color= "white"
        this.vel = 10
        this.RIGHT = "RIGHT"
        this.LEFT = "LEFT"
        this.UP = "UP"
        this.DOWN = "DOWN"
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        // ctx.rotate(10 * Math.PI / 180)    
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x + 10, this.y + 30)
        ctx.lineTo(this.x - 10, this.y + 30)
        ctx.fill()
    }
    rotate(ctx){
        ctx.save();
        ctx.translate(400, 400);
        ctx.rotate(20 * Math.PI / 180);
        this.draw(ctx)
        // ctx.translate(-(20/2), -(30/2));
        ctx.restore
    }
    move(ctx, direction){
        debugger
        switch(direction){
            case "RIGHT":
                debugger
                ctx.clearRect(this.x - 10, this.y - 1, this.width, this.height + 2)
                this.x = this.wrap(this.x + this.vel)
                break;
            case "LEFT":
                debugger
                ctx.clearRect(this.x - 10, this.y - 1, this.width, this.height + 2)
                this.x = this.x - this.vel
                break;
            case "UP":
                debugger
                ctx.clearRect(this.x - 10, this.y - 1, this.width, this.height + 2)
                this.y = this.y - this.vel
                break;
            case "DOWN":
                debugger
                ctx.clearRect(this.x - 10, this.y - 1, this.width, this.height + 2)
                this.y = this.y + this.vel
                break;
        }
    }
    bindKeys(ctx){
        document.addEventListener("keydown", e => {
            console.log(e)
            switch (e.key){
            case "a":
                this.move(ctx, this.LEFT)
                this.draw(ctx)
                break;
            case "d":
                this.move(ctx, this.RIGHT)
                this.draw(ctx)
                break;
            case "s":
                this.move(ctx, this.DOWN)
                this.draw(ctx)
                break;
            case "w":
                this.move(ctx, this.UP)
                this.draw(ctx)
            }
        })
       
    }
}

export default Player