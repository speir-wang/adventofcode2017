var input = `10	3	15	10	5	15	5	15	9	2	5	8	5	2	3	6`
/* --- part 1 --- */ 
/* --- part 2 --- */ 
var inputArray = input.split('	')
var partOneArray = []
inputArray.forEach(function(element){
	partOneArray.push(parseInt(element))
})
var partOneSum = 0
var partTwoSum = 0
var flag = true
var partOneNumberOfBanks = partOneArray.length
var partOneRedistributionCircles = []

while ( flag ) {
	partOneSum++
	var tempBanks = []
	var mostNumberOfBlocks = largestBlock(partOneArray) // 7
	var bankIndexWithMostBlocks = largestBlockIndex(partOneArray) // 2
	var evenlyDistribution = Math.floor(mostNumberOfBlocks / partOneNumberOfBanks)
	var remainedBlocks = mostNumberOfBlocks % partOneNumberOfBanks

	partOneArray[bankIndexWithMostBlocks] = 0 // for the bank with the most blocks, remove all of them 
	partOneArray.forEach(function(element) {
		element = element + evenlyDistribution
		tempBanks.push(element)
	})
	
	var nextBankIndex = bankIndexWithMostBlocks + 1
	for (var i = 0; i < remainedBlocks; i++) {
		
		if ( nextBankIndex >= partOneNumberOfBanks ) {
			nextBankIndex = 0
		}
		tempBanks[nextBankIndex] = tempBanks[nextBankIndex] + 1
		nextBankIndex = nextBankIndex + 1
		
	}
	tempBanks.forEach(function(element, index) {
		partOneArray[index] = element
	})
	// it's difficult to compare if two arrays are the same, 
	// so we change the each array to a string
	if ( !partOneRedistributionCircles.includes(tempBanks.toString()) ) {
		partOneRedistributionCircles.push(tempBanks.toString())
	} else {
		partTwoSum = partOneRedistributionCircles.length - partOneRedistributionCircles.indexOf(tempBanks.toString())
		console.log("part two answer is: " + partTwoSum)
		flag = false
	} 

}
console.log("part one answer is: " + partOneSum)

/* --- helper functions ---*/ 
function largestBlock (array) {
	return Math.max(...array)
}

function largestBlockIndex (array) {
	// indexOf automatically returns  the bank that first matchses the criterion
	// which actually is the lowest-numbered of the bank, 
	return array.indexOf(largestBlock(array)) 
}

