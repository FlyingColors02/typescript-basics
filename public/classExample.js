"use strict";
class Example {
    constructor(params) {
        this.name = 'abc'; //property
        console.log("constructor called", params);
    }
    //function
    getName() {
        console.log(this.name);
    }
}
//object
let exampleObject = new Example('xyz');
exampleObject.getName();
//result
//constructor called xyz
//abc
class Example1 {
    constructor(params) {
        this.name = 'abc'; //property
        this.name = params;
        console.log("constructor called", this.name);
    }
    //function
    getName() {
        console.log(this.name);
    }
}
//object
let exampleObject1 = new Example1('xyz');
exampleObject1.getName();
//result
// constructor called xyz
// xyz
