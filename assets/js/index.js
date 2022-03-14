import { initApp } from "./initApp.js";
import { handleUsername } from "./utils/handleUsername.js";
import { gameStart } from "./gameStart.js"

window.onload = function() {
  initApp()
}

const handleStart = function(e) {
  e.preventDefault()

  let username = e.target.elements.usernameInput.value
  handleUsername("set", username)

  gameStart()
}

document.getElementById("usernameForm").addEventListener("submit", handleStart)