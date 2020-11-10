function vowels(str){
	let strTemp = str.split("");
	let vowelsArr = ["a","e","i","o","u"];
	let vowelCount = 0
	
	for(let i=0;i<vowelsArr.length; i++){
		if(strTemp.indexOf(vowelsArr[i]) != -1){
			vowelCount ++;
		}			
	}
	
	return vowelCount
}