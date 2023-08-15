const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const userEmail = loginForm.elements.email;
  const userPassword = loginForm.elements.password;

  if (userEmail.value === "" || userPassword.value === "") {
    alert("Please, complete all input lines");
  } else {
    const userData = {
      email: userEmail.value,
      password: userPassword.value,
    };
    console.log(userData);

    loginForm.reset();
  }
});
