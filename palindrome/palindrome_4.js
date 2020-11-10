function palindrome(str){
	let strArr = str.split("");
	
	for(let i=0; i<strArr.length; i++){
		if(strArr[i] != strArr[strArr.length -1 - i]) return false;
	}
	return true;
}