function intRev(num){
	let numToStr = num.toString();
	let numArr = numToStr.split("");
	let rNumb = ""
	for(let i= numArr.length -1; i>=0; i--){
		rNumb += numArr[i];
	}
	
	return parseInt(rNumb);
}