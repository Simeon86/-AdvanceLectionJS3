alert ('Hello from app.js');

console.log('write in console');

var number = 1;
var string = 'string';
var undefined = undefined;
var booleanVariable = true;
var emtyObj = null;
var fn = function() {}

var arr = [];
var obj = {};

// [1,2,3,4,5] - masiv
//  0 1 2 3 4 - index 

var testArr = [1,2,3,4,5]
console.log(testArr)

var testArr = [1,2,3,4,5]
console.log(testArr[3])

var testArr = [1,2,3,4,5]
console.log(testArr[30])

var testArr = [1,2,3,4,5]
testArr[10] = 11 // add value
console.log(testArr)

testArr[10] = 12 //overwrite
console.log(testArr)

testArr.push(13);
console.log(testArr)

testArr.push(14);
console.log(testArr)

testArr.push(15);
console.log(testArr)
console.log(testArr.pop())
console.log(testArr)

testArr.push(15);
console.log(testArr)
var x = (testArr.pop())
var s = (testArr.shift())
console.log(testArr)

testArr.pop();
console.log(testArr)

testArr.shift();
console.log(testArr)

testArr.push(15);
console.log(testArr)
console.log(testArr.shift())
console.log(testArr)

console.log(testArr.length)
console.log(testArr[testArr.length - 1])

testArr.push('Hello World');
console.log(testArr)

console.log(testArr[testArr.length - 1])

testArr.push([]);
console.log(testArr)

testArr.push([1,2,3,4,5]);
console.log(testArr)

console.log(testArr[12][2])
