document.getElementById("btn-deposit").addEventListener("click", () => {
  const newDepositAmount = dataFromInputfield("deposit-input");
  const prevDepositAmount = dataFromElement("deposit");
  const prevTotalAmount = dataFromElement("total-amount");

  if (isNaN(newDepositAmount) === true) {
    alert("please enter a number");
    return;
  }
  const totalDepositAmount = newDepositAmount + prevDepositAmount;
  setDataIntoElement("deposit", totalDepositAmount);
  //total amount
  let totalAmount = prevTotalAmount + newDepositAmount;
  setDataIntoElement("total-amount", totalAmount);
});
