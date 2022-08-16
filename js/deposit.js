const depositBlock = document.getElementById("deposit");
const totalAmountSelector = document.getElementById("total-amount");
const depositInput = document.getElementById("deposit-input");
const depositBtn = document.getElementById("btn-deposit");

depositBtn.addEventListener("click", () => {
  const newDepositAmount = parseFloat(depositInput.value);
  depositInput.value = "";
  if (isNaN(newDepositAmount) === true) {
    alert("please enter a number");
    return;
  }
  let prevDepositAmount = parseFloat(depositBlock.innerHTML);
  const totalDepositAmount = newDepositAmount + prevDepositAmount;
  depositBlock.innerHTML = totalDepositAmount;
  //total amount
  let prevTotalAmount = parseFloat(totalAmountSelector.innerText);
  let totalAmount = prevTotalAmount + newDepositAmount;
  totalAmountSelector.innerText = totalAmount;
});
