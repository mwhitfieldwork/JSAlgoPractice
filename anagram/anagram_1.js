function anagram(str1,str2){
	//make strings into arrays
	//loop though first array store in obj
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
		// from the letter it found in  the object
		if(!freq[char]){ // if you dont find the letter of the second array in the freq obj
		// then exit function.
		 return false;
		}else{
			freq[char] -=1   //if you do find it in the freq obj then subtract the frequency value 
		}
	 }
	 return true;
	}
		// when each letter subtracts as they are being matched in the object, its value subtracts (down to zero)
		// if a letter in the second array is matched with a key whose value is already 0 - then return false
		// if all of the letters from the second array are found in the obj
		// then the function returns true