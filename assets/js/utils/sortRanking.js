import { scores } from "../data/scores.js"
import { createRanking } from "./createRanking.js"

export const sortRanking = function(newUser) {
  scores.push(newUser)
  scores.sort(function(a, b) {if (a.score < b.score) {return -1}})
  console.log(scores);
  const rankingContainer = document.getElementById("scoreRanking")
  rankingContainer.innerText = ""
  createRanking(scores)
}