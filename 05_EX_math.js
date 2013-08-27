// Math examples
var log = console.log;


// 1. Enumerating available methods
log(Object.getOwnPropertyNames(Math));
// [ 'E',
//   'LN10',
//   'LN2',
//   'LOG2E',
//   'LOG10E',
//   'PI',
//   'SQRT1_2',
//   'SQRT2',
//   'random',
//   'abs',
//   'acos',
//   'asin',
//   'atan',
//   'ceil',
//   'cos',
//   'exp',
//   'floor',
//   'log',
//   'round',
//   'sin',
//   'sqrt',
//   'tan',
//   'atan2',
//   'pow',
//   'max',
//   'min' ]

// 2. Generaring random vetween a and b, not including upper bound
var randint = function(a, b){
	var frac = Math.random();
	return Math.floor((b-a)*frac + a);
}

// 