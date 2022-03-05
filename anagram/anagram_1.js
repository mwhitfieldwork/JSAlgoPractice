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
	freq[letter] ? freq[letter]++ : freq[letter] =1; //check if strArr[i] 
	                                                 //if it isnt in the string array add 1
													 //if its in there more than once increment the frequency
 }
 
 for(let j=0; j<strArr2.length; j++){
	let char = strArr2[j];
	// loop through the second array 
	// if you dont find the letter of the second array in the freq obj
	// then exit function.
	//if you do find it in the freq obj then subtract the frequency value 
	// from the letter it found in  the object
	// if all of the letters from the second array are found in the obj
	// then the function returns true
	if(!freq[char]){
	 return false;
	}
 }
 return true;
}