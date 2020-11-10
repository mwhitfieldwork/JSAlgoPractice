function vowels(str){
	let strArr = str.split("");
	let freq = {}
	let vowels = ["a","e","i","o","u"];
	
	for(let i=0; i<vowels.length; i++){
		vowel = vowels[i]
		if(strArr.indexOf(vowel) !== -1) freq[vowel] ? freq[vowel] ++ : freq[vowel] =1;	
	}
	if(Object.keys(freq).length === 0)return false; 
	else return freq;
}

