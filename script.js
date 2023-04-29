let firstOperand = ''
let secondOperand = ''
let operator = null
let result = 0
let readyForFirstOperand = true
let readyForOperator = true
let readyForSecondOperand = false
let readyToOperate = false
document.getElementById("primary-display").innerText = 0

function allClear() {
    firstOperand = ''
    secondOperand = ''
    operator = null
    result = 0
    readyForFirstOperand = true
    readyForOperator = true
    readyForSecondOperand = false
    readyToOperate = false
    document.getElementById("primary-display").innerText = 0
}

function inputOperand(a) { 
    if (readyForFirstOperand) {
        if (document.getElementById("primary-display").innerText == result) {
            document.getElementById("primary-display").innerText = a
        }
        else document.getElementById("primary-display").innerText = document.getElementById("primary-display").innerText + a
        }
    else if (readyForSecondOperand) {
        document.getElementById("primary-display").innerText = document.getElementById("primary-display").innerText + a
        secondOperand = secondOperand + a
        readyToOperate = true
    }
}

function inputOperator(a) {
    if (operator == null) {
        if (readyForSecondOperand == false) {
            operator = a
            firstOperand = document.getElementById("primary-display").innerText
            readyForFirstOperand = false
            readyForSecondOperand = true
            document.getElementById("primary-display").innerText = document.getElementById("primary-display").innerText + a
        }
    }
    else if (operator !== null) {
        let lastChar = document.getElementById("primary-display").innerText.slice(-1);
        let operators = ["+", "-", "*", "/"];
        if (operators.includes(lastChar)) {
            operator = a;
            document.getElementById("primary-display").innerText = document.getElementById("primary-display").innerText.slice(0, -1) + a;
        }
    }    
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, b, operator) {
    if (readyToOperate) {
        a = Number(firstOperand)
        b = Number(secondOperand)
        switch(operator) {
        case "+":
            result = add(a, b);
            clearAndCarryResult();
            break;
        case "-":
            result = subtract(a, b);
            clearAndCarryResult();
            break;
        case "*":
            result = multiply(a, b);
            clearAndCarryResult();
            break;
        case "/":
            if (b == 0) {
                alert("Cannot divide by zero.")
            }    
            else result = divide(a, b);
            clearAndCarryResult();
            break;
        default:
            return ''
        }
    }     
}

function clearAndCarryResult() {
    document.getElementById("primary-display").innerText = result;
    firstOperand = '';
    secondOperand = '';
    readyForFirstOperand = true;
    readyForOperator = true;
    readyForSecondOperand = false;
    readyToOperate = false;
    operator = null;
}