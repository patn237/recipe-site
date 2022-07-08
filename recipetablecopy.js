// Model
// View
// Controller

let sel = document.getElementById("num-of-servings");

function servingSize(sel) {
  selValue = sel.options[sel.selectedIndex].value;
  selText = sel.options[sel.selectedIndex].text;

  if (sel === "first") {
    document.getElementById("first-ingredient").innerHTML = (1 * selText) + " pounds of beef";
    document.getElementById("second-ingredient").innerHTML = (1 * selText) + " teaspoons of salt";
    document.getElementById("third-ingredient").innerHTML = (1 * selText) + " teaspoons of pepper";
  } else if (sel === "second") {
    document.getElementById("first-ingredient").innerHTML = (1 * selText) + " pounds of beef";
    document.getElementById("second-ingredient").innerHTML = (1 * selText) + " teaspoons of salt";
    document.getElementById("third-ingredient").innerHTML = (1 * selText) + " teaspoons of pepper";
  } else if (sel === "third") {
    document.getElementById("first-ingredient").innerHTML = (1 * selText) + " pounds of beef";
    document.getElementById("second-ingredient").innerHTML = (1 * selText) + " teaspoons of salt";
    document.getElementById("third-ingredient").innerHTML = (1 * selText) + " teaspoons of pepper";
  } else if (sel === "fourth") {
    document.getElementById("first-ingredient").innerHTML = (1 * selText) + " pounds of beef";
    document.getElementById("second-ingredient").innerHTML = (1 * selText) + " teaspoons of salt";
    document.getElementById("third-ingredient").innerHTML = (1 * selText) + " teaspoons of pepper";
  }
}
