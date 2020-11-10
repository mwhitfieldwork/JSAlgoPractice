function intRev(num){
	let numToStr = num.toString();
	let numArr = numToStr.split("");
	let rnumbString = "";
	for(let i=numArr.length -1; i>=0; i--){
		rnumbString += numArr[i]
	}
	
	return parseInt(rnumbString)
}