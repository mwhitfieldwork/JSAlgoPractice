function anagram(str1,str2){
	
	let strTemp1 = str1.split("");
	let strTemp2 = str2.split("");
	let strObj = {};
	
	if(strTemp1.length == strTemp2.length){
		return false
	}
	
	for(let i=0; i<strTemp1.length; i++){
		let letter = strTemp1[i];
		strObj[letter] ? strObj[letter] ++ : strObj[letter] = 1;		
	}
	
	for(let j=0; j<strTemp2.length; j++){
		let letterChar = strTemp2[j];
		if(!strObj[letterChar]){
			return false;
		}else{
			strObj[letterChar] -1;
		}
	}
	return true;
}