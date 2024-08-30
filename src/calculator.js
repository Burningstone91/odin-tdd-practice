class Calculator {
  isValidInput(num1, num2) {
    return typeof num1 === "number" && typeof num2 === "number";
  }

  add(num1, num2) {
    if (!this.isValidInput(num1, num2)) return "Input is not valid";
    return num1 + num2;
  }

  subtract(num1, num2) {
    if (!this.isValidInput(num1, num2)) return "Input is not valid";
    return num1 - num2;
  }

  multiply(num1, num2) {
    if (!this.isValidInput(num1, num2)) return "Input is not valid";
    return num1 * num2;
  }

  divide(num1, num2) {
    if (!this.isValidInput(num1, num2)) return "Input is not valid";
    return num1 / num2;
  }
}

export default Calculator;
