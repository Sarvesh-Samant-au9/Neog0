const purchaseprice = document.querySelector(".input_purchase");
const purchaseUnits = document.querySelector(".input_units");
const sellingPrice = document.querySelector(".input_current");
const outputDiv = document.querySelector(".output_text");
const errorMessage = document.querySelector(".error");
const submitButton = document.querySelector(".submit_btn");
const message = "All the Fields are mandatory";
const errorValues = "No values can be negative";

const profit_loss_Handler = (e) => {
  e.preventDefault();
  const costPrice = Number(purchaseprice.value);
  const units = Number(purchaseUnits.value);
  const sellPrice = Number(sellingPrice.value);
  if (units === "" || costPrice === "" || sellPrice === "") {
    window.alert(message);
    outputDiv.innerHTML = "";
    return (errorMessage.innerHTML = message);
  }

  if (costPrice < 0 || sellPrice < 0 || units <= 0) {
    if (units === 0) {
      outputDiv.innerHTML = "";
      return (errorMessage.innerHTML = `You havent invested than how can u think of either profit or loss`);
    }
    window.alert(errorValues);
    outputDiv.innerHTML = "";
    return (errorMessage.innerHTML = errorValues);
  }

  let calculation = sellPrice - costPrice;
  let percentage = Math.abs((calculation / costPrice) * 100);
  percentage = percentage.toFixed(3);

  if (+calculation > 0) {
    errorMessage.innerHTML = "";
    outputDiv.innerHTML = `You have bagged a profit of ${percentage} %`;
  } else if (+calculation === 0) {
    errorMessage.innerHTML = "";
    outputDiv.innerHTML = `All Square, no profit, no loss`;
  } else if (+calculation < 0) {
    errorMessage.innerHTML = "";
    outputDiv.innerHTML = `All loss, lost about ${percentage} % `;
  }
};

submitButton.addEventListener("click", profit_loss_Handler);
