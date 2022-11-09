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
const numberButtons = document.querySelectorAll('number')
console.log(operate("-",5,5));
appendNumber(number); {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }