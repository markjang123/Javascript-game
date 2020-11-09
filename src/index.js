import MoveableObject from './movable_object'
import Game from './game'
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas")
    const ctx = canvas.getContext("2d")
    const game = new Game(ctx)
    game.start()
})