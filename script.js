
const display = document.querySelector('.output');
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator');
const dot = document.getElementById("dot");
const equalsButton = document.querySelector(".equals");
const clear = document.querySelector('.clear');

let displayValue = "";
let storedNumber = "";
let clickedOperator = "";


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


numberButtons.forEach(number => {
    number.addEventListener('click', (e) => {  
        displayValue += number.value;
        display.textContent = displayValue;
        displayValue = storedNumber;
        console.log(displayValue);
        
    })
});
operatorButtons.forEach(operator => {
    operator.addEventListener('click', (e) => {
        clickedOperator = operator;
        display.textContent = clickedOperator;
        console.log(clickedOperator);
    })
});


dot.addEventListener("click", function() {
    if (display.textContent.includes('.')) return
  display.textContent += '.'
});
equalsButton.addEventListener('click', displayResults)


function displayResults() {

        display.textContent = operate(clickedOperator,parseFloat(displayValue),parseFloat(storedNumber));
        

}
function clearDisplay() {
    display.textContent = "";
    storedNumber = "";
    displayValue = "";
    result = "";
    clickedOperator = "";

}



clear.addEventListener('click', clearDisplay);
console.log(operate("*",5,5));