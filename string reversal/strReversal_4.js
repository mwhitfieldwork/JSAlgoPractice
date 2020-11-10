function stringReversal(str){
	let strTemp= str.split("");
	let rString = "";
	for(let i=strTemp.length - 1; i>=0; i--){
		rString += strTemp[i]
	}
	return rString;
}

//1:47 (time)