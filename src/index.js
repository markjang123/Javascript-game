import MoveableObject from './movable_object'
import Game from './game'
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (e) => {
        if (e.code === "Space"){
            let instructions = document.querySelector('.instructions-1')
            instructions.remove()
            const canvas = document.getElementById("game-canvas")
            const ctx = canvas.getContext("2d")
            const game = new Game(ctx, LEVELS[0])
            GAME.push(game)
            game.start()
        }
    })
})
export const GAME = []
export const LEVELS = [
    {
        level: 1,
        enemies: [  {x: 400, y: 250, height: 50, width: 50},
                    {x: 500, y: 310, height: 50, width: 50}
                 ]
    },
    {
        level: 2,
        enemies: [  {x: 400, y: 200, height: 50, width: 50},
                    {x: 500, y: 300, height: 50, width: 50},
                    {x: 650, y: 360, height: 50, width: 50},
                 ]
    }
]