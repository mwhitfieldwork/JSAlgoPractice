function intRev(number){
	let n2Str = number.toString();
	let strArr = n2Str.split("");
	let rString = ""
	for(let i=strArr.length- 1; i>=0; i--){
		rString += strArr[i];
	}
	
	return parseInt(rString)
}