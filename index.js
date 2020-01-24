// Targeting the operation buttons
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const output = document.querySelector(".output-area");
const output2 = document.querySelector(".output-area2");

// Targeting the numeric keys
const oneKey = document.querySelector(".one");
const twoKey = document.querySelector(".two");
const threeKey = document.querySelector(".three");
const fourKey = document.querySelector(".four");
const fiveKey = document.querySelector(".five");
const sixKey = document.querySelector(".six");
const sevenKey = document.querySelector(".seven");
const eightKey = document.querySelector(".eight");
const nineKey = document.querySelector(".nine");
const zeroKey = document.querySelector(".zero");
const decimalKey = document.querySelector(".decimal");

// Create an array to store the values
let arrOfNumbers = [];

// Creating the function to display the digits being inputed
const createDigits = (keyValue) => {
  const digit = document.createElement("p");
  digit.textContent = keyValue;
  output.appendChild(digit);
};

const keyEvent = (key) => {
  document.addEventListener("keydown", (e) => {
    if (e.key == key) {
      let keyString = key.toString();
      arrOfNumbers.push(key);
      createDigits(keyString);
    }
  });
};
keyEvent(1);
keyEvent(2);
keyEvent(3);
keyEvent(4);
keyEvent(5);
keyEvent(6);
keyEvent(7);
keyEvent(8);
keyEvent(9);
keyEvent(0);
keyEvent(".");
keyEvent("/");
keyEvent("*");
keyEvent("+");
keyEvent("-");

// Adding Eventlisteners to Number keys

oneKey.addEventListener("click", (e) => {
  arrOfNumbers.push(1);
  createDigits("1");
});

twoKey.addEventListener("click", (e) => {
  arrOfNumbers.push(2);
  createDigits("2");
});

threeKey.addEventListener("click", (e) => {
  arrOfNumbers.push(3);
  createDigits("3");
});

fourKey.addEventListener("click", (e) => {
  arrOfNumbers.push(4);
  createDigits("4");
});

fiveKey.addEventListener("click", (e) => {
  arrOfNumbers.push(5);
  createDigits("5");
});

sixKey.addEventListener("click", (e) => {
  arrOfNumbers.push(6);
  createDigits("6");
});

sevenKey.addEventListener("click", (e) => {
  arrOfNumbers.push(7);
  createDigits("7");
});

eightKey.addEventListener("click", (e) => {
  arrOfNumbers.push(8);
  createDigits("8");
});

nineKey.addEventListener("click", (e) => {
  arrOfNumbers.push(9);
  createDigits("9");
});

zeroKey.addEventListener("click", (e) => {
  arrOfNumbers.push(0);
  createDigits("0");
});

decimalKey.addEventListener("click", (e) => {
  arrOfNumbers.push(".");
  output.textContent = ".";
});

// Adding Eventlisteners to the operation buttons
addBtn.addEventListener("click", (e) => {
  arrOfNumbers.push("+");
  output.textContent = "+";
});

subtractBtn.addEventListener("click", (e) => {
  arrOfNumbers.push("-");
  output.textContent = "−";
});

multiplyBtn.addEventListener("click", (e) => {
  arrOfNumbers.push("*");
  output.textContent = "x";
});

divideBtn.addEventListener("click", (e) => {
  arrOfNumbers.push("/");
  output.textContent = "/";
});

equalBtn.addEventListener("click", () => {
  const arrToString = arrOfNumbers.join("");
  let finalEval = eval(arrOfNumbers.join(""));
  // the following 2 lines will empty the array and push into it, the final evaluated value
  arrOfNumbers = [];
  arrOfNumbers.push(finalEval);
  output2.textContent = `${arrToString}`;
  output.textContent = `${finalEval}`;
});

// Keyboard Event for Enter key
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     const arrToString = arrOfNumbers.join("");
//     let finalEval = eval(arrOfNumbers.join(""));
//     // the following 2 lines will empty the array and push into it, the final evaluated value
//     arrOfNumbers = [];
//     arrOfNumbers.push(finalEval);
//     output2.textContent = `${arrToString}`;
//     output.textContent = `${finalEval}`;
//   }
// });

clearBtn.addEventListener("click", (e) => {
  output.textContent = "";
  output2.textContent = "";
  arrOfNumbers = [];
});

deleteBtn.addEventListener("click", (e) => {
  const x = output.lastElementChild;
  if (x === null) {
    return;
  } else {
    x.remove();
    arrOfNumbers.pop();
  }
});

// Keyboard event for Delete key
// document.addEventListener("keydown", (e) => {
//   const x = output.lastElementChild;
//   if (x === null) {
//     return;
//   } else {
//     x.remove();
//     arrOfNumbers.pop();
//   }
// });
