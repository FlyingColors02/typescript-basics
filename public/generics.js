"use strict";
//create a generic func whe want to use again and again
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericFunExample = exports.genericExample = void 0;
function genericExample(data) {
    return data;
}
exports.genericExample = genericExample;
console.log(genericExample('abc'));
//output- anil
//but if pass integer value it will throw error
//console.log(genericsExample(30)); // Argument of type 'number' is not assignable to parameter of type 'string
//To solve this
function genericFunExample(data) {
    return data;
}
exports.genericFunExample = genericFunExample;
console.log(genericFunExample('xyz'));
console.log(genericFunExample(30));
