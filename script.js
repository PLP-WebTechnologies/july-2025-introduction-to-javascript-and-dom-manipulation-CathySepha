// =========================
// Part 1: Variables & Conditionals
// =========================
let age = 20; // Example variable
if (age >= 18) {
  document.getElementById("conditional-output").textContent =
    "You are an adult.";
} else {
  document.getElementById("conditional-output").textContent =
    "You are a minor.";
}

// =========================
// Part 2: Functions
// =========================
function calculateTotal(price, quantity) {
  return price * quantity;
}

function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

// Display function results
document.getElementById("function-output").textContent =
  greetUser("Cathy") + " Your total is: " + calculateTotal(5, 3);

// =========================
// Part 3: Loops
// =========================
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let list = document.getElementById("loop-output");

// For loop example
for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = fruits[i];
  list.appendChild(li);
}

// While loop example
let counter = 3;
while (counter > 0) {
  console.log("Countdown: " + counter);
  counter--;
}

// =========================
// Part 4: DOM Interactions
// =========================
let btn = document.getElementById("dom-btn");
btn.addEventListener("click", function () {
  let text = document.getElementById("dom-text");
  text.textContent = "🎉 You clicked the button!";
  text.style.color = "teal"; // DOM style change
  text.style.fontWeight = "bold";
});
