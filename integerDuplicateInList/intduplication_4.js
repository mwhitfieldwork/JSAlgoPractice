function dupInt(arr, val){
	// loop through the list 
	// find if value appears in list 
	// see if value appears in list more than oncellchange
	let duplicate = {}
	for(let i=0; i< arr.length; i++){
		let number = arr[i];
		duplicate[number] ? duplicate[number]++ : duplicate[number] =1;
	}
	
	for(numb in duplicate){
		if(numb == val){
			if(duplicate[numb]> 1){
				return true
			}
		}
	}
	
	return false;
}