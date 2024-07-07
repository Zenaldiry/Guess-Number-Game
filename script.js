"use strict";
const input = document.querySelector(".numIn");
const checkBtn = document.querySelector(".checkBtn");
const hint = document.querySelector(".hint");
const trueAnswer = document.querySelector(".true");
const AgainBtn = document.querySelector(".AgainBtn");
const scoreP = document.querySelector(".score span");
const highScore = document.querySelector(".highScore span");
let score = 20;
let num = 0;
let high = 0;
const gNum = () => {
  num = Math.trunc(Math.random() * 20);
  return num;
};
gNum();
checkBtn.addEventListener("click", () => {
  if (input.value !== "") {
    scoreP.textContent = "";
    if (Number(input.value) == num) {
      trueAnswer.textContent = input.value;
      if (score > high) high = score;
      highScore.textContent = high;
      document.querySelector("body").style.backgroundColor = "green";
      hint.textContent = "Get it 👌";
      checkBtn.disabled = true;
    } else {
      Number(input.value) > num
        ? (hint.textContent = "too high")
        : (hint.textContent = "too small");
      score--;
    }
    scoreP.textContent += score;
    if (score === 0) {
      hint.textContent = "You Lost the game 😔";
      checkBtn.disabled = true;
    }
  } else {
    alert("you should put a number");
  }
});

AgainBtn.addEventListener("click", () => {
  checkBtn.disabled = false;
  document.querySelector("body").style.backgroundColor = "black";
  highScore.textContent = high;
  gNum();
  input.value = "";
  scoreP.textContent = "";
  hint.textContent = "";
  trueAnswer.textContent = "?";
  score = 20;
});
