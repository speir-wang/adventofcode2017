var input = 289326

/* --- part 1 --- */

var inputSqrt =  Math.sqrt(input)
var inputSqrtWithInt = Math.floor( Math.sqrt(input) )
var inputDirection = inputSqrt - inputSqrtWithInt
var steps = 0


if ( Number.isInteger( inputSqrtWithInt ) ) {
	steps = inputSqrtWithInt - 1;
}

// calculate the how many levels between the input and the 1
var levels = (inputSqrtWithInt - 1)

console.log(levels)
console.log(inputSqrtWithInt)
console.log(Math.pow(inputSqrtWithInt, 2))
console.log(input - Math.pow(inputSqrtWithInt, 2))
console.log(inputSqrt)
// console.log(steps)



function round(value, decimals) {
	return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}