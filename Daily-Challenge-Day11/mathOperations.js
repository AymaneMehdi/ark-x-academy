// Function to add two numbers
function addNumbers(num1, num2) {
  return num1 + num2;
};
// Function to subtract two numbers
function subtractNumbers(num1, num2) {
  return num1 - num2;
};
// Function to multiply two numbers
function multiplyNumbers(num1, num2) {
  return num1 * num2;
};
// Function to divide two numbers
function divideNumbers(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Cannot divide by zero!";
  }
};
