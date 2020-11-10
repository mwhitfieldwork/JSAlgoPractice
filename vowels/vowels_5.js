function vowels(str){
	let strArr = str.split("");
	let vowels = ["a","e","i","o","u"]
	let vowelCount = {}
	for(let i = 0;  i<vowels.length; i++){
		let vowel = vowels[i];
		if(strArr.indexOf(vowel) != -1){
			vowelCount[vowel] ? vowelCount[vowel]++ : vowelCount[vowel] =1;
		}
	}
	
	if(Object.keys(vowelCount).length === 0){
		return false
	}
	
	return vowelCount
}