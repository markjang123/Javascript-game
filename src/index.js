import Game from "./game";
import GameView from "./game_view";
export const GAMES = []
export const GAMEVIEWS = []
const gameCanvas = document.getElementById("game-canvas");
const ctx = gameCanvas.getContext("2d");

const showGameCanvas = () => {
  gameCanvas.style.display = "inline-block"
  // let startScreen = document.querySelector(".start-screen")
  // gameCanvas.height = parseFloat(startScreen.style.height) * 1.2
  // gameCanvas.width = parseFloat(startScreen.style.width) * 1.2
  gameCanvas.style.width = `50%`
  gameCanvas.style.height = `70%`
}
document.addEventListener("DOMContentLoaded", function () {
  let startScreen = document.querySelector(".start-screen")
  startScreen.style.height = '70%'//`${window.innerWidth / 2}px`
  startScreen.style.width = '50%'//`${window.innerWidth / 2}px`

  let leftColumn = document.querySelector(".left-column")
  leftColumn.style.height = `${window.innerWidth / 2}px`
  leftColumn.style.width = `${window.innerWidth / 4}px`

  let rightColumn = document.querySelector(".right-column")
  rightColumn.style.height = `${window.innerWidth / 2}px`
  rightColumn.style.width = `${window.innerWidth / 4}px`

  let body = document.querySelector("body")
  body.style.height = `${window.innerHeight}px`
  body.style.width = `${window.innerWidth}px`



  let startButton = document.querySelector(".start-game-button")
  startButton.addEventListener("click", () => {
    let audio = document.getElementById("audio")
    audio.play()
    let muteButton = document.getElementById("mute-button")
    muteButton.style.display = "inline-block"
    startScreen.style.display = "none"
    showGameCanvas()
    const game = new Game([{
      type: "spinning",
      radius: 25,
      vel: [1, 0],
      color: "red"
    }], 1);
    GAMES.push(game)
    const gameView = new GameView(GAMES[0], ctx)
    GAMEVIEWS.push(gameView)
    gameView.start()
  })
});
let muteButton = document.getElementById("mute-button")
muteButton.addEventListener("click", () => {
  let audio = document.getElementById("audio")
  audio.muted = !audio.muted
  audio.muted ? muteButton.innerText = "Unmute" : muteButton.innerText = "Mute"
})
let nextLevelButton = document.querySelector("#next-level-button")
nextLevelButton.addEventListener("click", () => {
  let nextLevel = document.querySelector(".next-level")
  nextLevel.style.display = "none"
  showGameCanvas()
  gameCanvas.style.filter = "none"
  gameCanvas.style.opacity = "1"
  GAMEVIEWS[0].nextLevel(GAMEVIEWS[0].level + 1)
})
let startOverButtons = document.getElementsByClassName("start-over-button")
for(let i = 0; i <= startOverButtons.length - 1; i++){
  startOverButtons[i].addEventListener("click", () => {
    location.reload()  
  })
}





