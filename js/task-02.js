const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addElement = (arr) => {
  return arr.map((element) => {
    const liElement = document.createElement("li");
    liElement.textContent = element;
    liElement.classList.add("item");
    return liElement;
  });
};

const ulElement = document.getElementById("ingredients");
const ingredientsList = addElement(ingredients);

ingredientsList.forEach((liElement) => {
  ulElement.appendChild(liElement);
});
