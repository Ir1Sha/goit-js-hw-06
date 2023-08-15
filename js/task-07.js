const inputFontSize = document.getElementById("font-size-control");
const textValue = document.getElementById("text");

inputFontSize.addEventListener("input", function () {
  const fontSize = `${inputFontSize.value}px`;
  textValue.style.fontSize = fontSize;
});
