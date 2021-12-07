const sides = document.querySelectorAll(".input");
const Btn = document.querySelector("#btn");
const OutputDiv = document.querySelector(".output");

function calculateSumOfSquares(a, b) {
  const sumOfSquare = a * a + b * b;
  return sumOfSquare;
}

function calculateHypotenuse() {
  if (Number(sides[0].value) < 0 || Number(sides[1].value) < 0) {
    return (OutputDiv.innerText = `There cannot be any Negative Lenght, whatsoever`);
  }
  const result = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypo = Math.sqrt(result);
  OutputDiv.innerText = "The Length of Hypotenuse is " + lengthOfHypo;
}

Btn.addEventListener("click", calculateHypotenuse);
