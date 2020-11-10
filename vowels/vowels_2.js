function vowels(str){
 let vowels = ["a","e","i","o","u"];
 let strArr = str.split("");
 let vFreq = {};
 
 for(let i=0; i<vowels.length; i++){
	let vowel = vowels[i];
	if(strArr.indexOf(vowels[i]) != -1){
		vFreq[vowel] ? vFreq[vowel]++ : vFreq[vowel]=1;
	}
 }

 return vFreq
}