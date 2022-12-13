
const previousScreen= document.querySelector('[data-previous-operand]')
const currentScreen = document.querySelector('[data-current-operand]')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator');
const dot = document.getElementById("dot");
const equalsButton = document.querySelector(".equals");
const clear = document.querySelector('.clear');

let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false



equalsButton.addEventListener('click', evaluate)

function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(6,6));

function subtractNumbers(num1, num2) {
    return num1 - num2;
}
console.log(subtractNumbers(1,6));

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
console.log(multiplyNumbers(5, 9));

function divideNumbers(num1, num2) {
    return num1 / num2;
}
console.log(divideNumbers(451,5));

function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
    switch (operator) {
      case '+':
        return addNumbers(num1, num2)
      case '-':
        return subtractNumbers(num1, num2)
      case '*':
        return multiplyNumbers(num1, num2)
      case '/':
        if (num2 === 0) return null
        else return divideNumbers(num1, num2)
      default:
        return null
    }
}


numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)
function appendNumber(number) {
  if (currentScreen.textContent === '0' || shouldResetScreen)
    resetScreen()
  currentScreen.textContent += number
}

function resetScreen() {
  currentScreen.textContent = ''
  shouldResetScreen = false
}


dot.addEventListener("click", function() {
    if (display.textContent.includes('.')) return
  display.textContent += '.'
});


function setOperation(operator) {
  if (currentOperation !== null) evaluate()
  firstOperand = currentScreen.textContent
  currentOperation = operator
  previousScreen.textContent = `${firstOperand} ${currentOperation}`
  shouldResetScreen = true
}


function clearDisplay() {
  currentScreen.textContent = '0'
  previousScreen.textContent = ''
  firstOperand = ''
  secondOperand = ''
  currentOperation = null
}
function evaluate() {
  if (currentOperation === null || shouldResetScreen) return
  if (currentOperation === '÷' && currentScreen.textContent === '0') {
    alert("You can't divide by 0!")
    return
  }
  secondOperand = currentScreen.textContent
  currentScreen.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand))

  previousScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
  currentOperation = null
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000
}
clear.addEventListener('click', clearDisplay);
console.log(operate("*",5,5));