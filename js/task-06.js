const inputValue = document.getElementById("validation-input");
const inputValueLength = document.querySelector('[data-length="6"]');

inputValue.addEventListener("blur", () => {
  const enteredValue = inputValue.value.trim();
  const inputLength = parseInt(
    inputValueLength.getAttribute("data-length"),
    10
  );

  if (enteredValue.length === inputLength) {
    inputValueLength.classList.add("valid");
    inputValueLength.classList.remove("invalid");
  } else {
    inputValueLength.classList.remove("valid");
    inputValueLength.classList.add("invalid");
  }
});
