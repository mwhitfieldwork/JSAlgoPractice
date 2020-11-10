function binary(arr, val){
	//set a start index 
	//set the last index
	//set the middle index
	
	let start = 0;
	let last =  arr.length-1 
	let mid  = Math.floor(start+ last /2)
	
	while(arr[mid] != val && start <= last){
		if(val < arr[mid]){
			last = mid -1
		}else{
			start = mid + 1
		}
		mid = Math.floor(start + last /2)		
	}
	if(arr[mid] === val){
		return mid
	}
	return false
}	