function anagram(str1, str2){
	
	let strTemp1 = str1.split("");
	let strTemp2 = str2.split("");
	
	if(strTemp1.length != strTemp2.length){
		return false;
	}
	
	let freq = {}
	
	for(let i=0; i<strTemp1.length; i++){
		let letter = strTemp1[i];
		freq[letter] ? freq[letter]++ : freq[letter] =1;
	}
	
	for(let j=0; j< strTemp2.length; j++){
		let char  = strTemp2[j]
		if(!freq[char]){
			return false
		}else{
			freq[char]--
		}
	}
	return true;
}