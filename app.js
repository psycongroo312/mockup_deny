const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const btnRegister = document.getElementById("btn-register");
const nameInput = document.getElementById("inputName");
const emailInput = document.getElementById("inputEmail");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");

  if (nav.classList.contains("open")) {
    burger.innerHTML = "&times;";
  } else {
    burger.innerHTML = "&#9776;";
  }
});

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  nameInput.style.borderColor = "";
  emailInput.style.borderColor = "";

  if (name === "") {
    nameInput.style.borderColor = "red";
    hasError = true;
  }

  if (!emailRegex.test(email)) {
    emailInput.style.borderColor = "red";
    hasError = true;
  }
});
