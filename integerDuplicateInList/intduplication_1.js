function intDupList(arr, val){
	// loop through array 
	//store count in object
	//check if value exists in object
	// check if value exists more than once in object
	let duplicate = {}
	for(let i=0; i<arr.length; i++){
	   let num = arr[i]
	   duplicate[num]? duplicate[num]++ : duplicate[num] =1
	}
	
	for(number in duplicate){
	  if(number == val){
		  if(duplicate[number] > 1){
			return true
		  }
	  }
	}
	return false;
}