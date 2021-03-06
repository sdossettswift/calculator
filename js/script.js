//number doc nodes
var zero = document.querySelector('#zero')
var one = document.querySelector('#one')
var two = document.querySelector('#two')
var three = document.querySelector('#three')
var four = document.querySelector('#four')
var five = document.querySelector('#five')
var six = document.querySelector('#six')
var seven = document.querySelector('#seven')
var eight = document.querySelector('#eight')
var nine = document.querySelector('#nine')

//operator doc nodes
var equals = document.querySelector('#equals')
var minus = document.querySelector('#subtract')
var plus = document.querySelector('#add')
var times = document.querySelector('#multiply')
var divide = document.querySelector('#divide')
var clear = document.querySelector('#clear')

//output doc nodes
var firstInputNode = document.querySelector('#firstInput .inputs')
var operatorNode = document.querySelector('#operator .inputs')
var secondInputNode = document.querySelector('#secondInput .inputs')
var functionOutput = document.querySelector('.functionOutput')

//other global variables
var inputStringOne = ''
var inputStringTwo = ''
var originalHTML = functionOutput.innerHTML

//this function will put the operator in the output box when you click on it
var getOperator = function(evt) {
    var operatorInput = evt.target
    var operator = operatorInput.innerHTML
    operatorNode.innerHTML = operator
    // return operatorNode.innerHTML
}

//this function will clear the inputs for a new function
var clearInputs = function() {
    inputStringOne = ''
    inputStringTwo = ''
    firstInputNode.innerHTML = ''
    operatorNode.innerHTML = ''
    secondInputNode.innerHTML = ''
    functionOutput.innerHTML = originalHTML
}

//this function puts the inputs in the correct spot. if an operator does not exist it will go into the first node, if it does exist it will go into the second
var getInputs = function(evt) {
    var inputNode = evt.target
    var inputNum = inputNode.innerHTML

    if(!operatorNode.innerHTML) {
        inputStringOne += inputNum
        firstInputNode.innerHTML = inputStringOne

    }
    else {
        inputStringTwo += inputNum
        secondInputNode.innerHTML = inputStringTwo

    }
}

var performOperation = function() {
    var firstInputNum = parseInt(firstInputNode.innerHTML)
    var secondInputNum = parseInt(secondInputNode.innerHTML)
    var operatorInput = operatorNode.innerHTML

    if(operatorInput === '-') {
        functionOutput.innerHTML = firstInputNum - secondInputNum
    }
    else if(operatorInput === '+') {
        functionOutput.innerHTML = firstInputNum + secondInputNum
    }
    else if(operatorInput === '*') {
        functionOutput.innerHTML = firstInputNum * secondInputNum
    }
    else {
        functionOutput.innerHTML = firstInputNum / secondInputNum
    }

}


//operator event listeners
minus.addEventListener('click', getOperator)
plus.addEventListener('click', getOperator)
times.addEventListener('click', getOperator)
divide.addEventListener('click', getOperator)

//clear event listener
clear.addEventListener('click', clearInputs)

//number input event listeners
zero.addEventListener('click', getInputs)
one.addEventListener('click', getInputs)
two.addEventListener('click', getInputs)
three.addEventListener('click', getInputs)
four.addEventListener('click', getInputs)
five.addEventListener('click', getInputs)
six.addEventListener('click', getInputs)
seven.addEventListener('click', getInputs)
eight.addEventListener('click', getInputs)
nine.addEventListener('click', getInputs)

//perform operation
equals.addEventListener('click', performOperation)

