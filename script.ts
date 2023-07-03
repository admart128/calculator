let firstOperand: string = ''
let secondOperand: string = ''
let operator: string = ''
let result: string = "0"
let readyForFirstOperand: boolean = true
let readyForOperator: boolean = true
let readyForSecondOperand: boolean = false
let readyToOperate: boolean = false
let readyForFirstDecimal: boolean = true
let readyForSecondDecimal: boolean = false
document.getElementById("display-container")!.innerText = "0"

function allClear() {
    firstOperand = ''
    secondOperand = ''
    operator = ''
    result = "0"
    readyForFirstOperand = true
    readyForOperator = true
    readyForSecondOperand = false
    readyToOperate = false
    readyForFirstDecimal = true
    readyForSecondDecimal = false
    document.getElementById("display-container")!.innerText = "0"
}

function inputDecimal(a) {
    if (readyForFirstDecimal) {
        if (document.getElementById("display-container")!.innerText == '0') {
            document.getElementById("display-container")!.innerText = "0."
            readyForFirstDecimal = false
            readyForOperator = false
        }
        else if (document.getElementById("display-container")!.innerText !== '0') {
            document.getElementById("display-container")!.innerText = a
            readyForFirstDecimal = false
            readyForOperator = false
        }
    }
    else if (readyForSecondDecimal) {
        secondOperand = secondOperand + a
        document.getElementById("display-container")!.innerText = document.getElementById("display-container")!.innerText + a
        readyForSecondDecimal = false
    }
}

function inputOperand(a) { 
    if (readyForFirstOperand) {
        if (document.getElementById("display-container")!.innerText == result && readyForFirstDecimal == true) {
            document.getElementById("display-container")!.innerText = a
        }
        else document.getElementById("display-container")!.innerText = document.getElementById("display-container")!.innerText + a
    }
    else if (readyForSecondOperand) {
        readyForOperator = false
        document.getElementById("display-container")!.innerText = document.getElementById("display-container")!.innerText + a
        secondOperand = secondOperand + a
        readyToOperate = true
    }
}

function inputOperator(a) {
    if (operator == '') {
            let lastChar = document.getElementById("display-container")!.innerText.slice(-1);
            if (lastChar !== '.' && readyForSecondOperand == false) {
            operator = a
            firstOperand = document.getElementById("display-container")!.innerText
            readyForFirstOperand = false
            readyForSecondOperand = true
            document.getElementById("display-container")!.innerText = document.getElementById("display-container")!.innerText + a
            readyForFirstDecimal = false
            readyForSecondDecimal = true
        }
    }
    else if (operator !== '') {
        let lastChar = document.getElementById("display-container")!.innerText.slice(-1);
        let operators = ["+", "-", "*", "/"];
        if (operators.includes(lastChar)) {
            operator = a;
            document.getElementById("display-container")!.innerText = document.getElementById("display-container")!.innerText.slice(0, -1) + a;
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

function operate(a: string, b: string, operator: string) {
    if (readyToOperate) {
        a = Number(firstOperand)
        b = Number(secondOperand)
        switch(operator) {
        case "+":
            result = String(add(a, b));
            clearAndCarryResult();
            break;
        case "-":
            result = String(subtract(a, b));
            clearAndCarryResult();
            break;
        case "*":
            result = String(multiply(a, b));
            clearAndCarryResult();
            break;
        case "/":
            if (b == 0) {
                alert("Cannot divide by zero.")
            }    
            else result = String(divide(a, b));
            clearAndCarryResult();
            break;
        default:
            return ''
        }
    }     
}

function clearAndCarryResult() {
    document.getElementById("display-container")!.innerText = result;
    firstOperand = '';
    secondOperand = '';
    operator = '';
    readyForFirstOperand = true;
    readyForOperator = true;
    readyForSecondOperand = false;
    readyToOperate = false;
    readyForFirstDecimal = true
    readyForSecondDecimal = false
}

document.addEventListener("keydown", 
    (event) => {
        const key = event.key;
        if (key >= "0" && key <= "9") {
            document.getElementById(`button-${key}`)!.click();
        }
        else if (key === ".") {
            document.getElementById('button-decimal')!.click();
        } 
        else if (key === "+") {
            document.getElementById('button-add')!.click();
        } 
        else if (key === "-") {
            document.getElementById('button-subtract')!.click();
        } 
        else if (key === "*") {
            document.getElementById('button-multiply')!.click();
        } 
        else if (key === "/") {
            document.getElementById('button-divide')!.click();
        } 
        else if (key === "Enter" || key === "=") {
            document.getElementById('button-operate')!.click();
        } 
        else if (key === "Escape") {
            allClear();
        }
    }
);