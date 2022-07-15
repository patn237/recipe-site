// Model
// View
// Controller

let sel = document.getElementById("num-of-servings");

window.onload = function() {
  // Display first option by default
  renderList();
  servingSize(sel);
};

function servingSize(sel) {

  // let firstIngredient = document.getElementById("first-ingredient");
  // let secondIngredient = document.getElementById("second-ingredient");
  // let thirdIngredient = document.getElementById("third-ingredient");

  const selText = sel.options[sel.selectedIndex].text;

  if (selText === "4") {
    fourServings();
  } else if (selText === "6") {
    sixServings();
  } else if (selText == "8") {
    eigthServings();
  } else {
    twelveServings();
  }

  // firstIngredient.innerText = `${selText} pounds of beef`;
  // secondIngredient.innerText = `${selText} teaspoons of salt`;
  // thirdIngredient.innerText = `${selText} teaspoons of pepper`;
}

function fourServings() {
  
  let firstIngredient = document.getElementById("first-ingredient");
  let secondIngredient = document.getElementById("second-ingredient");
  let thirdIngredient = document.getElementById("third-ingredient");
  let fourthIngredient = document.getElementById("fourth-ingredient");
  let fifthIngredient = document.getElementById("fifth-ingredient");
  let sixthIngredient = document.getElementById("sixth-ingredient");
  let seventhIngredient = document.getElementById("seventh-ingredient");
  let eigthIngredient = document.getElementById("eigth-ingredient");
  let ninthIngredient = document.getElementById("ninth-ingredient");
  let tenthIngredient = document.getElementById("tenth-ingredient");
  let eleventhIngredient = document.getElementById("eleventh-ingredient");
  let twelfthIngredient = document.getElementById("twelfth-ingredient");
  let thirteenthIngredient = document.getElementById("thirteenth-ingredient");
  let fourteenthIngredient = document.getElementById("fourteenth-ingredient");

  firstIngredient.innerText = "1.25 pound of ground beef";
  secondIngredient.innerText = ".75 yellow onion, diced";
  thirdIngredient.innerText = ".75 green pepper, diced";
  fourthIngredient.innerText = ".75 red pepper, diced";
  fifthIngredient.innerText = ".75 yellow pepper, diced";
  sixthIngredient.innerText = "1 4oz can of diced green chiles";
  seventhIngredient.innerText = ".75 tsp of garlic, minced";
  eigthIngredient.innerText = ".25 cup tomato paste";
  ninthIngredient.innerText = "1 15oz can of diced tomatoes";
  tenthIngredient.innerText = "1 15oz can of diced fire roasted tomatoes";
  eleventhIngredient.innerText = "1 cup bone beef broth";
  twelfthIngredient.innerText = "3 tbsp chili powder";
  thirteenthIngredient.innerText = ".75 tsp cumin";
  fourteenthIngredient.innerText = ".75 tsp salt";
}

function sixServings() {
  
  let firstIngredient = document.getElementById("first-ingredient");
  let secondIngredient = document.getElementById("second-ingredient");
  let thirdIngredient = document.getElementById("third-ingredient");
  let fourthIngredient = document.getElementById("fourth-ingredient");
  let fifthIngredient = document.getElementById("fifth-ingredient");
  let sixthIngredient = document.getElementById("sixth-ingredient");
  let seventhIngredient = document.getElementById("seventh-ingredient");
  let eigthIngredient = document.getElementById("eigth-ingredient");
  let ninthIngredient = document.getElementById("ninth-ingredient");
  let tenthIngredient = document.getElementById("tenth-ingredient");
  let eleventhIngredient = document.getElementById("eleventh-ingredient");
  let twelfthIngredient = document.getElementById("twelfth-ingredient");
  let thirteenthIngredient = document.getElementById("thirteenth-ingredient");
  let fourteenthIngredient = document.getElementById("fourteenth-ingredient");

  firstIngredient.innerText = "1.5 pounds of ground beef";
  secondIngredient.innerText = "1 yellow onion, diced";
  thirdIngredient.innerText = "1 green pepper, diced";
  fourthIngredient.innerText = "1 red pepper, diced";
  fifthIngredient.innerText = "1 yellow pepper, diced";
  sixthIngredient.innerText = "1 4oz can of diced green chiles";
  seventhIngredient.innerText = "1 tsp of garlic, minced";
  eigthIngredient.innerText = ".25 cup tomato paste";
  ninthIngredient.innerText = "1 15oz can of diced tomatoes";
  tenthIngredient.innerText = "1 15oz can of diced fire roasted tomatoes";
  eleventhIngredient.innerText = "1 cup bone beef broth";
  twelfthIngredient.innerText = "4 tbsp chili powder";
  thirteenthIngredient.innerText = "1 tsp cumin";
  fourteenthIngredient.innerText = "1 tsp salt";
}

