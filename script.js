// Define four functions: add(), subtract(), divide(), multiply()
// Each function should:
// 1. Retrieve the current values of the input fields with id="num1-el" and id="num2-el"
//    (use Number() to ensure these are treated as numbers, not strings)
// 2. Perform the relevant calculation
// 3. Update the paragraph with id="sum-el" to display the result

// For example, if the user enters "8" and "2", and then clicks the "Add" button,
// the add() function should render "Sum: 10" inside the paragraph with id="sum-el"

function add() {
  let num1 = Number(document.getElementById("num1-el").value);
  let num2 = Number(document.getElementById("num2-el").value);
  let sum = num1 + num2;
  return document.getElementById("sum-el").textContent = `Sum: ${sum}`
}

function subtract() {
  let num1 = Number(document.getElementById("num1-el").value);
  let num2 = Number(document.getElementById("num2-el").value);
  let sum = num1 - num2;
  return document.getElementById("sum-el").textContent = `Sum: ${sum}`
}

function divide() {
  let num1 = Number(document.getElementById("num1-el").value);
  let num2 = Number(document.getElementById("num2-el").value);
  let sum = num1 / num2;
  return document.getElementById("sum-el").textContent = `Sum: ${sum}`
}

function multiply() {
  let num1 = Number(document.getElementById("num1-el").value);
  let num2 = Number(document.getElementById("num2-el").value);
  let sum = num1 * num2;
  return document.getElementById("sum-el").textContent = `Sum: ${sum}`
}
