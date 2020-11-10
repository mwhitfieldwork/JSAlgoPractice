function palidrome(str) {
	//check string if it the same backwards and forwards?
	// input - string
	//output - string
	
	
	// break string into array
	//split array in half
	//compare 1st half to second half?
	//make true of false
	
	let strTemp = str.split("");
	
	for(let i= 0; i<strTemp.length; i++) {
		if(strTemp[i] != strTemp[strTemp.length -1 - i]){
			return false;
		}
		
		return true;
	}
}
