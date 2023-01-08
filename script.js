//FIX WHERE CANT PUT NUMBER AFTER DEIMCAL

let firstOperand = 0
let operator = ''
let secondOperand = 0
let result = 0
let readyForDecimal = true
let readyForFirstOperand = true
let readyForOperator = false
let readyForSecondOperand = false
let readyForResult = false
document.getElementById("UI_Display_1").innerHTML = 0

function debug() {
    console.log("readyForDecimal: " + readyForDecimal)
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
    readyForDecimal = true
    readyForFirstOperand = true
    readyForOperator = false
    readyForSecondOperand = false
    readyForResult = false
    document.getElementById("UI_Display_1").innerHTML = 0
}

function inputOperand(a) { 
    if (readyForFirstOperand) {
        //if (firstOperand == 0) {
          //  firstOperand = parseInt(firstOperand)
        //}
        firstOperand = firstOperand + a
        if (readyForDecimal) {
            firstOperand = parseInt(firstOperand)
        }
        if (readyForOperator == false) {
            readyForOperator = true
        }
        document.getElementById("UI_Display_1").innerHTML = firstOperand
        firstOperand = parseFloat(firstOperand) 
    }
    if (readyForSecondOperand) {
        //if (secondOperand == 0) {
         //   secondOperand = parseInt(secondOperand)
        //}
        secondOperand = secondOperand + a
        if (readyForDecimal) {
            secondOperand = parseInt(secondOperand)
        }
        if (readyForOperator) {
            readyForOperator = false
        }
        if (readyForResult == false) {
            readyForResult = true
        }
        document.getElementById("UI_Display_1").innerHTML = secondOperand
        secondOperand = parseFloat(secondOperand)
    }
}

function inputOperator(a) {
    if (readyForOperator) {
        operator = a
        readyForDecimal = true
        readyForFirstOperand = false
        readyForSecondOperand = true
        document.getElementById("UI_Display_2").innerHTML = operator
    }
}

function inputDecimal(a) {
    if (readyForFirstOperand && readyForDecimal) {
        firstOperand = firstOperand + a
        //firstOperand = parseInt(firstOperand)
        readyForDecimal = false
        document.getElementById("UI_Display_1").innerHTML = firstOperand
        //firstOperand = parseInt(firstOperand)
    }
    if (readyForSecondOperand && readyForDecimal) {
        secondOperand = secondOperand + a
        //secondOperand = parseInt(secondOperand)
        readyForDecimal = false
        document.getElementById("UI_Display_1").innerHTML = secondOperand
        //secondOperand = parseInt(secondOperand)
    }
}
function getResult() {
    if (readyForResult) {
        switch(operator) {
            case "+":
                result = firstOperand + secondOperand
                firstOperand = result
                document.getElementById("UI_Display_1").innerHTML = result
                readyForDecimal = true
                readyForOperator = true
                readyForResult = false
                secondOperand = 0
                break
            case "-":
                result = firstOperand - secondOperand
                firstOperand = result
                document.getElementById("UI_Display_1").innerHTML = result
                readyForDecimal = true
                readyForOperator = true
                readyForResult = false
                secondOperand = 0
                break
            case "*":
                result = firstOperand * secondOperand
                firstOperand = result
                document.getElementById("UI_Display_1").innerHTML = result
                readyForDecimal = true
                readyForOperator = true
                readyForResult = false
                secondOperand = 0
                break
            case "/":
                result = firstOperand / secondOperand
                readyForDecimal = true
                firstOperand = result
                document.getElementById("UI_Display_1").innerHTML = result
                readyForOperator = true
                readyForResult = false
                secondOperand = 0
                break
        }
    }
}