'use strict'

function calculate(event) {
    const inputValue = event.target.value;
    const expression = /\+|\*|\-|\//;

    const numbers = inputValue.split(expression);

    const number1 = +numbers[0];
    const number2 = +numbers[1];

    const operation = inputValue.match(expression);

    if(isNaN(number1) || isNaN(number2) || operation===null) {
        updateResult('Operation not recognized');
        return; 
    }

    const operator = operation[0];

    const calculator = new Calculator();
    calculator.add(number1);

    let result;
    switch (operator) {
        case '+':
            result = calculator.add(number2);
            break;
        case '-':
            result = calculator.subtract(number2);
            break;
        case '*':
            result = calculator.multiply(number2);
            break;
        case '/':
            result = calculator.divide(number2);
            break;
    }
    updateResult(result);
}

function updateResult(result) {
    let element = document.getElementById('result');
    if (element) {
        element.innerText = result;
    }
}

document.getElementById('inputValue').addEventListener('change', calculate);