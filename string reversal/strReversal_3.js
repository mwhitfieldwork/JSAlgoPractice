function stringReverse(str){
	let strTemp = str.split("");
	rString = "";
	for(j= strTemp.length -1; j>= 0; j--){
		var letter = strTemp[j];
		rString += letter;
	}
	return rString
}
