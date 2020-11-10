function intRev(numb){
	let numTostr = numb.toString();
	strTemp = numTostr.split("");
	let rNumb = ""
	for(let i = strTemp.length -1; i>=0; i--){
		rNumb += strTemp[i];
	}
	return parseInt(rNumb);
}