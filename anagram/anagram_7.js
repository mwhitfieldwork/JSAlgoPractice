function anagram(str1, str2){
	let strTemp = str1.split("")
	let strTemp2 = str2.split("")
	
	let freq = {}
	for(let i=0; i< strTemp.length; i++){
		let letter = strTemp[i];
		freq[letter] ? freq[letter]++ : freq[letter] =1;
	}
	
	for(let j=0; j<strTemp2.length; j++){
		let Char = strTemp2[j];
		if(!freq[Char]){
			return false
		}else{
			freq[Char]--
		}
	}
	return true;
}