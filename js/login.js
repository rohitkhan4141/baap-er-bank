document.getElementById("btn-login").addEventListener("click", () => {
  const emailIdSelector = document.getElementById("email-field");
  const passwordSelector = document.getElementById("password-field");
  const emailId = emailIdSelector.value;
  const password = passwordSelector.value;
  if (emailId === "baap@bank.com" && password === "hello") {
    window.location.href = "bank.html";
  } else {
    alert("Pass korte parish nai tai taka nai");
  }
});
