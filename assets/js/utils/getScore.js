export const getScore = function() {
  const timer = document.getElementById("gameTimer").innerText
  const currentScore = parseInt(timer.slice(7, -8))
  return currentScore
}