// Add function
function add(num1, num2){
    return num1 + num2;
}

// Subtract function
function subtract(num1, num2){
    return num1 - num2;
}

// multiply funciton
function multiply(num1, num2){
    return num1 * num2;
}

// divide function
function divide(num1, num2){
    return num1 / num2;
}

// operate function
function operate(num1, num2, String){
    if (String == "+") {
        return add(num1, num2);
    } else if (String == "-") {
        return subtract(num1, num2);
    } else if (String == "*") {
        return multiply(num1, num2);
    } else if (String == "/") {
        return divide(num1, num2);
    }
};
