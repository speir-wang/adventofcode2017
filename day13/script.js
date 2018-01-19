var input = `0: 3
1: 2
4: 4
6: 4`
var inputArray = input.split('\n')
/* ---- part 1 ---- */ 
// firewall length depends on the last element of the input array 
var firewallLength = inputArray[inputArray.length - 1].split(': ')[0],
	firewall = new Array(firewallLength) // set up the firewall length first
// set up the depth for each level of firewall 
inputArray.forEach(function(element, index){
	var index = element.split(': ')[0]
	var depth = element.split(': ')[1]
	firewall[index] = {
		depth: parseInt(depth),
		currentScannerPosition: 1, // initial state
		movingDirection: 'forward'
	}
})

function scannersMovement(firewall) {
	var updatedfirewall = firewall.map(function(element, index){
		if (element['movingDirection'] === 'forward') { // 1. check moving direction
			element['currentScannerPosition'] += 1 // 2. move
			if (element['currentScannerPosition'] === element['depth']) 
				// 3. check if reach the top or bottom, if so, change the direction
				element['movingDirection'] = 'backward'
		}
		else {
			element['currentScannerPosition'] -= 1
			if (element['currentScannerPosition'] === 1)
				element['movingDirection'] = 'forward'
		}
		return element
	})
	return updatedfirewall
}

// function passThroughFirewall() {
// 	var penalty = 0
// 	for (var i = 0; i < firewall.length; i++) {
// 		if (firewall[i] !== undefined ) {
// 			if ( firewall[i]['currentScannerPosition'] === 1){
// 				penalty = penalty + i*firewall[i]['depth']
// 				console.log("caught")
// 				break
// 			}
// 		}
// 		firewall = scannersMovement(firewall)
// 	}
// 	return penalty	
// }
// console.log(passThroughFirewall())

/* --- part 2 ---*/ 
function safelyPassThroughFirewall() {
	var penalty = 0
	for (var i = 0; i < firewall.length; i++) {
		if (firewall[i] !== undefined ) {
			if ( firewall[i]['currentScannerPosition'] === 1){
				console.log("caught at " + i)
				break
			}
		}
		firewall = scannersMovement(firewall)
	}
	return penalty	
}

var delay = 10
function startPassing() {
	// pre-run scannersMovement several times 
	// then start trying to pass, if failed, increase the pre-run times
	var tempt = 0
	while ( tempt < delay ) {
		firewall = scannersMovement(firewall)
		tempt++
	}
	var penalty = safelyPassThroughFirewall(firewall)
	console.log( penalty )
}
startPassing() 

