// ****** Calculator functions not currently used *******
// function sum (array) {
// 	const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 	if (array.length == 0) {
// 	  return 0;
// 	}
// 	else {
// 	  return array.reduce(reducer);
// 	}
// }

// function multiplya (array) {
// 	const reducer = (accumulator, currentValue) => accumulator * currentValue;
// 	if (array.length == 0) {
// 	  return 0;
// 	}
// 	else {
// 	  return array.reduce(reducer);
// }
// }

// function power(a, b) {
// 	return Math.pow(a, b);
// }

// function factorial(num) {
// 	if (num === 0) {
// 		return 1;
// 	}
// 	else {
// 		return (num * factorial(num - 1));
// 	}
// }

function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function divide (a,b) {
	return a / b;
}

function multiply (a, b) {
	return a * b;
}

function operate (operator, a, b) {
	if (operator == 'add') {
		return add(a, b)
	}
	else if (operator == 'subtract') {
		return subtract(a, b)
	}
	else if (operator == 'divide') {
		return divide(a, b)
	}
	else if (operator == 'multiply') {
		return multiply(a, b)
	}
}

function clear() {
	$('#display').text('');
	number = [];
	numBeforeOperator = '';
	operator = '';
	i = 0;
	result = 0;
}

let display = $('#display');
let numBeforeOperator = '';
let number = [];
let operator = '';
let i = 0;
let result = 0;

// Numbuttons clicked
$('.numButtons').click(function( event ) {
	if (result !== 0) {
		clear();
	}
	numBeforeOperator += event.target.textContent
	$(display).append(event.target.textContent)
});

// Operator buttons clicked save first number
$('.opButtons').click(function( event ) {
	if (result !== 0) {
		number[0] = result;
		result = 0;
		i = 0;
	}
	else {
		number[i] = numBeforeOperator;
	}
	numBeforeOperator = '';
	$('#display').append(' ' + event.target.textContent + ' ')
	i += 1;
	return operator = event.target.name;
});


$('#clear').click(function() {
	clear();
});


// Equals
$('#equals').click(function() {
	numBeforeOperator = parseInt(numBeforeOperator)
	number[i-1] = parseInt(number[i-1])
	result = operate(operator, number[i-1], numBeforeOperator);
	$(display).text(result);
	return result;
})





