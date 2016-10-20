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
var secondInputNode = document.querySelector('#secondInputNode .inputs')

//this function will put the operator in the output box when you click on it

var getOperator = function(evt) {
    var operatorInput = evt.target
    var operator = operatorInput.innerHTML
    operatorNode.innerHTML = operator
}

//operator event listeners
minus.addEventListener('click', getOperator)
plus.addEventListener('click', getOperator)
times.addEventListener('click', getOperator)
divide.addEventListener('click', getOperator)