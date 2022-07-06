// Model
// View
// Controller


function servingSize() {
  let selection = document.getElementById("num-of-servings").value;

  if (selection === "1") {
    document.getElementById("first-ingredient").innerHTML = "1 pound of beef";
    document.getElementById("second-ingredient").innerHTML = "1 teaspoon of salt";
    document.getElementById("third-ingredient").innerHTML = "1 teaspoon of pepper";
  } else if (selection === "2") {
    document.getElementById("first-ingredient").innerHTML = (1 * selection) + " pounds of beef";
    document.getElementById("second-ingredient").innerHTML = (1 * selection) + " teaspoons of salt";
    document.getElementById("third-ingredient").innerHTML = (1 * selection) + " teaspoons of pepper";
  } else if (selection === "4") {
    document.getElementById("first-ingredient").innerHTML = (1 * selection) + " pounds of beef";
    document.getElementById("second-ingredient").innerHTML = (1 * selection) + " teaspoons of salt";
    document.getElementById("third-ingredient").innerHTML = (1 * selection) + " teaspoons of pepper";
  } else {
    document.getElementById("first-ingredient").innerHTML = (1 * selection) + " pounds of beef";
    document.getElementById("second-ingredient").innerHTML = (1 * selection) + " teaspoons of salt";
    document.getElementById("third-ingredient").innerHTML = (1 * selection) + " teaspoons of pepper";
  }
}
