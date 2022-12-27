let calculation = 0
document.getElementById("ResultDisplay").innerHTML = calculation
let input = 0

//addition 
let addition = () => {
    input = document.getElementById("input").value
    input = parseInt(input)
    calculation = calculation + input
    document.getElementById("ResultDisplay").innerHTML = calculation
    }

//subtraction
let subtraction = () => {
    input = document.getElementById("input").value
    input = parseInt(input)
    calculation = calculation - input
    document.getElementById("ResultDisplay").innerHTML = calculation 
    }

//multiplication
let multiplication = () => {
    input = document.getElementById("input").value
    input = parseInt(input)
    calculation = calculation * input
    document.getElementById("ResultDisplay").innerHTML = calculation
    }

//division
let division = () => {
    input = document.getElementById("input").value
    input = parseInt(input)
    calculation = calculation / input
    document.getElementById("ResultDisplay").innerHTML = calculation
    }

    let input0 = () => {
        input = 0
        document.getElementById("ResultDisplay2").innerHTML = input
    }

    let input1 = () => {
        input = 1
        document.getElementById("ResultDisplay2").innerHTML = input
    }

    let input2 = () => {
        input = 2
        document.getElementById("ResultDisplay2").innerHTML = input
    }

    let input3 = () => {
        input = 3
        document.getElementById("ResultDisplay2").innerHTML = input
    }

    let input4 = () => {
        input = 4
        document.getElementById("ResultDisplay2").innerHTML = input
    }
    
    let input5 = () => {
        input = 5
        document.getElementById("ResultDisplay2").innerHTML = input
    }

    let input6 = () => {
        input = 6
        document.getElementById("ResultDisplay2").innerHTML = input
    }

    let input7 = () => {
        input = 7
        document.getElementById("ResultDisplay2").innerHTML = input
    }

    let input8 = () => {
        input = 8
        document.getElementById("ResultDisplay2").innerHTML = input
    }

    let input9 = () => {
        input = 9
        document.getElementById("ResultDisplay2").innerHTML = input
    }


    let operator

    let inputAddition = () => {
        operator = "+"
    }

    let inputSubtraction = () => {
        operator = "-"
    }

    let inputMultiplication = () => {
        operator = "*"
    }

    let inputDivision = () => {
       operator = "/" 
    }

    let calculateResult = () => {
        switch(operator) {
            case "+":
            console.log("Addition")
            break
            case "-":
            console.log("Subtraction")
            break
            case "*":
            console.log("Multiplication")
            break
            case "/":
            console.log("Division")
            break
        }

    }




    //print calculation