const form = document.getElementById("loginForm");
const emailInput = document.getElementById("yourEmail");
const passwordInput = document.getElementById("password");

const savedEmail = localStorage.getItem("email");
const savedPassword = localStorage.getItem("password");





emailInput.value = savedEmail;
passwordInput.value = savedPassword;


form.addEventListener("submit", () => {
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("password", passwordInput.value);
});