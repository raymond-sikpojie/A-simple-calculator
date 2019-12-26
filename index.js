const firstInput = document.querySelector(".input1");
const secondInput = document.querySelector(".input2");
const addBtn = document.querySelector(".add-button");
const subtractBtn = document.querySelector(".subtract-button");
const multiplyBtn = document.querySelector(".multiply-button");
const divideBtn = document.querySelector(".divide-button");
const outputContainer = document.querySelector(".output-area");

// Mathematical functions
const sum = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

// Display result on screen
const displayResult = mathOperation => {
  const result = document.createElement("p");
  result.textContent = mathOperation;
  outputContainer.appendChild(result);
  return result;
};

// Adding numbers
addBtn.addEventListener("click", e => {
  const numObject = {
    number1: firstInput.value,
    number2: secondInput.value
  };

  localStorage.setItem("numbers", JSON.stringify(numObject));
  const addition = sum(
    parseInt(numObject.number1, 10),
    parseInt(numObject.number2, 10)
  );

  displayResult(addition);
});

// Subtracting numbers
subtractBtn.addEventListener("click", e => {
  const numObject = {
    number1: firstInput.value,
    number2: secondInput.value
  };

  localStorage.setItem("numbers", JSON.stringify(numObject));
  const subtraction = subtract(
    parseInt(numObject.number1, 10),
    parseInt(numObject.number2, 10)
  );

  displayResult(subtraction);
});

// Multiplying numbers
multiplyBtn.addEventListener("click", e => {
  const numObject = {
    number1: firstInput.value,
    number2: secondInput.value
  };

  localStorage.setItem("numbers", JSON.stringify(numObject));
  const multiplication = multiply(
    parseInt(numObject.number1, 10),
    parseInt(numObject.number2, 10)
  );

  displayResult(multiplication);
});

// Dividing numbers
divideBtn.addEventListener("click", e => {
  const numObject = {
    number1: firstInput.value,
    number2: secondInput.value
  };

  localStorage.setItem("numbers", JSON.stringify(numObject));
  const division = divide(
    parseInt(numObject.number1, 10),
    parseInt(numObject.number2, 10)
  );

  displayResult(division);
});
