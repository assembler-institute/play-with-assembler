import { finishGame } from "./gameOver.js";

const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const countdown = 3000;
const gameTime = 10000;
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

export function startGame() {
  timeUp = false;
  score = 0;
  setTimeout(() => {
    jump();
  }, countdown);
  setTimeout(() => {
    timeUp = true;
    finishGame();
  }, gameTime + countdown);
}

function jump() {
  const time = randomTime(500, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) jump();
  }, time);
}

function hostion(e) {
  if (!e.isTrusted) return;
  score++;
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = "Score: " + score;
}

moles.forEach((mole) => mole.addEventListener("click", hostion));
