import MoveableObject from './movable_object'
import Game from './game'
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (e) => {
        if (e.code === "Space"){
            let instructions = document.querySelector('.instructions-1')
            instructions.remove()
            const canvas = document.getElementById("game-canvas")
            const ctx = canvas.getContext("2d")
            const game = new Game(ctx)
            GAME.push(game)
            game.start(2)
        }
    })
})
export const GAME = []