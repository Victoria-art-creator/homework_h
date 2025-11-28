"use strict";

class Calculator {
  add(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(...numbers) {
    return numbers.reduce((res, num) => res * num, 1);
  }

  divide(a, b) {
    if (b === 0) {
      return "Error: division by zero!";
    }
    return a / b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 2)); // 4

console.log(calc.add(1, 2, 3, 4, 5)); // 15
console.log(calc.multiply(2, 3, 4)); // 24
