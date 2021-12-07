const inputs = document.querySelectorAll(".input");
const btn = document.querySelector(".btn");
const OutputDiv = document.querySelector(".output");

function Area(a, b) {
  const area = (a * b) / 2;
  OutputDiv.innerText = "The Area is " + area;
}

function calculateArea() {
  Area(Number(inputs[0].value), Number(inputs[1].value));
}

btn.addEventListener("click", calculateArea);
