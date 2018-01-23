var input = `0: 4
1: 2
2: 3
4: 5
6: 8
8: 4
10: 6
12: 6
14: 6
16: 10
18: 6
20: 12
22: 8
24: 9
26: 8
28: 8
30: 8
32: 12
34: 12
36: 12
38: 8
40: 10
42: 14
44: 12
46: 14
48: 12
50: 12
52: 12
54: 14
56: 14
58: 14
60: 12
62: 14
64: 14
68: 12
70: 14
74: 14
76: 14
78: 14
80: 17
82: 28
84: 18
86: 14`

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

function passThroughFirewall() {
	var penalty = 0
	for (var i = 0; i < firewall.length; i++) {
		if (firewall[i] !== undefined ) {
			if ( firewall[i]['currentScannerPosition'] === 1){
				penalty = penalty + i*firewall[i]['depth']
			}
		}
		firewall = scannersMovement(firewall)
	}
	return penalty	
}


/* --- part 2 ---*/ 
