class Calculator {
    constructor(num1, num2) {
        this.a = num1;
        this.b = num2;

    }
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            return "Error: division by zero is forbidden"
        }
        return a / b;
    }
}

const calc = new Calculator()
console.log(calc.add(5, 3));
console.log(calc.subtract(5, 3));
console.log(calc.multiply(5, 3));
console.log(calc.divide(5, 3));
console.log(calc.divide(5, 0));

