function fizzbuzz(num){
	for(let j=0; j<num; j++){
		if(j%6 === 0) console.log("fizzbuzz");
		if(j%2 === 0) console.log("fizz");
		if(j%3 === 0) console.log("buzz");
	}
}