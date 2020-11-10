function anagram(str1,str2){
//make strings into arrays
//loop though first array stroe in obj
//loop through second array
//if each letter in the second array is found in object, subtract a letter
//if the string are not the same length return false
//if a letter is not in the object return false

 let strArr1 = str1.split("");
 let strArr2 = str2.split(""); 
 if(strArr1.length != strArr2.length) return false;
 
 let freq = {}
 for(let i = 0; i<strArr1.length; i++){
	let letter = strArr1[i];
	freq[letter] ? freq[letter]++ : freq[letter] =1;
 }
 
 for(let j=0; j<strArr2.length; j++){
	let char = strArr2[j];
	if(!freq[char]){
	 return false;
	}
 }
 return true;
}