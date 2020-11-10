function intRevesal(num){
	let numToString = num.toString();
	let numTemp = numToString.split("");
	let rNumber = "";
	for(i=numTemp.length -1; i>=0; i--) {
		let number = numTemp[i];
		rNumber += number;
	}
	
	return parseInt(rNumber);
}