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
let display = $('#display');
let numBeforeOperator = '';
let number = [];
let operator = [];
let i = 0;
let temporaryResult = 0;
let result = 0;

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
		return add(parseInt(a), parseInt(b))
	}
	else if (operator == 'subtract') {
		return subtract(parseInt(a), parseInt(b))
	}
	else if (operator == 'divide') {
		return divide(parseInt(a), parseInt(b))
	}
	else if (operator == 'multiply') {
		return multiply(parseInt(a), parseInt(b))
	}
}

// NEED TO FIX THE RETURN STATEMENT, SEEMS LIKE TEMPORARY RESULT IS ALWAYS RETURNED AFTER 3
// function useOperate() {
// 	number[i] = numBeforeOperator
// 	if (number[2] == undefined) {
// 		return temporaryResult = operate(operator[0], number[0], number[1]);	
// 	}
// 	else {
// 		temporaryResult = operate(operator[0], number[0], number[1]);
// 	for (let o = 1; o <= i; o += 1) {
// 		temporaryResult = operate(operator[o], temporaryResult, number[o+1]);
// 		if (o = i + 1) return temporaryResult;
// 	}
// }
// 	return temporaryResult;
// }

function clear() {
	$('#display').text('');
	numBeforeOperator = '';
	number = [];
	operator = [];
	i = 0;
	temporaryResult = 0;
	result = 0;
}


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



// Equals *Add code to round down decimals*
$('#equals').click(function() {
	if (i <= 0) {
		alert('Error - You need to enter in at least one operator')
		clear();
	}
	else if (i == 1) {
		result = operate(operator[0], number[0], numBeforeOperator)
		$(display).text(result);
		return result;
	}
	else {
		result = operate(operator[i-1], temporaryResult, numBeforeOperator)
		$(display).text(result);
		return result;
	}
});


$('#delete').click(function() {
	// Add code to remove last entry
})


