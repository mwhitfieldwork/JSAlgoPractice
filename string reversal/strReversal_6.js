function rString(str){
	let strArr = str.split("");
	let rString = "";
	for(let i=strArr.length -1; i>=0; i--){
		rString += strArr[i];
	}
	return rString;
}