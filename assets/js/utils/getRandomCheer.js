import { cheer } from "../data/cheer.js"

export const getRandomCheer = function() {
  return cheer[Math.floor(Math.random() * cheer.length)]
}