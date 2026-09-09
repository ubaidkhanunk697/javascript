let num1 = +prompt("Enter the first number");
let num2 = +prompt("Enter the second number");
let operator = prompt("Enter operator (+, -, *, /)");

if (operator === "+") {
  console.log(`The sum of ${num1} ${operator} ${num2} = ${num1 + num2}`);
} else if (operator === "-") {
  console.log(`The sub of ${num1} ${operator} ${num2} = ${num1 - num2}`);
} else if (operator === "*") {
  console.log(`The multi of ${num1} ${operator} ${num2} = ${num1 * num2}`);
} else if (operator === "/") {
  console.log(`The div of ${num1} ${operator} ${num2} = ${num1 / num2}`);
}
