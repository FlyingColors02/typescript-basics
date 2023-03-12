var Example = /** @class */ (function () {
    function Example(params) {
        this.name = 'abc'; //property
        console.log("constructor called", params);
    }
    //function
    Example.prototype.getName = function () {
        console.log(this.name);
    };
    return Example;
}());
//object
var exampleObject = new Example('xyz');
exampleObject.getName();
//result
//constructor called xyz
//abc
var Example1 = /** @class */ (function () {
    function Example1(params) {
        this.name = 'abc'; //property
        this.name = params;
        console.log("constructor called", this.name);
    }
    //function
    Example1.prototype.getName = function () {
        console.log(this.name);
    };
    return Example1;
}());
//object
var exampleObject1 = new Example1('xyz');
exampleObject1.getName();
//result
// constructor called xyz
// xyz
