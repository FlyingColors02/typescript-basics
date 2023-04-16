"use strict";
let test1 = 'hello'; //union type....here variable data type can be string or number
let test2 = 'abc'; //literal type ... here variable either can be abc or 123 no other value will be accepted
function combine(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(10, 20));
console.log(combine('abc', 'def'));
