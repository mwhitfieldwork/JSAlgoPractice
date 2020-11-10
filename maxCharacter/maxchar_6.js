function maxChar(str){
	let strTemp = str.split("");
	let freq = {}
	
	for(let i=0; i<strTemp.length; i++){
		let letter = strTemp[i]
		freq[letter] ? freq[letter]++ : freq[letter] = 1; 	
	}
	
	let max = 0;
	
	for(char in freq){
		if(max < freq[char]){
			max = freq[char];
		}
	}
	return max;
}