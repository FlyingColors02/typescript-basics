function Cals() {
    return 10 + 10; //default
}
console.log(Cals()); //20
function Calss() {
    // return 'hello';   //Type 'string' is not assignable to type 'number'.
    return 10 + 10;
}
console.log(Calss()); //20
function stringType() {
    return 'hello world!!';
}
console.log(stringType()); //hello world!!
function withParams(a) {
    return a; //as a's type is not defined can pass any data type and return as well
}
console.log(withParams(10)); //10
console.log(withParams('hello')); //hello
function withParamsAndDataType(a) {
    return a;
}
console.log(withParamsAndDataType(10)); //10
//console.log(withParamsAndDataType('hello')); //Argument of type 'string' is not assignable to parameter of type 'number'.
function withParams1(a, b) {
    return b ? a + b : a;
}
console.log(withParams1(10, 10));
console.log(withParams1(10));
