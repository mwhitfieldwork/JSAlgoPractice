function vowels(str){
	let strArr = str.split("");
	let vowelArr = ["a","e","i","o","u"];
	let vowelcount  = {};
	
	for(let i=0; i<vowelArr.length; i++){
		let letter = vowelArr[i];
		if(strArr.indexOf(letter) != -1){
			vowelcount[letter] ? vowelcount[letter]++ : vowelcount[letter]=1;
		}
	}
	
	if(Object.keys(obj).length > 0 && obj.constructor === Object){	
		return vowelcount
	}else{
		return -1
	}
}