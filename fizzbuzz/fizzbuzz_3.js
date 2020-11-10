function fizzbuzz(num){
	for(let i=0; i<num; i++){
		if(i%6 == 0) console.log("fizzbuzz");
		if(i%3 == 0)console.log("fizz");
		if(i%2 == 0) console.log("buzz");
	}
}