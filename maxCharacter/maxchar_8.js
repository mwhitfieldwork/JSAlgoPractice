function maxChar(str){
	let strTemp = str.split("");
	let countobj = {};
	let maxCount = 0;
	
	for(i=0; i<strTemp.length; i++){
		let letter = strTemp[i];
		countobj[letter] ? countobj[letter]++ : countobj[letter] = 1;
	}
	
	for(let j in countobj){
		let count  = countobj[j]
		if(maxCount < count){
			maxCount = count
		}
	}
	return maxCount
}