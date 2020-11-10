function stringReversal(str){
	// print out the string in reverse
	//input -  accepts string
	//output - returns string?
	
	//take string turn into array
	//loop through the array backawards
	// push each bacward character into array 
	//put back into a string?
	
	let strTemp = str.split("");
	let reverseString = "";
	for(let i= strTemp.length -1; i>=0; i--){
		reverseString += strTemp[i];
	}
	return reverseString
}
O(n)

 const reverse = string =>
	string.spilt().reverse().join()
	
	