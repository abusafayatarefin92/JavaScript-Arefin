function sum(a, b) {
    console.log(a + b);
};
sum(5, 9);

function sumReturn(a, b) {
    return a + b;
};
let sumResult = sumReturn(6, 9);
console.log(sumResult);

let sumFunction = function sumReturn(a, b) {
    return a + b;
};
console.log(sumFunction(7, 9));

let sumFunctionAnnonymas = (a, b) => a + b;
console.log(sumFunctionAnnonymas(8, 9));

//Write a program to check leap year
function checkLeapyear(year){
    if(year%4==0 || year%100==0){
        return "This is leapyear"
    }
    else{
        return "This is not leapyear"
    }
}
console.log(checkLeapyear(2024));
