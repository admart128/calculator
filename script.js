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

//print calculation