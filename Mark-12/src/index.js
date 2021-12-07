
const inputs = document.querySelectorAll(".input");
const btn = document.querySelector(".btn");
const Output = document.querySelector(".output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  if (
    Number(inputs[0].value) < 0 ||
    Number(inputs[1].value) < 0 ||
    Number(inputs[2].value) < 0
  ) {
    return (Output.innerText = `There cannot be any Negative angles, whatsoever`);
  }
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );

  if (sumOfAngles === 180) {
    Output.innerText = "Yay, The angle of a triangle";
  } else {
    Output.innerText = "Oh Oh! The angles don't form a triangle";
  }
}

btn.addEventListener("click", isTriangle);
