const withdrawBlock = document.getElementById("withdraw");
// const totalAmountSelector = document.getElementById("total-amount");
const withdrawInput = document.getElementById("withdraw-input");
const withdrawBtn = document.getElementById("btn-withdraw");

withdrawBtn.addEventListener("click", () => {
  const newwithdrawAmount = parseFloat(withdrawInput.value);
  withdrawInput.value = "";
  if (isNaN(newwithdrawAmount) === true) {
    alert("please enter a number");
    return;
  }
  let prevwithdrawAmount = parseFloat(withdrawBlock.innerHTML);
  const totalwithdrawAmount = newwithdrawAmount + prevwithdrawAmount;
  withdrawBlock.innerHTML = totalwithdrawAmount;
  //total amount
  let prevTotalAmount = parseFloat(totalAmountSelector.innerText);
  let totalAmount = prevTotalAmount - newwithdrawAmount;
  totalAmountSelector.innerText = totalAmount;
});

document.getElementById("btn-logout").addEventListener("click", () => {
  window.location.href = "index.html";
});
