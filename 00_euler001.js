#!usr/bin/env node

// http://projecteuler.net/problem=1

// If we list all the natural numbers below 10 that are multiples 
// of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples 
// is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var isDevides = function(a, b){
	return a%b === 0;
}

var anyDevide = function(inNumbers, b){
	for (var i in inNumbers){
		if (isDevides(b, inNumbers[i])){
			return isDevides(b, inNumbers[i]);
		}
	}
	return false;
}

var sum = function(arr) {
	var result = 0;
	for(var i in arr){
		// console.log(result);
		result += arr[i];
	}
	return result;
}

var count = function(factors, max){
	var out = [];
	for (var i = 0; i < max; i++) {
		if (anyDevide(factors, i)){
			console.log(i);
			out.push(i);
		}
	}
	return sum(out);
}

console.log(count([3,5], 1000));
