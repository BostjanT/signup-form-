const name = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.querySelector(".btn-trial");
const errorTxt = document.querySelectorAll(".error-msg");
const emailTxt = document.querySelector(".emailTxt");

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

  let emailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(emailFormat)) {
    password.focus();
    return true;
  } else {
    emailTxt.classList.add("show");
    emailTxt.innerHTML = "Looks like this is not an email";
  }
});
