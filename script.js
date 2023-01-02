let firstOperand = 0
let operator = ''
let secondOperand = 0
let result = 0
let readyForFirstOperand = true
let readyForOperator = false
let readyForSecondOperand = false
let readyForResult = false
document.getElementById("UI_Display").innerHTML = 0

function debug() {
    console.log("firstOperand: " + firstOperand)
    console.log("operator: " + operator)
    console.log("secondOperand: " + secondOperand)
    console.log("result: " + result)
    console.log("readyForFirstOperand: " + readyForFirstOperand)
    console.log("readyForOperator: " + readyForOperator)
    console.log("readyForSecondOperand: " + readyForSecondOperand)
    console.log("readyForResult: " + readyForResult) 
}

function allClear() {
    firstOperand = 0
    operator = ''
    secondOperand = 0
    result = 0
    readyForFirstOperand = true
    readyForOperator = false
    readyForSecondOperand = false
    readyForResult = false
    document.getElementById("UI_Display").innerHTML = 0
}

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
                firstOperand = result
                document.getElementById("UI_Display").innerHTML = result
                readyForOperator = true
                readyForResult = false
                secondOperand = 0
                break
            case "-":
                result = firstOperand - secondOperand
                firstOperand = result
                document.getElementById("UI_Display").innerHTML = result
                readyForOperator = true
                readyForResult = false
                secondOperand = 0
                break
            case "*":
                result = firstOperand * secondOperand
                firstOperand = result
                document.getElementById("UI_Display").innerHTML = result
                readyForOperator = true
                readyForResult = false
                secondOperand = 0
                break
            case "/":
                result = firstOperand / secondOperand
                firstOperand = result
                document.getElementById("UI_Display").innerHTML = result
                readyForOperator = true
                readyForResult = false
                secondOperand = 0
                break
        }
    }
}