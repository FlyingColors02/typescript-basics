"use strict";
//use symbol as key of object
//use symbol as function of class
Object.defineProperty(exports, "__esModule", { value: true });
//symbol is similar to array, object,number, string; that is special datatype
//it give a unique id which we cannot see
let symbolExample1 = Symbol();
console.log(symbolExample1); //Symbol()
//here we don not get id od that symbol but how we know it has unique id
let symbol = Symbol();
console.log(symbol === symbolExample1); //false
let data1 = {
    [symbolExample1]: "Some data"
};
console.log(data1[symbolExample1]); //some data
let demoS1 = Symbol('d1');
class demo {
    [demoS1]() {
        return 'some data';
    }
}
exports.default = demo;
let demoObject1 = new demo();
console.log(demoObject1[demoS1]()); //some data
