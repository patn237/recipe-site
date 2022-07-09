// Model
// View
// Controller

let sel = document.getElementById("num-of-servings");

function servingSize(sel) {
  let firstIngredient = document.getElementById("first-ingredient");
  let secondIngredient = document.getElementById("second-ingredient");
  let thirdIngredient = document.getElementById("third-ingredient");

  const selText = sel.options[sel.selectedIndex].text;

  firstIngredient.innerText = `${selText} pounds of beef`;
  secondIngredient.innerText = `${selText} teaspoons of salt`;
  thirdIngredient.innerText = `${selText} teaspoons of pepper`;
}
