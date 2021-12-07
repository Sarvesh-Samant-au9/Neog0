let readlineSync = require("readline-sync");
let finalScore = 0;
let userName = readlineSync.question("What is Your Good Name?");

console.log("No negative Marking at all. *");
console.log("-----------\n");
console.log("Welcome ", userName);
console.log("\n");
console.log("Lets us see how \n");

const questions = [
  {
    q1: "What is '1' + 1 in JS?",
    ans: "11",
  },
  {
    q1: "Do you think India can win wt20?",
    ans: "yes",
  },
  {
    q1: "Do you think Coding can change ur life",
    ans: "yes",
  },
  {
    q1: "Do you watch code n code?",
    ans: "no",
  },
];

const randomPassing = Math.floor(Math.random() * questions.length);

function play(question, answer) {
  let ans = readlineSync.question(question).toLowerCase();
  if (ans === answer) {
    console.log("You are Correct");
    finalScore = finalScore + 1;
  } else {
    console.log("You are incorrect");
    finalScore <= 0 ? (finalScore = 0) : (finalScore = finalScore - 1);
  }
  console.log("Your Score is:", finalScore);
  console.log("\n");
}

for (let i of questions) {
  play(i.q1, i.ans);
}

console.log("Thank You For Playing With Me");
console.log("Your final score is", finalScore);
if (finalScore < randomPassing) {
  console.log("U Failed as the cut off was high");
} else {
  console.log("Even though the competition was daunting you made it.");
}
console.log("Hope You Enjoy It.");
