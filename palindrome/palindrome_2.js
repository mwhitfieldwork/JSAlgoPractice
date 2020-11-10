function palindrome(str){
	let strTemp = str.split("");
	
	for(let i= 0; i< strTemp.length; i++){
		if(strTemp[i] != strTemp[strTemp.length - 1 -i]){
			return false
		}
	}
	return true
}