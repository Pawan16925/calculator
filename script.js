let operation = '';

function setOperation(op) {
    operation = op;
    updateDisplay();
}

function updateDisplay() {
    const buttons = document.querySelectorAll('.operations button');
    buttons.forEach(button => {
        if (button.textContent === operation) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Result: Please enter valid numbers';
        return;
    }

    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '×':
            result = num1 * num2;
            break;
        case '÷':
            if (num2 === 0) {
                result = 'Error: Division by zero';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Please select an operation';
    }
    
    document.getElementById('result').textContent = `Result: ${result}`;
}

function clearAll() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').textContent = 'Result: ';
    operation = '';
    updateDisplay();
}