var val;
var datatype = typeof val;

console.log(datatype);
console.log(val);

console.log("-------------------------------")

var val = "Hello world";
var datatype = typeof val;

console.log(datatype);
console.log(val);

console.log("-------------------------------")

var val = 10;
var datatype = typeof val;

console.log(datatype);
console.log(val);

console.log("-------------------------------")

var val = true;
var datatype = typeof val;

console.log(datatype);
console.log(val);

console.log("-------------------------------")

var datatype = typeof Symbol("id");
console.log(datatype);

console.log("-------------------------------")

var datatype = typeof Math;
console.log(datatype);

console.log("-------------------------------")

var datatype = typeof null;
console.log(datatype);

console.log("-------------------------------")
var sayHi = function() {
    console.log.apply("Say Hi");
}

var datatype = typeof sayHi;
console.log(sayHi);
console.log(datatype);