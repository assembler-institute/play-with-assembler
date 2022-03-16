import { handleUsername } from "./utils/handleUsername.js";
import { createNewRanking } from "./utils/createNewRanking.js";
import { startGame } from "./gameLogic.js";

const displayedNumber = document.querySelector(".displayedNumber");

export const gameStart = function () {
  document.getElementById("usernameContainer").style.display = "none";
  const gameContainer = document.getElementById("gameContainer");
  gameContainer.classList.remove("hidden-section");
  gameContainer.classList.add("game-container");

  const username = handleUsername("get");
  createNewRanking(username);

  startGame();
};
