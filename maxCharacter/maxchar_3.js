//Given a string of characters, return the character that appears the most often.
function mChar(str){
	let strArr = str.split("");
	let freq = {}
	
	for(let i=0; i<strArr.length; i++){
		let char = strArr[i];
		freq[char] ? freq[char]++ : freq[char] =1
	}
	
	let max = 0;
	let maxL = "";
	
	for(let letter in freq){
		if(max < freq[letter]) {
			max = freq[letter]
		maxL = letter; 
		}
	}
	return maxL + " :" + max;
}
