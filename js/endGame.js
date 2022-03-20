import { getScore } from "./gameLogic.js";
import { ranking } from "./data/ranking.js";
import { getUserName } from "./utils/getUsername.js";

export const endContainer = function() {
    messageText();
    rankingContainer();
    document.getElementById("endReplay").addEventListener("click", function() {location.reload()})
}

const messageText = function() {
    const score = getScore();
    const userName = getUserName("get");
    const message = document.getElementById("messageEnd");
    const lineBreak = '<br>';

    if (score === 0) {
        message.textContent = `${userName}, you lost! The word was ${secretWord}`;
    }
    if (score > 0) {
        message.innerHTML = `Congratulations, ${userName}! 🎉 You finished the game.`+ lineBreak + `Your score is ${score} points.`;
    }

    const messageText = document.createElement('div');
    messageText.classList.add("messageEnd");
    messageText.textContent = message.textContent;
}

const rankingContainer = function() {
    document.getElementById("page2").classList.add("hide");
    document.getElementById("page3").classList.remove("hide");
    const score = getScore();
    const userName = getUserName("get");
    const userScore = {
        name: userName,
        score: score
    }
    ranking.push(userScore);
    ranking.sort((a, b) => b.score - a.score);
    ranking.reverse();

    const rankingContainer = document.getElementById("rankingList");
    
    for (let i = 0; i < ranking.length; i++) {
        const rankingItem = document.createElement("li");
        rankingItem.classList.add("playerScore");
        rankingItem.textContent = `${i + 1}. ${ranking[i].name} - ${ranking[i].score}`;
        rankingContainer.appendChild(rankingItem);
    }
}
