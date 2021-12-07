const inputDate = document.querySelector(".input_date");
const inputNumber = document.querySelector(".input_number");
const submitBtn = document.querySelector(".submit_btn");
const outDiv = document.querySelector(".output");
const errorMessage = document.querySelector(".error");
submitBtn.addEventListener("click", clickHandler);

function clickHandler() {
  if (inputDate.value === "" || inputNumber.value === "") {
    window.alert("Enter Something ");
    outDiv.innerHTML = "";
    return (errorMessage.innerHTML = "All Fields are Mandatory");
  }
  if (inputNumber.value <= 1) {
    window.alert("Number cannot be Negative or zero or one");
    outDiv.innerHTML = "";
    return (errorMessage.innerHTML =
      "Number Entered should be Positive and not one");
  }
  let date = inputDate.value.split("-");
  const sum = date.reduce((prev, next) => Number(prev) + Number(next), 0);

  const calculation = sum % Number(inputNumber.value);
  if (calculation === 0) {
    errorMessage.innerHTML = "";
    return (outDiv.innerHTML =
      "Lucky You, Birthday and Number is lucky for you");
  } else {
    errorMessage.innerHTML = "";
    return (outDiv.innerHTML = "Poor Lad, Unlucky Number");
  }
}
