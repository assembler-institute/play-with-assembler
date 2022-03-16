export const getScore = function () {
  const score = document.getElementById("score").innerText;
  console.log(score);
  const currentScore = parseInt(score.slice(7));
  return currentScore;
};
