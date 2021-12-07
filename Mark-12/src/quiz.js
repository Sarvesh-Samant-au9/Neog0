
const submitBtn = document.querySelector(".btn");
const quizForm = document.querySelector(".quiz-form");
const OutputDiv = document.querySelector(".output");

const correctAnswers = ["90°", "right angled", "one", "equilateral"];

function calculateScore() {
  let score = 0;
  let index = 0;

  const formresults = new FormData(quizForm);
  for (let value of formresults.values()) {
    if (correctAnswers.includes(value)) {
      score = score + 1;
    }
    index = index + 1;
  }
  OutputDiv.innerText = "Your Score is " + score;
}

submitBtn.addEventListener("click", calculateScore);
