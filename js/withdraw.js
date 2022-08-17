document.getElementById("btn-withdraw").addEventListener("click", () => {
  let prevwithdrawAmount = dataFromElement("withdraw");
  const newWithdrawAmount = dataFromInputfield("withdraw-input");
  let prevTotalAmount = dataFromElement("total-amount");

  if (isNaN(newWithdrawAmount) === true) {
    alert("please enter a number");
    return;
  }
  if (newWithdrawAmount > prevTotalAmount) {
    alert("not sufficient funds");
    return;
  }
  const totalwithdrawAmount = newWithdrawAmount + prevwithdrawAmount;
  setDataIntoElement("withdraw", totalwithdrawAmount);
  //total amount
  let totalAmount = prevTotalAmount - newWithdrawAmount;
  setDataIntoElement("total-amount", totalAmount);
});

document.getElementById("btn-logout").addEventListener("click", () => {
  window.location.href = "index.html";
});
