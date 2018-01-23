/* ---- part 1 ---- */ 
var generatorAStarter = 277,
	generatorAMultiplier = 16807,
	generatorBStarter = 349,
	generatorBMultiplier = 48271,
	previousGeneratorA = 0,
	previousGeneratorB = 0,
	totalCount = 0,
	divider = 2147483647


var t0 = performance.now();
for(var i = 0; i < 40000000; i++) {
	if (i === 0) {
		previousGeneratorA = generatorAStarter * generatorAMultiplier
		previousGeneratorB = generatorBStarter * generatorBMultiplier
	} else {
		previousGeneratorA = previousGeneratorA * generatorAMultiplier % divider
		previousGeneratorB = previousGeneratorB * generatorBMultiplier % divider
	}

	// if ( previousGeneratorA.toString(2).slice(-16) === previousGeneratorB.toString(2).slice(-16)) -- it will take 46s 
	if ( (previousGeneratorA & 0xFFFF) === (previousGeneratorB & 0xFFFF)) // using bit mask only take 0.6s 
		totalCount += 1
}
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
console.log(totalCount)

/* ---- part 2 ---- */ 
previousGeneratorA = 0
previousGeneratorB = 0
totalCount = 0

var t0 = performance.now();
for ( var i = 0; i < 5000000; i++) {
	if (i === 0) {
		previousGeneratorA = generatorAStarter * generatorAMultiplier
		previousGeneratorB = generatorBStarter * generatorBMultiplier
	} else {
		do {
			previousGeneratorA = previousGeneratorA * generatorAMultiplier % divider
		} while ( (previousGeneratorA % 4) !== 0 )
		do {
			previousGeneratorB = previousGeneratorB * generatorBMultiplier % divider
		} while ( (previousGeneratorB % 8) !== 0 )
	}
	if ( (previousGeneratorA & 0xFFFF) === (previousGeneratorB & 0xFFFF)){ // using bit mask only take 0.6s 
		totalCount += 1
	}
}
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
console.log(totalCount)