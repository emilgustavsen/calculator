let display = $('#display');
let numBeforeOperator = '';
let number = [];
let operator = [];
let i = 0;
let temporaryResult = 0;
let result = 0;
let error = false;
let decimalButtonOn = true;

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
		return add(parseFloat(a), parseFloat(b))
	}
	else if (operator == 'subtract') {
		return subtract(parseFloat(a), parseFloat(b))
	}
	else if (operator == 'divide') {
		return divide(parseFloat(a), parseFloat(b))
	}
	else if (operator == 'multiply') {
		return multiply(parseFloat(a), parseFloat(b))
	}
}

function clear() {
	$('#display').text('');
	numBeforeOperator = '';
	number = [];
	operator = [];
	i = 0;
	temporaryResult = 0;
	result = 0;
	error = false;
	decimalButtonOn = true;
}


// Numbuttons clicked
$('.numButtons').click(function( event ) {
	if (result !== 0 || error) {
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
		temporaryResult = 0;
		i = 0;
	}
	else {
		number[i] = numBeforeOperator;
	}
	numBeforeOperator = '';
	$('#display').append(' ' + event.target.textContent + ' ')
	i += 1;
	operator[i-1] = event.target.name;
	
	if (i == 2) {
		temporaryResult = operate(operator[i-2], number[0], number[1])
	}
	else if (i > 2) {
		temporaryResult = operate(operator[i-2], temporaryResult, number[i-1])
	}
});

$('#clear').click(function() {
	clear();
});


// Equals 
$('#equals').click(function() {
	if (i <= 0) {
		clear();
		$(display).text('Error - You need to enter in at least one operator')
		error = true;
		return;
	}
	else if (i == 1) {
		result = operate(operator[0], number[0], numBeforeOperator)
	}
	else {
		result = operate(operator[i-1], temporaryResult, numBeforeOperator);
	}
	
	if (result == Infinity) {
		clear();
		$(display).text('Error - You cannot divide by 0')
		error = true;
		return;
	}

	result = Math.floor(result * 100000) / 100000;
	$(display).text(result);

});


$('#delete').click(function() {
	// Add code to remove last entry
})

// $('#decimal').click(function() {
//
// 	if (number[i].includes('.')) {
// 		return;
// 	}
// 	else {
// 		numBeforeOperator += event.target.textContent
// 		$(display).append(event.target.textContent)
// 	}
// })

