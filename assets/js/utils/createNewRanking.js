export const createNewRanking = function(username, score) {
  const rankingContainer = document.getElementById("scoreRanking")

  const newRankingElement = document.createElement("div")
  const newRankingTitle = document.createElement("p")
  const newRankingText = document.createElement("p")

  newRankingElement.id = "currentUserScore"
  newRankingTitle.textContent = username
  newRankingTitle.className = "score__title"
  const currentScore = score ? `${score} seconds` : "Currently playing"
  newRankingText.textContent = currentScore

  newRankingElement.append(newRankingTitle, newRankingText)
  rankingContainer.prepend(newRankingElement)
}