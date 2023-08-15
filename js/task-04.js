const counter = document.getElementById("counter"); //div
const decrButton = counter.querySelector('[data-action="decrement"]'); //decrementBtn
const incrButton = counter.querySelector('[data-action="increment"]'); //incrementBtn
const elementValue = document.getElementById("value"); //span

decrButton.addEventListener("click", () => {
  let counterValue = parseInt(elementValue.textContent);

  counterValue--;

  if (counterValue < 0) {
    counterValue = 0;
  }

  elementValue.textContent = counterValue;
});

incrButton.addEventListener("click", () => {
  let counterValue = parseInt(elementValue.textContent);

  counterValue++;

  elementValue.textContent = counterValue;
});
