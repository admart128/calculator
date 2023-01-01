let firstOperand = 0
let operator = ''
let secondOperand = 0
let result = 0
let readyForFirstOperand = true
let readyForOperator = false
let readyForSecondOperand = false
let readyForResult = false

function inputOperand(a) { 
    if (readyForFirstOperand) {
        firstOperand = firstOperand + a
        firstOperand = parseInt(firstOperand)
        if (readyForOperator == false) {
            readyForOperator = true
        }
        document.getElementById("UI_Display").innerHTML = firstOperand 
    }
    if (readyForSecondOperand) {
        secondOperand = secondOperand + a
        secondOperand = parseInt(secondOperand)
        if (readyForOperator) {
            readyForOperator = false
        }
        if (readyForResult == false) {
            readyForResult = true
        }
        document.getElementById("UI_Display").innerHTML = secondOperand
    }
}

function inputOperator(a) {
    if (readyForOperator) {
        operator = a
        readyForFirstOperand = false
        readyForSecondOperand = true
        document.getElementById("UI_Display").innerHTML = operator
    }
}

function getResult() {
    if (readyForResult) {
        switch(operator) {
            case "+":
                result = firstOperand + secondOperand
                document.getElementById("UI_Display").innerHTML = result
                readyForFirstOperand = true
                readyForSecondOperand = false
                readyForResult = false
                break
            case "-":
                result = firstOperand - secondOperand
                document.getElementById("UI_Display").innerHTML = result
                readyForFirstOperand = true
                readyForSecondOperand = false
                readyForResult = false
                break
            case "*":
                result = firstOperand * secondOperand
                document.getElementById("UI_Display").innerHTML = result
                readyForFirstOperand = true
                readyForSecondOperand = false
                readyForResult = false
                break
            case "/":
                result = firstOperand / secondOperand
                document.getElementById("UI_Display").innerHTML = result
                readyForFirstOperand = true
                readyForSecondOperand = false
                readyForResult = false
                break
        }
    }
}