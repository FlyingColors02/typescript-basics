//their are possibilities a variable may be of different data types
let unionData:string = 'abc';
//unionData = 100; //error
let unionData1:any='abc';
unionData1 = 100;
//but any is not a good solution as we want only some specific data type
let unionData2 : string | number ='abc';
unionData2=100;

console.log(unionData2);
