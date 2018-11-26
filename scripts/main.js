function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function divide (a,b) {
	return a / b;
}

function sum (array) {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;

	if (array.length == 0) {
	  return 0;
	}
	else {
	  return array.reduce(reducer);
	}
}

function multiply (array) {
	const reducer = (accumulator, currentValue) => accumulator * currentValue;
	if (array.length == 0) {
	  return 0;
	}
	else {
	  return array.reduce(reducer);
}
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(num) {
	if (num === 0) {
		return 1;
	}
	else {
		return (num * factorial(num - 1));
	}
}

function operate(operator, a, b) {
	return operator(a, b);
}

let display = $('#display');
let number = 0;
let number1 = 0;
let operator = '';

// Numbuttons clicked
$('.numButtons').click(function( event ) {
	$('#display').append(event.target.textContent)
	return number = $('#display').text();
});

// Operator buttons clicked save first number
$('.opButtons').click(function( event ) {
	number1 = number;
	number = 0;
	$('#display').text('');
	operator = event.target.textContent;
	return number1;
});


// Clear everything

$('#clear').click(function() {
	$('#display').text('');
	number1 = 0;
	number2 = 0;
	number = 0;
})


// Equals
$('#equals').click(function() {
	
})





