/* ---- part 1 ----*/
let steps = 345
let insertion = 1
let spinLock = [0]
let currentPosition = 0

var t0 = performance.now();
while ( insertion <= 2017 ) {
	
	let newInsertionPosition = ( (currentPosition + steps) % spinLock.length ) + 1
	spinLock.splice( newInsertionPosition, 0, insertion)
	currentPosition = newInsertionPosition
	insertion += 1
}
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");

console.log(spinLock[spinLock.indexOf(2017) + 1])


/* ---- part 2 ----*/
// The key in here is not to use the array, we only need to fake the array length by adding 1 each loop,
// what we care is the number on the right hand side of 0, and position of 0 will not be changed throughout the loop
insertion = 1
let spinLockLength = 1
currentPosition = 0
let result = 0
var t0 = performance.now();
for (let i = 0; i <= 5e7; i++ ) {
	let newInsertionPosition = ( (currentPosition + steps) % spinLockLength ) + 1
	if ( newInsertionPosition === 1) {
		result = insertion
	}
	currentPosition = newInsertionPosition
	spinLockLength += 1
	insertion += 1
}
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
console.log(result)