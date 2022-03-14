import { scores } from "../data/scores.js"

export const createRanking = function(memoryScores) {
  /* NEXT ITERATION COULD IMPLEMENT HERE TO WATCH FIRST LOCALSTORAGE FOR PREVIOUS GAMES AND RANKINGS */

  const scoresToPrint = memoryScores ? memoryScores : scores

  const rankingContainer = document.getElementById("scoreRanking")

  scoresToPrint.forEach((score, index) => {
    const newRanking = document.createElement("div")
    const newRankingTitle = document.createElement("p")
    const newRankingText = document.createElement("p")

    newRanking.id = `usersScore${index+1}`
    newRankingTitle.textContent = score.name
    newRankingTitle.className = "score__title"
    newRankingText.textContent = `${score.score} seconds`
    newRankingText.className = "score__points"

    newRanking.append(newRankingTitle, newRankingText)
    rankingContainer.appendChild(newRanking)
  })
}