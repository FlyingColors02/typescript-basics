"use strict";
//when a function does not return anything then it is void function
let sum;
function printData() {
    console.log('hello code');
    sum = 10 * 20;
    //this function is not returning anything
}
printData();
console.log(sum);
