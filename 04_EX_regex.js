// Regexp examples

// 1. Test for presence, identify location
var ex1 = "The quick brown fox jumped over the lazy dogs.";
var re1 = /(cr|l)azy/;
console.log(re1.test(ex1));
//true
console.log(re1.exec(ex1));
// [ 'lazy',
//   'l',
//   index: 36,
//   input: 'The quick brown fox jumped over the lazy dogs.' ]


// 2. Global matches
var ex2 = "Alpha Beta Gamma Epsilon Omicron Theta Phi";
var re2 = /(\w+a)/;
var re2g = /(\w+a)/g;

console.log(re2.exec(ex2));
console.log(re2.exec(ex2));

// Without /g repeating has no effect
// [ 'Alpha',
//   'Alpha',
//   index: 0,
//   input: 'Alpha Beta Gamma Epsilon Omicron Theta Phi' ]
// [ 'Alpha',
//   'Alpha',
//   index: 0,
//   input: 'Alpha Beta Gamma Epsilon Omicron Theta Phi' ]

console.log(re2g.exec(ex2));
console.log(re2g.exec(ex2));
console.log(re2g.exec(ex2));

// With the /g repeating the match iterates through all matches
// [ 'Alpha',
//   'Alpha',
//   index: 0,
//   input: 'Alpha Beta Gamma Epsilon Omicron Theta Phi' ]
// [ 'Alpha',
//   'Alpha',
//   index: 0,
//   input: 'Alpha Beta Gamma Epsilon Omicron Theta Phi' ]
// [ 'Beta',
//   'Beta',
//   index: 6,
//   input: 'Alpha Beta Gamma Epsilon Omicron Theta Phi' ]
// [ 'Gamma',
//   'Gamma',
//   index: 11,
//   input: 'Alpha Beta Gamma Epsilon Omicron Theta Phi' ]

var allMatches = function(rex, str) {
	var matches = [];
	var match;
	while(true){
		match = rex.exec(str);
		console.log (match);
		if (match) {
			matches.push(match);
		} else {
			break;
		}
	}
	return matches;
}
allMatches(re2g, ex2);

// [ 'Alpha',
//   'Alpha',
//   index: 0,
//   input: 'Alpha Beta Gamma Epsilon Omicron Theta Phi' ]
// [ 'Beta',
//   'Beta',
//   index: 6,
//   input: 'Alpha Beta Gamma Epsilon Omicron Theta Phi' ]
// [ 'Gamma',
//   'Gamma',
//   index: 11,
//   input: 'Alpha Beta Gamma Epsilon Omicron Theta Phi' ]
// [ 'Theta',
//   'Theta',
//   index: 33,
//   input: 'Alpha Beta Gamma Epsilon Omicron Theta Phi' ]
// null

// 3. Case-insensitive
var ex3 = "John is here";
var rex3 = /JOhn/;
var rex3i = /JOhn/i;
console.log(rex3.test(ex3)); //false
console.log(rex3i.test(ex3)); //true

// 4. Multiline
var ex4 = "Alpha beta gamma.\nAll the king's men.\nGermany France Italy";
var rex4 = /^G/;
var rex4m = /^G/m;
console.log(rex4.exec(ex4));
console.log(rex4m.exec(ex4));
// null
// [ 'G',
//   index: 38,
//   input: 'Alpha beta gamma.\nAll the king\'s men.\nGermany France Italy' ]

// 5. Parsing postgres URLs
var pgurl = "postgres://myuser:mypass@example.com:5432/mydbpass";
var pgregex = /postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/;
var flag = pgregex.test(pgurl);
var out = pgregex.exec(pgurl);
console.log(flag);
console.log(out);
// true
// [ 'postgres://myuser:mypass@example.com:5432/mydbpass',
//   'myuser',
//   'mypass',
//   'example.com',
//   '5432',
//   'mydbpass',
//   index: 0,
//   input: 'postgres://myuser:mypass@example.com:5432/mydbpass' ]


// 6. Parsing postgres URLs in a function (more advanced)
// Here, we use the object and zip methods from underscore through
// organize th regex-parsed fields in a nice data structure.
var uu = require('underscore');
var parsedburl = function(dburl) {
	var dbregex = /([^:]+):\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/;
	var out = dbregex.exec(dburl);
	var fields = ['protocol', 'user', 'pass', 'host', 'port', 'dbpass'];
	return uu.object(uu.zip(fields, out.slice(1, out.lenght)));
};
console.log(parsedburl(pgurl));

// { protocol: 'postgres',
//   user: 'myuser',
//   pass: 'mypass',
//   host: 'example.com',
//   port: '5432',
//   dbpass: 'mydbpass' }
