const name = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.querySelector(".btn-trial");
const errorTxt = document.querySelectorAll(".error-msg");

button.addEventListener("click", () => {
  if (
    name.value == "" ||
    lastName.value == "" ||
    email.value == "" ||
    password.value == ""
  ) {
    name.classList.add("error");
    lastName.classList.add("error");
    email.classList.add("error");
    password.classList.add("error");

    errorTxt.forEach((txt) => {
      txt.classList.add("show");
    });
  }
});
