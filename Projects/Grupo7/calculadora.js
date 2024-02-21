let currentInput = "";
let currentOperator = "";
let previousInput = "";
let shouldReset = false;

function handleButtonClick(event) {
    const buttonValue = event.target.textContent;

    if (buttonValue === "=") {
        calculateResult();
    } else if (buttonValue === "C") {
        resetCalculator();
    } else {
        updateDisplay(buttonValue);
    }
}

function updateDisplay(value) {
    const display = document.getElementById("display");

    if (shouldReset) {
        currentInput = "";
        shouldReset = false;
    }

    currentInput += value;
    display.textContent = currentInput;
}

function calculateResult() {
    const display = document.getElementById("display");

    try {
        previousInput = currentInput;
        currentInput = evaluateExpression(currentInput); // Use uma função para calcular o resultado
        display.textContent = currentInput;
        shouldReset = true;
    } catch (error) {
        display.textContent = "Error";
    }
}

function resetCalculator() {
    const display = document.getElementById("display");
    currentInput = "";
    previousInput = "";
    display.textContent = "0";
}

// Função para avaliar a expressão matemática
function evaluateExpression(expression) {
    return Function('"use strict"; return (' + expression + ')')();
}

// Event Listeners para os botões (supondo que existam botões com classes 'number', 'operator', 'clear' e 'equals')
const buttons = document.querySelectorAll('.number, .operator, .clear, .equals');

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});