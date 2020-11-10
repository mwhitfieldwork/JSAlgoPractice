function reverseDigits(number){
	//send list of numbers in reverse order
	//input list of numbers ? 
	// output list of numbers
	
	//brake number into something that can be reversed
	//reverse loop 
	//concatinate? 
	
	let strTemp = number.toString();
	let backwardsNumber = "";
	for(let i = strTemp.length -1; i >= 0; i--){
		backwardsNumber += strTemp[i];
	}
	return parseInt(backwardsNumber);
	
}
	
