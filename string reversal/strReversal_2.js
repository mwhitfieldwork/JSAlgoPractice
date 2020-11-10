function backwardsString(str){
	let strTemp = str.split("");
	reverse = "";
	for(let i=strTemp.length -1; i>= 0; i--){
		let letter = strTemp[i]
		reverse += letter;
	}
	return reverse
}