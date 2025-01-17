document.addEventListener('DOMContentLoaded', () => {
    const resultField = document.getElementById('result');
    const buttons = document.querySelectorAll('.buttons button');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    function updateDisplay(value) {
        resultField.value = value;
    }

    function handleButtonClick(event) {
        const value = event.target.textContent;

        if (value === 'C') {
            currentInput = '';
            operator = '';
            previousInput = '';
            updateDisplay('0');
        } else if (value === '=') {
            try {
                if (currentInput) {
                    // Make sure to use safe evaluation and handle edge cases
                    const calculation = eval(currentInput.replace(/[^-()\d/*+.]/g, ''));
                    updateDisplay(calculation);
                    currentInput = calculation.toString();
                }
            } catch (error) {
                updateDisplay('Error');
                currentInput = '';
            }
        } else {
            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput === '') return;
                currentInput += ` ${value} `;
            } else {
                currentInput += value;
            }
            updateDisplay(currentInput);
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});
