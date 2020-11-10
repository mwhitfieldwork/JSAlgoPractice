function anagram(str1,str2){
 let strArr1 = 	str1.split("");
 let strArr2 = str2.split("")
 let freq  = {};
 
 if(strArr1.length !== strArr2.length) return false;
 
 for(let i=0; i<strArr1.length; i++){
	let letter = strArr1[i];
	freq[letter] ? freq[letter]++ : freq[letter] = 1;
 }
 
 for(let j = 0; j<strArr2.length; j++){
	let char = strArr2[j];
	if(!freq[char]) return false;
	else freq[char]--
 }
 return true
}