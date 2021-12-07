const readlinesync = require("readline-sync");
const chalk = require("chalk");
let score = 0;
const highScore = [
  {
    name: "Kitaabi Keeda",
    score: 15,
  },
  {
    name: "first bencher",
    score: 1,
  },
];

const questions = [
  {
    question:
      " \n1. Egypt is located in which continent?\n   a. Asia \n   b. Europe \n   c. Africa \n   d. North America \n ",
    answer: "c",
  },
  {
    question:
      " \n1. Algeria is located in which continent?\n   a. Asia \n   b. Europe \n   c. Africa \n   d. North America \n ",
    answer: "c",
  },
  {
    question:
      " \n1. Malta is located in which continent?\n   a. Asia \n   b. Europe \n   c. Africa \n   d. North America \n ",
    answer: "b",
  },
  {
    question:
      " \n1. Canada is located in which continent?\n   a. Asia \n   b. Europe \n   c. Africa \n   d. North America \n ",
    answer: "d",
  },
];

function cheakAnswer(question, answer) {
  const userAnswer = readlinesync.question(question);
  if (userAnswer === answer) {
    console.log(chalk.green("Right!"));
    score = score + 5;
  } else {
    console.log(chalk.red("Wrong"));
    score = score - 4;
  }
  console.log(chalk.green("Current Score = ", score));
}

function questionaiire() {
  for (let i of questions) {
    cheakAnswer(i.question, i.answer);
  }
}

function showscore() {
  const newUser = {
    name: userName,
    score,
  };
  highScore.push(newUser);
  highScore.map((score) => console.log(score.name, ":", score.score));
}

console.log(chalk.red("Hello peeps get into the questionaaire !! \n"));
const userName = readlinesync.question("Ur good Name? ");
console.log(chalk.green(" \n Welcome", userName));

// Rules of the game
console.log(
  chalk.cyan.bold(
    "\nRules of the game and score system: \n 1.If you answer the question you will get 5 points.\n Enter either of available options only \n 2.If you will not answer the question your score will be -4."
  )
);

// Start the Game
console.log(chalk.green(" \n Lets Start the Game !! "));

questionaiire();

console.log(" \nYour Final Score is ", score, "out of 20");

console.log(" \nAll performers until today:");
showscore();

console.log(
  chalk.green(
    "\nCheck out the high scores, if you should be there message me and I will update it.\nThanks for playing Hope you enjoy it"
  )
);
