import { handleUsername } from "./utils/handleUsername.js";
import { getScore } from "./utils/getScore.js"
import { createNewRanking } from "./utils/createNewRanking.js"

export const finishGame = function() {
  document.getElementById("gameContainer").style.display = "none"
  const gameOverContainer = document.getElementById("gameOverContainer")
  gameOverContainer.classList.remove("hidden-section")
  gameOverContainer.classList.add("gameover__container")

  const username = handleUsername("get")
  document.getElementById("gameOverUsername").textContent = username

  const score = getScore()
  document.getElementById("gameOverScore").textContent = score

  inscribeScore(username, score)

  document.getElementById("replay-finished").addEventListener("click", function() {location.reload()})
}

const inscribeScore = function(username, score) {
  // ADD CURRENT SCORE AND USER TO RANKING WITH FINAL SCORE
  // NEXT ITERATION COULD ADD HERE THE SCORE AND RANKING TO LOCALSTORAGE
  const rankingContainer = document.getElementById("currentUserScore")
  rankingContainer.remove(rankingContainer.firstChild)
  createNewRanking(username, score)
}