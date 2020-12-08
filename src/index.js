import Game from "./game";
import GameView from "./game_view";
export const GAMES = []
export const GAMEVIEWS = []
const gameCanvas = document.getElementById("game-canvas");
const ctx = gameCanvas.getContext("2d");
document.addEventListener("DOMContentLoaded", function () {
  const game = new Game([{
    type: "standard",
    radius: 25,
    vel: [1, 0],
    color: "red"
  }], 1);
  GAMES.push(game)
  const gameView = new GameView(GAMES[0], ctx)
  GAMEVIEWS.push(gameView)
  gameView.start()
});
let nextLevelButton = document.querySelector("#next-level-button")
nextLevelButton.addEventListener("click", () => {
  // canvasEl.style.display = "inline-block"
  let nextLevel = document.querySelector(".next-level")
  nextLevel.style.display = "none"
  gameCanvas.style.filter = "none"
  gameCanvas.style.opacity = "1"
  // const game2 = new Game(5, 2)
  GAMEVIEWS[0].nextLevel(GAMEVIEWS[0].level + 1)
  // GAMEVIEWS[0].player = game2.addPlayer()
  // cancelAnimationFrame(GAMEVIEWS[0].requestId)
  // GAMEVIEWS[0].start()
  // GAMES[0].startNextLevel()
  // let canvas2 = document.querySelector("#game-canvas-2")
  // canvas2.width = Game.DIM_X;
  // canvas2.height = Game.DIM_Y;
  // canvas2.style.display = "inline-block"
  // const ctx2 = gameCanvas.getContext("2d")
  // GAMES.push(game2)
  // new GameView(game2, ctx2).start()
})
let startOverButtons = document.getElementsByClassName("start-over-button")
for(let i = 0; i <= startOverButtons.length - 1; i++){
  startOverButtons[i].addEventListener("click", () => {
    location.reload()  
  })
}





