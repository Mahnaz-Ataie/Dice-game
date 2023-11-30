"use strict";
const score_0 = document.querySelector("#score--0");
const score_1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const btn_roll = document.querySelector(".btn--roll");
const btn_hold = document.querySelector(".btn--hold");
const btn_new = document.querySelector(".btn--new");
const current_0 = document.getElementById("current--0");
const current_1 = document.getElementById("current--1");
const player_0 = document.querySelector(".player--0");
const player_1 = document.querySelector(".player--1");

let currentScore, activeplayer, isgameplaying, scores;
function Init() {
  currentScore = 0;
  activeplayer = 0;
  isgameplaying = true;
  scores = [0, 0];
  score_0.textContent = 0;
  score_1.textContent = 0;
  dice.classList.add("hidden");
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--1`).classList.remove("player--active");
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  document.getElementById("current--0").textContent = currentScore;
  document.getElementById("current--1").textContent = currentScore;
}
Init();
//(this bellow function is for swiching user)

function switchuser() {
  currentScore = 0;
  document.getElementById(`current--${activeplayer}`).textContent =
    currentScore;
  activeplayer = activeplayer == 0 ? 1 : 0;
  player_0.classList.toggle("player--active");
  player_1.classList.toggle("player--active");
}
btn_roll.addEventListener("click", function () {
  if (isgameplaying) {
    const DiceRandomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(DiceRandomNumber);
    dice.src = `dice-${DiceRandomNumber}.png`;
    dice.classList.remove("hidden");

    if (DiceRandomNumber !== 1) {
      currentScore += DiceRandomNumber;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
      // (another way to switch player) => current_0.textContent = currentScore;
    } else {
      //switch player
      switchuser();
    }
  }
});
btn_hold.addEventListener("click", function () {
  if (isgameplaying) {
    scores[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 20) {
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("player--winner");

      dice.classList.add("hidden");
      isgameplaying = false;
    } else {
      switchuser();
    }
  }
});
btn_new.addEventListener("click", Init);
