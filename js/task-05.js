const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

function updateOutput() {
  const inputValue = textInput.value;

  if (inputValue === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = inputValue;
  }
}

textInput.addEventListener("input", updateOutput);
