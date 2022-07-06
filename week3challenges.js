//VERY EASY
var num1 = 2; 
var num2 = 6; 
console.log("The difference between " + num1 + " and " + num2 + " is " + Math.abs(num1 - num2));

//EASY 
var name1 = "Angel"; 
var name2 = "Michelle"; 
console.log(name1.length);
if (name1.length > name2.length){
  console.log("The name " + name1 + " is " + (name1.length - name2.length) + " characters longer than " + name2);
}
else {
  console.log("The name " + name2 + " is " + (name2.length - name1.length) + " characters longer than " + name1);
}

//MEDIUM 
var words = prompt("Say something: "); 

if (words.toUpperCase() === words) {
  console.log("WHY ARE WE SHOUTING!?");
} else if (words.toLowerCase() === words) {
  console.log("why are we whispering?");
} else {
  console.log("Boring.");
}

//HARD
function add(s1, s2) {
    return s1 + s2;
}
function subtract(r1, r2) {
    return r1 - r2
}
function multiply(m1, m2) {
    return m1 * m2;
}
function divide(d1, d2) {
    return d1 / d2;
}

//VERY HARD
function add(s1, s2) {
    return s1 + s2;
}
function subtract(r1, r2) {
    return r1 - r2;
}
function multiply(m1, m2) {
    return m1 * m2;
}
function divide(d1, d2) {
    return d1 / d2;
}

var operator = prompt("Enter the operator (+, -, *, /): ");

var num1 = Number(prompt("Enter the first number: "));
var num2 = Number(prompt("Enter the second number: "));

if (operator === "+") {
  console.log(add(num1, num2));
}
else if (operator === "-") {
  console.log(subtract(num1, num2));
}
else if (operator === "*") {
  console.log(multiply(num1, num2));
}
else {
  console.log(divide(num1, num2));
}