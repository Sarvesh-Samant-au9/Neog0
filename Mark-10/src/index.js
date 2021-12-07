const inputMain = document.querySelector("#get-in");
const btnNext = document.querySelector("#next");
const billInput = document.querySelector(".inputbox");
const input2 = document.querySelector(".user-cash");
const btnCheck = document.querySelector(".check");
const Table = document.querySelector(".table");
const errorMessage = document.querySelector(".error-message");
const message = document.querySelector(".message");
const notes = [2000, 500, 100, 50, 20, 10, 5, 1];

const noOfnotes = document.querySelectorAll(".noOfNotes");

btnNext.addEventListener("click", clickHandler);

function clickHandler() {
  console.log(inputMain.value);
  if (inputMain.value >= 1) {
    return (
      billInput.classList.remove("hidden"),
      btnNext.classList.add("hidden"),
      errorMessage.classList.add("hidden")
    );
  } else {
    errorMessage.innerText = "Please Enter the Bill-Amount First";
  }
}

btnCheck.addEventListener("click", clickhandler2);

function clickhandler2() {
  if (input2.value >= inputMain.value) {
    if (inputMain.value && input2.value) {
      let balance = input2.value - inputMain.value;
      if (balance === 0) {
        message.innerText = "Thanku !! You Have Paid Right Amount !";
      } else if (balance > 0) {
        message.classList.add("hidden");
        let remainingAmount = balance;
        for (let i = 0; i <= notes.length; i++) {
          while (remainingAmount >= notes[i]) {
            let change = Math.floor(remainingAmount / notes[i]);
            Table.classList.remove("hidden");
            noOfnotes[i].innerHTML = `${change}`;
            remainingAmount = remainingAmount % notes[i];
          }
        }
      }
    } else {
      message.innerText = "Bill Amount is greater than given Cash";
    }
  }
}
