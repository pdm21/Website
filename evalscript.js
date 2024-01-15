function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let expression = document.getElementById('display').value;
    
    try {
        let result = eval(expression); // Using eval for simplicity; be cautious with it in production
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    // Prevent adding multiple decimal points in a number
    if (value === '.' && display.value.includes('.')) {
        return;
    }

    // If display is empty or starts with an operator, add '0' before the decimal
    if ((display.value === '' || ['+', '-', '*', '/'].includes(display.value.slice(-1))) && value === '.') {
        display.value += '0';
    }
    
    display.value += value;
}
// Change sign, as in iPhone calc
function toggleSign() {
    const display = document.getElementById('display');
    let value = parseFloat(display.value);

    // Toggle the sign of the value
    value = -value;

    // Update the display with the new value
    display.value = value.toString();
}

// take percent
function percent() {
    const display = document.getElementById('display');
    let value = parseFloat(display.value);

    // Take percent of value
    value = value / 100;

    // Update the display with the new value
    display.value = value.toString();

}