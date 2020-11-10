function dupInList(arr, val){
	let freq = {}
	for(let i=0; i<arr.length; i++){
		let number = arr[i];
		
		freq[number] ? freq[number] ++ : freq[number] =1
	}
	
	for(num in freq){
		if(num == val){
			if(freq[num] > 1){
				return true;
			}
		}
	}
	return false;
}