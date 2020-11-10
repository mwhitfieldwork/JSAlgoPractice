function reverseInts(numb){
	let numbString = numb.toString();
	numbStringTemp = numbString.split("");
	let number = "";
	for(let i=numbStringTemp.length -1; i>=0; i--){
		number += numbStringTemp[i]
	}
	return parseInt(number)
}