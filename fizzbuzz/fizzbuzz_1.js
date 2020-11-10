/*
function fizzBuzz(num){
	for(i=0; i<num.length; i++){
		let number = i;
		if(number % 6 === 0){
			console.log("fizzbuzz")
		}
		else if(number % 2 == 0){
			console.log("fizz")
		}else if (number % 3 === 0){
			console.log("buzz")
		}
	}
}
*/

function fizzBuzz(num){
	for(let i=0; i<num; i++){
	    if(i % 6 === 0) console.log("fizzbuzz")
        else if(i % 2 == 0) console.log("fizz")
	    else if (i % 3 === 0) console.log("buzz")
	}
	
}