// JSON examples

// 1. List methods on JSON object

var log = console.log;

log(Object.getOwnPropertyNames(JSON)); 
// [ 'parse', 'stringify' ]


// 2. Using JSON.parse to deserialize JSON strings
var jsdata = '[{"asdf":9, "bar":10}, 18, "baz"]';
var data = JSON.parse(jsdata);
log(data[0].asdf); // 9

// We can also do this with eval, JSON.parse preferable
var data2 = eval(jsdata);
log(data2[0].asdf); // 9
log(data2[1]); // 18

// 3. Using JSON.stringify to serialize JS objects.
// Whil strings, numbers, arrays, and dictionaries/objects are generally
// safe, note that Regexp instances don't have a good default
// serialization and thus needj special handling;
var dt = new Date();
var rex = /(cr|l)/;
var data3 = [9, {"foo": dt, "bar": rex, "baz": {"quux": "a", "alpha": [77, 3]}}, 11];
log(data3);
// 18
// [ 9,
//   { foo: Tue Aug 27 2013 20:13:57 GMT+0400 (MSK),
//     bar: /(cr|l)/,
//     baz: { quux: 'a', alpha: [Object] } },
//   11 ]
 
 // Note that the Regexp instance is serialized to {}
 // rether than "/(cr|l)/"
 var data3str = JSON.stringify(data3);
 log(data3str);
// [9,{"foo":"2013-08-27T16:16:39.848Z","bar":{},"baz":{"quux":"a","alpha":[77,3]}},11]

// We can restore the data structure as shown. Note again that the 
// restoration is only as good as the serialization. Make sure to
// look at the raw JSON string output

var data4 = JSON.parse(data3str);
log(data4);
// [ 9,
//   { foo: '2013-08-27T16:19:01.840Z',
//     bar: {},
//     baz: { quux: 'a', alpha: [Object] } },
//   11 ]