function eigthServings() {
  
  let firstIngredient = document.getElementById("first-ingredient");
  let secondIngredient = document.getElementById("second-ingredient");
  let thirdIngredient = document.getElementById("third-ingredient");
  let fourthIngredient = document.getElementById("fourth-ingredient");
  let fifthIngredient = document.getElementById("fifth-ingredient");
  let sixthIngredient = document.getElementById("sixth-ingredient");
  let seventhIngredient = document.getElementById("seventh-ingredient");
  let eigthIngredient = document.getElementById("eigth-ingredient");
  let ninthIngredient = document.getElementById("ninth-ingredient");
  let tenthIngredient = document.getElementById("tenth-ingredient");
  let eleventhIngredient = document.getElementById("eleventh-ingredient");
  let twelfthIngredient = document.getElementById("twelfth-ingredient");
  let thirteenthIngredient = document.getElementById("thirteenth-ingredient");
  let fourteenthIngredient = document.getElementById("fourteenth-ingredient");

  firstIngredient.innerText = "1.75 pounds of ground beef";
  secondIngredient.innerText = "1.25 yellow onion, diced";
  thirdIngredient.innerText = "1.25 green pepper, diced";
  fourthIngredient.innerText = "1.25 red pepper, diced";
  fifthIngredient.innerText = "1.25 yellow pepper, diced";
  sixthIngredient.innerText = "1.25 4oz can of diced green chiles";
  seventhIngredient.innerText = "1.25 tsp of garlic, minced";
  eigthIngredient.innerText = ".50 cup tomato paste";
  ninthIngredient.innerText = "1.25 15oz can of diced tomatoes";
  tenthIngredient.innerText = "1.25 15oz can of diced fire roasted tomatoes";
  eleventhIngredient.innerText = "1.25 cup bone beef broth";
  twelfthIngredient.innerText = "5 tbsp chili powder";
  thirteenthIngredient.innerText = "1.25 tsp cumin";
  fourteenthIngredient.innerText = "1.25 tsp salt";
}

function twelveServings() {
  
  let firstIngredient = document.getElementById("first-ingredient");
  let secondIngredient = document.getElementById("second-ingredient");
  let thirdIngredient = document.getElementById("third-ingredient");
  let fourthIngredient = document.getElementById("fourth-ingredient");
  let fifthIngredient = document.getElementById("fifth-ingredient");
  let sixthIngredient = document.getElementById("sixth-ingredient");
  let seventhIngredient = document.getElementById("seventh-ingredient");
  let eigthIngredient = document.getElementById("eigth-ingredient");
  let ninthIngredient = document.getElementById("ninth-ingredient");
  let tenthIngredient = document.getElementById("tenth-ingredient");
  let eleventhIngredient = document.getElementById("eleventh-ingredient");
  let twelfthIngredient = document.getElementById("twelfth-ingredient");
  let thirteenthIngredient = document.getElementById("thirteenth-ingredient");
  let fourteenthIngredient = document.getElementById("fourteenth-ingredient");

  firstIngredient.innerText = "3 pounds of ground beef";
  secondIngredient.innerText = "2 yellow onion, diced";
  thirdIngredient.innerText = "2 green pepper, diced";
  fourthIngredient.innerText = "2 red pepper, diced";
  fifthIngredient.innerText = "2 yellow pepper, diced";
  sixthIngredient.innerText = "2 4oz can of diced green chiles";
  seventhIngredient.innerText = "2 tsp of garlic, minced";
  eigthIngredient.innerText = ".50 cup tomato paste";
  ninthIngredient.innerText = "2 15oz can of diced tomatoes";
  tenthIngredient.innerText = "2 15oz can of diced fire roasted tomatoes";
  eleventhIngredient.innerText = "2 cups bone beef broth";
  twelfthIngredient.innerText = "8 tbsp chili powder";
  thirteenthIngredient.innerText = "2 tsp cumin";
  fourteenthIngredient.innerText = "2 tsp salt";
}

function renderList() {
  
  const optionOne = document.createElement("li");
  optionOne.setAttribute("id","first-ingredient");
  const optionTwo = document.createElement("li");
  optionTwo.setAttribute("id","second-ingredient");
  const optionThree = document.createElement("li");
  optionThree.setAttribute("id","third-ingredient");
  const optionFour = document.createElement("li");
  optionFour.setAttribute("id","fourth-ingredient");
  const optionFive = document.createElement("li");
  optionFive.setAttribute("id","fifth-ingredient");
  const optionSix = document.createElement("li");
  optionSix.setAttribute("id","sixth-ingredient");
  const optionSeven = document.createElement("li");
  optionSeven.setAttribute("id","seventh-ingredient");
  const optionEight = document.createElement("li");
  optionEight.setAttribute("id","eigth-ingredient");
  const optionNine = document.createElement("li");
  optionNine.setAttribute("id","ninth-ingredient");
  const optionTen = document.createElement("li");
  optionTen.setAttribute("id","tenth-ingredient");
  const optionEleven = document.createElement("li");
  optionEleven.setAttribute("id","eleventh-ingredient");
  const optionTwelve = document.createElement("li");
  optionTwelve.setAttribute("id","twelfth-ingredient");
  const optionThirteen = document.createElement("li");
  optionThirteen.setAttribute("id","thirteenth-ingredient");
  const optionFourteen = document.createElement("li");
  optionFourteen.setAttribute("id","fourteenth-ingredient");

  const ingredientsList = document.getElementById("ingredient-list");
  ingredientsList.appendChild(optionOne);
  ingredientsList.appendChild(optionTwo);
  ingredientsList.appendChild(optionThree);
  ingredientsList.appendChild(optionFour);
  ingredientsList.appendChild(optionFive);
  ingredientsList.appendChild(optionSix);
  ingredientsList.appendChild(optionSeven);
  ingredientsList.appendChild(optionEight);
  ingredientsList.appendChild(optionNine);
  ingredientsList.appendChild(optionTen);
  ingredientsList.appendChild(optionEleven);
  ingredientsList.appendChild(optionTwelve);
  ingredientsList.appendChild(optionThirteen);
  ingredientsList.appendChild(optionFourteen);
}