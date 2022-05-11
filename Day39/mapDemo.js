let keyString = "key";
let keyObj = {};
let keyFunction = function() {};

let myMap = new Map();

myMap.set(keyString, "value of keyString");
myMap.set(keyObj, "value of keyObj");
myMap.set(keyFunction, "value of keyFunction");

let size = myMap.size;
console.log("Size of the map : " + size);
console.log(myMap);

let valueString = myMap.get(keyString);
console.log(valueString);

let isKeyExist = myMap.has(keyString);
console.log(isKeyExist);

for ([key, value] of myMap) {
    console.log(key + "=====>" + value);
}

for (key of myMap.keys()) {
    console.log(key);
}

for (v of myMap.values()) {
    console.log(v);
}

myMap.clear();

console.log(myMap.size);

let first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"]
]);

console.log(first);
let second = new Map([
    [1, "uho"],
    [2, "dos"],
]);
console.log(second);

let merged = new Map([...first, ...second, [1, "eins"]]);
console.log(merged.get(1));