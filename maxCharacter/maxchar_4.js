function mCount(str){
	let strArr = str.split("");
	let freq = {}
	
	for(let i=0; i<strArr.length; i++){
		let letter = strArr[i];
		freq[letter] ? freq[letter]++ : freq[letter] =1;
	}
	
	let max = 0;
	for(char in freq){
		if(max < freq[char]){
			max = freq[char]
		}
	}
	
	return max;
}