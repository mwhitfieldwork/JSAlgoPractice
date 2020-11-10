function maxCharacters(str){
 result = {}
 
  strTemp = str.split("");
  
  for (let i= 0; i < strTemp.length; i++) {
	let letter = strTemp[i];
	result[letter] ? result[letter]++ :result[letter] = 1
  }
  
  let max = 0;
  
  for(letter in result){
	if(result[letter] > max){
		max = result[letter];
		console.log(letter + "  " + result[letter]);
	}
  }
  return max;
}