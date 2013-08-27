// String examples

// 1. Treat string as array of characters

var log = console.log;

var sx1 = "The quick brown fox jumped over the lazy dogz.";
sx1.charAt(10); // 'b'
sx1.slice(10, 13); // 'bro'
sx1.substring(10, 13); // 'bro'
sx1.substr(10, 13);
sx1.length; //46

// 2. Compare strings
var sx2 = "alpha";
var sx3 = "beta";
log (sx1 < sx3); //true

//... 