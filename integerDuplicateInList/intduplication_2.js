function intInList(arr, val){
 let freq={};
 for(let i=0; i<arr.length; i++){
	number = arr[i];
	freq[number] ? freq[number]++ : freq[number] = 1
 }
 
 for(numb in freq){
	if(numb == val){
		if(freq[numb] > 1){
			return true
		}
	}
 }
 
 return false
}