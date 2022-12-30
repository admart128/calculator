//// 2022-12-27 THIS CODE IS A MESS. COMBINE FUNCTIONS INTO CLASSES NEXT.


let calculation = 0
document.getElementById("ResultDisplay").innerHTML = calculation
let inputForFirstCalculator = 0

//addition 
let addition = () => {
    inputForFirstCalculator = document.getElementById("inputForFirstCalculator").value
    inputForFirstCalculator = parseInt(inputForFirstCalculator)
    calculation = calculation + inputForFirstCalculator
    document.getElementById("ResultDisplay").innerHTML = calculation
    }

//subtraction
let subtraction = () => {
    inputForFirstCalculator = document.getElementById("inputForFirstCalculator").value
    inputForFirstCalculator = parseInt(inputForFirstCalculator)
    calculation = calculation - inputForFirstCalculator
    document.getElementById("ResultDisplay").innerHTML = calculation 
    }

//multiplication
let multiplication = () => {
    inputForFirstCalculator = document.getElementById("inputForFirstCalculator").value
    inputForFirstCalculator = parseInt(inputForFirstCalculator)
    calculation = calculation * inputForFirstCalculator
    document.getElementById("ResultDisplay").innerHTML = calculation
    }

//division
let division = () => {
    inputForFirstCalculator = document.getElementById("inputForFirstCalculator").value
    inputForFirstCalculator = parseInt(inputForFirstCalculator)
    calculation = calculation / inputForFirstCalculator
    document.getElementById("ResultDisplay").innerHTML = calculation
    }

///////////////////////////
//////////////////////////
///// OLD CALCULATOR ABOVE, NEW CALCULATOR BELOW ///
//////////////////////
//////////////////////

let input = 0
    let result = 0
    let firstOperand
    let operator
    let secondOperand
    let readyToInputFirstOperand = true
    let readyToInputOperator = false
    let readyToClearUserDisplayForSecondOperand = true
    let readyToInputSecondOperand = false
    let readyToCalculateResult = false



    let input0 = () => {
        
if (readyToInputFirstOperand == true) { 


        input = input + "0"
        input = parseInt(input)
        firstOperand = input
        document.getElementById("ResultDisplay2").innerHTML = input
        readyToInputOperator = true
}
    else if (readyToInputSecondOperand == true) {

        input = input + "0"
        input = parseInt(input)
        secondOperand = input
        document.getElementById("ResultDisplay2").innerHTML = input
readyToCalculateResult = true

    }



}



    let input1 = () => {
        

        if (readyToInputFirstOperand == true) {

        input = input + "1"
        input = parseInt(input)
        firstOperand = input
        readyToInputOperator = true
        document.getElementById("ResultDisplay2").innerHTML = input
        }
        else if (readyToInputSecondOperand == true) {

            input = input + "1"
            input = parseInt(input)
            readyToCalculateResult = true
            document.getElementById("ResultDisplay2").innerHTML = input

        }
    }

    function operandInput(a) {
        input = input + a
        input = parseInt(input)
        document.getElementById("ResultDisplay2").innerHTML = input
    }


    let input2 = () => {
        //operandInput(2)
        //input = input + "2"
        //input = parseInt(input)
        //document.getElementById("ResultDisplay2").innerHTML = input
    }

    let input3 = () => {
        input = input + "3"
        input = parseInt(input)
        document.getElementById("ResultDisplay2").innerHTML = input
    }

    let input4 = () => {
        input = input + "4"
        input = parseInt(input)
        document.getElementById("ResultDisplay2").innerHTML = input
    }
    
    let input5 = () => {
        input = input + "5"
        input = parseInt(input)
        document.getElementById("ResultDisplay2").innerHTML = input
    }

    let input6 = () => {
        input = input + "6"
        input = parseInt(input)
        document.getElementById("ResultDisplay2").innerHTML = input
    }

    let input7 = () => {
        input = input + "7"
        input = parseInt(input)
        document.getElementById("ResultDisplay2").innerHTML = input
    }

    let input8 = () => {
        input = input + "8"
        input = parseInt(input)
        document.getElementById("ResultDisplay2").innerHTML = input
    }

    let input9 = () => {
        input = input + "9"
        input = parseInt(input)
        document.getElementById("ResultDisplay2").innerHTML = input
    }



    // OPERATOR INPUT IS FUNCTIONING

    let inputAddition = () => {


        if (readyToInputOperator) {
            true; {
            operator = "+"
            readyToInputFirstOperand = false
            readyToClearUserDisplayForSecondOperand = true
            readyToInputSecondOperand = true
            }
        }
    }

    let inputSubtraction = () => {
        if (readyToInputOperator) {
            true; {
        
        operator = "-"
        readyToInputFirstOperand = false
        readyToClearUserDisplayForSecondOperand = true
        readyToInputSecondOperand = true
            }
        }
    }

    let inputMultiplication = () => {
        if (readyToInputOperator) {
            true; {
        
        operator = "*"
        readyToInputFirstOperand = false
        readyToClearUserDisplayForSecondOperand = true
        readyToInputSecondOperand = true
            }
        }
    }

    let inputDivision = () => {
       if (readyToInputOperator) {
true ; {
       
        operator = "/"
        readyToInputFirstOperand = false
        readyToClearUserDisplayForSecondOperand = true
        readyToInputSecondOperand = true
}
    } 
    }

    let calculateResult = () => {
        switch(operator) {
            
            case "+":
            input = firstOperand + secondOperand
            readyToInputFirstOperand = true
            readyToClearUserDisplayForSecondOperand = false
            readyToInputOperator = false
            readyToInputSecondOperand = false
            readyToCalculateResult = false
            
            document.getElementById("ResultDisplay2").innerHTML = input
            console.log("Addition")
            break

            case "-":
                input = firstOperand - secondOperand
                readyToInputFirstOperand = true
                readyToClearUserDisplayForSecondOperand = false
            readyToInputOperator = false
            readyToInputSecondOperand = false
            readyToCalculateResult = false
                document.getElementById("ResultDisplay2").innerHTML = input

            console.log("Subtraction")
            break
            
            case "*":
                input = firstOperand * secondOperand
                readyToInputFirstOperand = true
                readyToClearUserDisplayForSecondOperand = false
            readyToInputOperator = false
            readyToInputSecondOperand = false
            readyToCalculateResult = false
            document.getElementById("ResultDisplay2").innerHTML = input
                console.log("Multiplication")
            break
            
            case "/":
            input = firstOperand / secondOperand
            readyToInputFirstOperand = true
            readyToClearUserDisplayForSecondOperand = false
            readyToInputOperator = false
            readyToInputSecondOperand = false
            readyToCalculateResult = false
            document.getElementById("ResultDisplay2").innerHTML = input
            console.log("Division")
            break
        }

    }




    //print calculation