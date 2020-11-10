function anagram(str1,str2){
 let strTemp1 = str1.split("");
 let strTemp2 = str2.split("");
 let freq = {}
	if(strTemp1.length != strTemp2.length){
		return false	
	}

	for(let i =0; i< strTemp1.length; i++){
		freq[strTemp1[i]] ?  freq[strTemp1[i]]++ : freq[strTemp1[i]] = 1;
	}
	
	for(let j=0; j<strTemp2.length; j++){
		let letter = strTemp2[j]
		if(!freq[letter]){
			return false
		}else{
			freq[letter]--
		}
	}
	console.log(freq)
	return true
}