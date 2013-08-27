//Array flobal methods

//length
var log = console.log;
var foo = [1,2,3,3,4,5,6,6];
log(foo.length); //8

//concat: create new Array
var bar = [1,2,4];
var baz = foo.concat(bar);

log(foo);
log(bar);
log(baz);

//push/unshift
foo.push(10);
foo.unshift(99);
log(foo);

//pop/shift
var last = foo.pop();
var first = foo.shift();
log(last);
log(first);
log(foo);

//join: combine elements in an arrat into a string
log('<tr><td>' + bar.join('</td></td>') + "</td></tr>");

//slice
var ref = foo.slice(3, 6);
log(ref);
log(foo);
ref[0] = 999;
log(ref);
log(foo);

//reverse
foo.reverse();
log(foo);
foo.reverse();
log(foo);

//sort
foo.sort();
log(foo);

//inhomogeneous types work
var arr = [99, 'mystr', {'asdf': 'alpha'}];
arr.sort();
log(arr);
arr.join(',');

var newarr = arr.slice(0,2);
log(newarr);
log(arr);
newarr[1].asdf = 'ooga';
log(newarr);
log(arr);
