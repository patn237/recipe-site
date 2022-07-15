// Model
// View
// Controller

let sel = document.getElementById("num-of-servings");

// function servingSize(sel) {
//   selValue = sel.options[sel.selectedIndex].value;
//   selText = sel.options[sel.selectedIndex].text;

//   if (selValue === "first") {
//     document.getElementById("first-ingredient").innerHTML = (1 * selText) + " pounds of beef";
//     document.getElementById("second-ingredient").innerHTML = (1 * selText) + " teaspoons of salt";
//     document.getElementById("third-ingredient").innerHTML = (1 * selText) + " teaspoons of pepper";
//   } else if (selValue === "second") {
//     document.getElementById("first-ingredient").innerHTML = (1 * selText) + " pounds of beef";
//     document.getElementById("second-ingredient").innerHTML = (1 * selText) + " teaspoons of salt";
//     document.getElementById("third-ingredient").innerHTML = (1 * selText) + " teaspoons of pepper";
//   } else if (selValue === "third") {
//     document.getElementById("first-ingredient").innerHTML = (1 * selText) + " pounds of beef";
//     document.getElementById("second-ingredient").innerHTML = (1 * selText) + " teaspoons of salt";
//     document.getElementById("third-ingredient").innerHTML = (1 * selText) + " teaspoons of pepper";
//   } else if (selValue === "fourth") {
//     document.getElementById("first-ingredient").innerHTML = (1 * selText) + " pounds of beef";
//     document.getElementById("second-ingredient").innerHTML = (1 * selText) + " teaspoons of salt";
//     document.getElementById("third-ingredient").innerHTML = (1 * selText) + " teaspoons of pepper";
//   }
// }

function servingSize(sel) {
  let firstIngredient = document.getElementById("first-ingredient");
  let secondIngredient = document.getElementById("second-ingredient");
  let thirdIngredient = document.getElementById("third-ingredient");

  const selText = sel.options[sel.selectedIndex].text;

  firstIngredient.innerText = `${selText} pounds of beef`;
  secondIngredient.innerText = `${selText} teaspoons of salt`;
  thirdIngredient.innerText = `${selText} teaspoons of pepper`;
}


// function servingSize(e) {
//   const sel = e.value;
//   const selText = parseInt(e.options[e.selectedIndex].innerText);

//   if (sel === "first") {
//     document.getElementById("first-ingredient").innerText = (1 * selText) + " pounds of beef";
//     document.getElementById("second-ingredient").innerText = (1 * selText) + " teaspoons of salt";
//     document.getElementById("third-ingredient").innerText = (1 * selText) + " teaspoons of pepper";
//   } else if (sel === "second") {
//     document.getElementById("first-ingredient").innerText = (1 * selText) + " pounds of beef";
//     document.getElementById("second-ingredient").innerText = (1 * selText) + " teaspoons of salt";
//     document.getElementById("third-ingredient").innerText = (1 * selText) + " teaspoons of pepper";
//   } else if (sel === "third") {
//     document.getElementById("first-ingredient").innerText = (1 * selText) + " pounds of beef";
//     document.getElementById("second-ingredient").innerText = (1 * selText) + " teaspoons of salt";
//     document.getElementById("third-ingredient").innerText = (1 * selText) + " teaspoons of pepper";
//   } else if (sel === "fourth") {
//     document.getElementById("first-ingredient").innerText = (1 * selText) + " pounds of beef";
//     document.getElementById("second-ingredient").innerText = (1 * selText) + " teaspoons of salt";
//     document.getElementById("third-ingredient").innerText = (1 * selText) + " teaspoons of pepper";
//   }
// }
