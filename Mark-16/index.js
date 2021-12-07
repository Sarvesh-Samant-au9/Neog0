const inputYear = document.querySelector("#input_year");
const submitBtn = document.querySelector(".submit_btn");
const outputDiv = document.querySelector("#output");

const clickHandler = () => {
  let useryear = inputYear.value.trim();
  let solution = " ";
  if (useryear < 0 || useryear === "") {
    solution = " Wrong data Entered ";
    return (outputDiv.innerText = solution);
  }

  if (useryear % 400 === 0) {
    solution = `${useryear}  Horray, it is a leap year!!`;
  } else if (useryear % 100 === 0) {
    solution = `${useryear} no it ain't a leap year!`;
  } else if (useryear % 4 === 0) {
    solution = `${useryear} Horray, it is a leap year!!`;
  } else {
    solution = " noo, it is not a leap year!! ";
  }
  return (outputDiv.innerText = solution);
};

submitBtn.addEventListener("click", clickHandler);
