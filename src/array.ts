let data = ['a','b','c'];
data.push('d'); // o/p-> [ 'a', 'b', 'c', 'd' ]
//data.push(100); //o/p-> error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
//but
let data1 = ['a','b','c',10];
data1.push(100);// o/p-> [ 'a', 'b', 'c', 10, 100 ]
//data1.push(true); //o/p-> Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
//but 
let data2 =['a','b','c',10,true];
data2.push(false);// o/p-> [ 'a', 'b', 'c', 10, true, false ]

//how to declare a type array in ts
let array1:string[]=['a','b','c'];
array1.push('d');
//let array2:string[]=['a','b','c',10]; //o/p-> Type 'number' is not assignable to type 'string'.
//if datatype is not defined then mixed works.

console.log(array1);