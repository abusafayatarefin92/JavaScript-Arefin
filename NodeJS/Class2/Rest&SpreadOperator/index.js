// let numbers = [1, 2, 3, 4, 5];
let numbers = [];

function sumFunction(...numbers) { //send all elements of the variable not as array
    return numbers.reduce((a, b) => a + b, 0);//sum all numbers
}

console.log(sumFunction(1, 2, 3, 5));

//Spreads elements of an array (or object) into individual elements

//Using spread operator
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Use the Spread operator to merge the two arrays
let combinedArray = [...array1, ...array2];

console.log("Combined array:", combinedArray);  

// using concat method
let array3 = [1, 2, 3];
let array4 = [4, 5, 6];

// Use concat() to merge the two arrays
let mergedArray = array3.concat(array4);

console.log("Merged array:", mergedArray); 