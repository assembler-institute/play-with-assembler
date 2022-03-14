import { handleUsername } from "./utils/handleUsername.js";
import { createNewRanking } from "./utils/createNewRanking.js"
import { evaluateMove } from "./gameLogic.js"

import { cards } from "./data/cards.js"

export const gameStart = function() {
  document.getElementById("usernameContainer").style.display = "none"
  const gameContainer = document.getElementById("gameContainer")
  gameContainer.classList.remove("hidden-section")
  gameContainer.classList.add("game__container")

  const username = handleUsername("get")
  createNewRanking(username)

  setTimer()
  displayCards()
}

const setTimer = function() {
  let seconds = 0
  let timerElement = document.getElementById('gameTimer')

  function incrementSeconds() {
      seconds += 1
      timerElement.innerText = `Score: ${seconds} seconds`
  }

  setInterval(incrementSeconds, 1000)
}

const displayCards = function() {
  const gameGrid = document.getElementById("gameGrid")

  const cardsDoubled = cards.concat(cards)

  const randomSortedCards = cardsDoubled.sort((a, b) => Math.random() - 0.5)

  randomSortedCards.forEach(card => {
    const container = document.createElement("div")
    container.className = "flip-card"

    const cardContainer = document.createElement("div")
    cardContainer.className = "flip-card-inner"
    /* TO AVOID CHEATING SO EASILY WITH INSPECTOR
    WE "ENCODE" A LITTLE BIT OUR CARD EMOJI */
    cardContainer.dataset.emoji = card.codePointAt(0).toString(16)
    cardContainer.addEventListener("click", evaluateMove)

    const newCardElement = document.createElement("div")
    newCardElement.className = "flip-card-front"

    const content = document.createElement("p")
    content.textContent = card
    content.className = "card-content"
    
    const newCardElementBack = document.createElement("div")
    newCardElementBack.className = "flip-card-back"
    
    newCardElementBack.append(content)
    cardContainer.append(newCardElement, newCardElementBack)
    container.append(cardContainer)
    gameGrid.append(container)
  })

  document.getElementById("replay").addEventListener("click", function() {location.reload()})
}