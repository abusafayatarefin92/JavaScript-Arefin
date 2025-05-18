let pushMethod = [10, 12, 13, 15];
pushMethod.push(16);

console.log(pushMethod + " push()");

let popMethod = [10, 12, 13, 15];
popMethod.pop();

console.log(popMethod + " pop()");

let shiftMethod = [10, 12, 13, 15];
shiftMethod.shift();

console.log(shiftMethod + " shift()");

let unshiftMethod = [10, 12, 13, 15];
unshiftMethod.unshift(9);

console.log(unshiftMethod + " unshift()");

let sliceMethod = [10, 12, 13, 15];
let slicedArray = sliceMethod.slice(0, 2);

console.log(slicedArray + " slice()"); 

let mapMethod = [10, 12, 13, 15];
let mapNumber = mapMethod.map(e => e * 2);

console.log(mapNumber + " map()"); 

let filterMethod = [10, 12, 13, 15];
let filterNumber = filterMethod.filter(e => e % 2 == 0);

console.log(filterNumber + " filter()");

let reduceMethod = [10, 12, 13, 15];
let sum = reduceMethod.reduce((a, b) => a + b, 0);

console.log(sum + " reduce()")

let joinMethod = [10, 12, 13, 15];
let joinedString = joinMethod.join("-");

console.log("Joined string:", joinedString + " join()");
console.log(`Joined string: ${joinedString}`); //Using literal sign