let output

//Control Panel

let additionInput = 1
let subtractionInput = 1
let multiplicationInput = 1
let divisionInput = 1

//Functions (like buttons on a physical calculator)

    //addition

let addition = () => {
output = output + additionInput
document.getElementById("addition").innerHTML = output
}

    //subtraction
let subtraction = () => {
output = output - subtractionInput

document.getElementById("subtraction").innerHTML = output
}

    //multiplication
let multiplication = () => {
output = output * multiplicationInput
document.getElementById("multiplication").innerHTML = output
}

    //division
let division = () => {
output = output / divisionInput
document.getElementByClassName("division").innerHTML = output
}

document.getElementById("Display").innerHTML = output
console.log(output)