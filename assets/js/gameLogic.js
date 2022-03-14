import { finishGame } from "./gameOver.js"
import { getRandomCheer } from "./utils/getRandomCheer.js"

export const evaluateMove = function(e) {
  if (document.querySelectorAll(".active").length <= 2) {
    e.target.classList.add("active")
    e.target.classList.toggle("flip")
  }

  const activeCards = document.querySelectorAll(".active")

  let selectedCards = []
  activeCards.forEach(card => {
    selectedCards.push(card.innerText)
  })

  const cheerContainer = document.getElementById("gameCheer")
  cheerContainer.textContent = ""

  const equalCards = allEqual(selectedCards)

  const flipCardDelay = 500
  
  if (equalCards) {
    if (selectedCards.length === 2) {
      /* If selectedCards is < 2 but equalCards is true
      (if there's only one card, it always will be)
      we wait for a second card to evaluate */
      const equalElements = document.querySelectorAll(`[data-emoji="${selectedCards[0].codePointAt(0).toString(16)}"]`)
      equalElements.forEach(element => {
        element.classList.remove("active")
        element.dataset.fullfilled = true
      })
      selectedCards = []
      const gameOver = isGameOver()
      setTimeout(() => {
        // WE ADD A LITTLE DELAY TO DISPLAY THE ANIMATION OF THE LAST CARD TO FLIP
        if (gameOver) finishGame()
      }, flipCardDelay)
    }
  } else {
    const cheerMessage = getRandomCheer()
    cheerContainer.textContent = cheerMessage

    setTimeout(() => {
      // WE ADD A LITTLE DELAY FOR USER TO ACTUALLY SEE THE FLIPPED CARD
      activeCards.forEach(card => {
        card.classList.remove("active")
        card.classList.toggle("flip")
      })
    }, flipCardDelay)
  }
}

const allEqual = function(arr) {
  return new Set(arr).size === 1
}

const isGameOver = function() {
  const allCards = document.querySelectorAll(".flip-card")
  const fullfilledCards = document.querySelectorAll("[data-fullfilled='true']")
  const gameOver = (allCards.length === fullfilledCards.length) ? true : false
  return gameOver
}